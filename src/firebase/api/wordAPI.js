import {
    COMMENT_COLLECTION_ID,
    DOES_NOT_EXIST_DOC,
    USER_COLLECTION_ID,
    WORD_COLLECTION_ID,
} from '../type/const';
import { GetDocFromCollection } from '../functions/util';
import {
    Timestamp,
    addDoc,
    arrayRemove,
    arrayUnion,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
} from 'firebase/firestore';
import { db } from '../root';
import '../type/typedef';
import { GetCurrentUserFromFirebase } from './userAPI';
import { CreateCommentEvent, DeleteCommentEvent } from '../functions/Events';

/**
 * word의 id를 이용하여 해당 Word doc을 불러옴
 * @param {string} id
 * @returns {Promise<{ success: boolean, error: any, data: Word | undefined }>}
 */
export async function GetWordUsingId(id) {
    try {
        const word = await GetDocFromCollection(WORD_COLLECTION_ID, id);
        if (!word.exists())
            return { success: false, error: DOES_NOT_EXIST_DOC };
        const comments = await GetCommentsFromWord(word.id);
        return {
            success: true,
            data: {
                ...word.data(),
                id: word.id,
                comments: comments.data || [],
            },
        };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * wordKr을 이용하여 조건에 맞는 Word doc를 list로 불러옴
 * @param {string} wordKr
 * @returns {Promise<{ success: boolean, error: any, data: Word[] }>}
 */
export async function GetWordsUsingKr(wordKr) {
    return GetWordsUsingField('wordKr', wordKr);
}

/**
 * wordEn을 이용하여 조건에 맞는 Word doc를 list로 불러옴
 * @param {string} wordEn
 * @returns {Promise<{ success: boolean, error: any, data: Word[] }>}
 */
export async function GetWordsUsingEn(wordEn) {
    return GetWordsUsingField('wordEn', wordEn);
}

/**
 * Word collection에 있는 doc중에 field값이 word인 doc을 검색해서 list로 반환함
 * @param {"wordKr" | "wordEn"} field
 * @param {string} word
 * @returns {Promise<{ success: boolean, error: any, data: Word[] }>}
 */
async function GetWordsUsingField(field, word) {
    try {
        const wordRef = collection(db, WORD_COLLECTION_ID);
        const wordQry = query(wordRef, where(field, '==', word));
        const querySnapshot = await getDocs(wordQry);
        const wordList = [];
        querySnapshot.forEach(doc =>
            wordList.push({
                ...doc.data(),
                id: doc.id,
            }),
        );
        return { success: true, data: wordList };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * 해당 단어를 현재 유저의 프로필의 북마크 목록에 추가합니다.
 * @param {string} id
 * @returns {Promise<{success: boolean, error: any}>}
 */
export async function AddBookmark(id) {
    try {
        const userInfoRef = doc(
            db,
            USER_COLLECTION_ID,
            GetCurrentUserFromFirebase().uid,
        );
        const userInfoSnap = await getDoc(userInfoRef);
        if (!userInfoSnap.exists())
            return { success: false, error: DOES_NOT_EXIST_DOC };
        const data = userInfoSnap.data().bookmark.find(v => v.id === id);
        if (data) return { success: true };
        const pushData = {
            id,
            date: Timestamp.fromDate(new Date()),
        };
        await updateDoc(userInfoRef, { bookmark: arrayUnion(pushData) });
        return { success: true };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * 해당 단어를 현재 유저의 프로필의 북마크 목록에서 제거합니다.
 * @param {string} id
 * @returns {Promise<{success: boolean, error: any}>}
 */
export async function RemoveBookmark(id) {
    try {
        const userInfoRef = doc(
            db,
            USER_COLLECTION_ID,
            GetCurrentUserFromFirebase().uid,
        );
        const userInfoSnap = await getDoc(userInfoRef);
        if (!userInfoSnap.exists())
            return { success: false, error: DOES_NOT_EXIST_DOC };
        const data = userInfoSnap.data().bookmark.find(v => v.id === id);
        if (!data) return { success: true };
        await updateDoc(userInfoRef, { bookmark: arrayRemove(data) });
        return { success: true };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * 단어에 댓글을 추가합니다.
 * @param {string} wordId 단어 ID(PK값)
 * @param {string} comment 댓글 내용
 * @returns {Promise<{ success:boolean, error: any | undefined }>}
 */
export async function CreateComment(wordId, comment) {
    try {
        const user = GetCurrentUserFromFirebase();
        const commentRef = collection(
            db,
            WORD_COLLECTION_ID,
            wordId,
            COMMENT_COLLECTION_ID,
        );
        await addDoc(commentRef, {
            username: user.displayName,
            userId: user.uid,
            date: Timestamp.fromDate(new Date()),
            comment,
            reactUsers: [],
        });
        window.dispatchEvent(CreateCommentEvent());
        return { success: true };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * 단어의 특정 댓글을 삭제합니다
 * (현재 유저와 댓글을 작성한 유저가 같을 경우에만 삭제합니다.)
 * @param {string} wordId
 * @param {string} commentId
 * @returns {Promise<{success: boolean, error: any | undefined}>}
 */
export async function DeleteComment(wordId, commentId) {
    try {
        const commentDoc = await getDoc(
            doc(db, WORD_COLLECTION_ID, wordId, COMMENT_COLLECTION_ID),
        );
        if (!commentDoc.exists())
            return { success: false, error: DOES_NOT_EXIST_DOC };
        if (commentDoc.data().userId !== GetCurrentUserFromFirebase().uid)
            return {
                success: false,
                error: 'Permission denied',
            };
        await deleteDoc(
            doc(
                db,
                WORD_COLLECTION_ID,
                wordId,
                COMMENT_COLLECTION_ID,
                commentId,
            ),
        );
        window.dispatchEvent(DeleteCommentEvent());
        return { success: true };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * 현재 시각 이전에 생성된 단어들을 전부 불러옵니다
 * @returns {Promise<{ success: boolean, error: any | undefined, data: Word[] | undefined}>}
 */
export async function GetWordList() {
    try {
        const wordRef = collection(db, WORD_COLLECTION_ID);
        const wordQry = query(
            wordRef,
            where('addedTime', '<=', Timestamp.fromDate(new Date())),
        );
        const wordDocs = await getDocs(wordQry);
        const result = [];
        for (const doc of wordDocs.docs)
            result.push({
                ...doc.data(),
                id: doc.id,
            });
        return { success: true, data: result };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * 일정 기간 사이에 생성된 단어들을 반환합니다
 * @param {Date} startDate 시작 날짜
 * @param {Date} endDate 끝 날짜 (endDate는 검색 범위에 포함되지 않습니다)
 * @returns {Promise<{ success: boolean, error: any | undefined, data: Word[]}>}
 */
export async function GetWordListSpan(startDate, endDate) {
    try {
        const wordRef = collection(db, WORD_COLLECTION_ID);
        const wordQry = query(
            wordRef,
            where('addedTime', '>=', Timestamp.fromDate(startDate)),
            where('addedTime', '<', Timestamp.fromDate(endDate)),
        );
        const wordDocs = await getDocs(wordQry);
        const result = [];
        for (const doc of wordDocs.docs)
            result.push({
                ...doc.data(),
                id: doc.id,
            });
        return { success: true, data: result };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * wordId로부터 Comment 목록을 반환합니다.
 * @param {string} wordId
 * @returns {Promise<{success: boolean, error: any | undefined, data: Comment[] | undefined}>}
 */
export async function GetCommentsFromWord(wordId) {
    try {
        const commentDocs = await getDocs(
            query(
                collection(
                    db,
                    WORD_COLLECTION_ID,
                    wordId,
                    COMMENT_COLLECTION_ID,
                ),
            ),
        );
        const comments = [];
        for (const comment of commentDocs.docs)
            comments.push({
                id: comment.id,
                ...comment.data(),
            });
        return { success: true, data: comments };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * 댓글에 반응을 추가합니다.
 * @param {string} wordId
 * @param {string} commentId
 * @returns {Promise<{ success: boolean, error: any | undefined }}
 */
export async function AddReactComment(wordId, commentId) {
    try {
        const commentRef = doc(
            db,
            WORD_COLLECTION_ID,
            wordId,
            COMMENT_COLLECTION_ID,
            commentId,
        );
        await updateDoc(commentRef, {
            reactUsers: arrayUnion(GetCurrentUserFromFirebase().uid),
        });
        return { success: true };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * 댓글에 반응을 삭제 합니다.
 * @param {string} wordId
 * @param {string} commentId
 * @returns {Promise<{ success: boolean, error: any | undefined }}
 */
export async function DeleteReactComment(wordId, commentId) {
    try {
        const commentRef = doc(
            db,
            WORD_COLLECTION_ID,
            wordId,
            COMMENT_COLLECTION_ID,
            commentId,
        );
        await updateDoc(commentRef, {
            reactUsers: arrayRemove(GetCurrentUserFromFirebase().uid),
        });
        return { success: true };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * 오늘의 단어에 해당되는 단어를 불러옵니다.
 * @returns {Promise<{ success: boolean, error: any | undefined, data: Word[]}>}
 */
export async function GetTodayWordList() {
    const currentDate = new Date();
    return GetWordListSpan(
        new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
        ),
        new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() + 1,
        ),
    );
}
