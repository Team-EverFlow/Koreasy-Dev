import { collection, getDocs } from 'firebase/firestore';
import { db } from '../root';
import {
    DOES_NOT_EXIST_DOC,
    TESTDATA_COLLECTION_ID,
    WORDTESTVIEW_COLLECTION_ID,
} from '../type/const';
import '../type/typedef';
import { GetDocFromCollection } from '../functions/util';

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
