import {
    arrayRemove,
    arrayUnion,
    collection,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../root';
import {
    DOES_NOT_EXIST_DOC,
    TESTDATA_COLLECTION_ID,
    USER_COLLECTION_ID,
    WORDTESTVIEW_COLLECTION_ID,
} from '../type/const';
import '../type/typedef';
import { GetDocFromCollection } from '../functions/util';
import { GetCurrentUserFromFirebase } from './userAPI';

/**
 * WordTest의 값을 List로 반환합니다.
 * @returns {Promise<{ success: true, error: any, data: WordTestView[]}>}
 */
export async function GetWordTestList() {
    try {
        const wordTestRef = collection(db, WORDTESTVIEW_COLLECTION_ID);
        const docs = await getDocs(wordTestRef);
        const result = [];
        for (let index = 0; index < docs.size; index++)
            result.push(docs.docs[index].data());
        return { success: true, data: result };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * TestData id의 Doc을 반환합니다.
 * @param {string} testId
 * @returns {Promise<{success: boolean, error: any, data: TestData}>}
 */
export async function GetTestDataList(testId) {
    try {
        const testDataSnap = await GetDocFromCollection(
            TESTDATA_COLLECTION_ID,
            testId,
        );
        if (!testDataSnap.exists())
            return { success: false, error: DOES_NOT_EXIST_DOC };
        return { success: true, data: testDataSnap.data() };
    } catch (e) {
        return { success: false, error: e };
    }
}
/**
 * 모의고사 점수를 현재유저의 UserInformation에 저장합니다.
 * @param {string} testDataId
 * @param {string} solve
 * @param {string} question
 * @returns {{ success: boolean, error: any | undefined }}
 */
export async function SetTestScore(testDataId, solve, question) {
    try {
        const userInfoRef = doc(
            db,
            USER_COLLECTION_ID,
            GetCurrentUserFromFirebase().uid,
        );
        const userInfoSnap = await getDoc(userInfoRef);
        if (!userInfoSnap.exists())
            return { success: false, error: DOES_NOT_EXIST_DOC };
        const data = userInfoSnap
            .data()
            .testScore.find(v => v.testDataId === testDataId);
        if (data)
            await updateDoc(userInfoRef, { testScore: arrayRemove(data) });
        const pushData = {
            testDataId,
            solve,
            question,
        };
        await updateDoc(userInfoRef, { testScore: arrayUnion(pushData) });
        return { success: true };
    } catch (e) {
        return { success: false, error: e };
    }
}
