import { DOES_NOT_EXIST_DOC, WORD_COLLECTION_ID } from '../type/const';
import { GetDocFromCollection } from '../functions/util';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../root';
import '../type/typedef';

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
        return { success: true, data: word.data() };
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
        querySnapshot.forEach(doc => wordList.push(doc.data()));
        return { success: true, data: wordList };
    } catch (e) {
        return { success: false, error: e };
    }
}
