import {
    Timestamp,
    arrayUnion,
    doc,
    getDoc,
    increment,
    setDoc,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../root';
import {
    BADGE_COLLECTION_ID,
    DOES_NOT_EXIST_DOC,
    MYBADGE_COLLECTION_ID,
    USER_COLLECTION_ID,
} from '../type/const';
import { GetCurrentUserFromFirebase } from './userAPI';
import { GetDocFromCollection } from '../functions/util';

/**
 * 해당 뱃지id를 현재 유저의 UserInformation repBadge에 추가합니다.
 * @param {string} badgeId
 * @returns {{ success: boolean, error: any | undefined }}
 */
export async function AddRepBadge(badgeId) {
    try {
        const userInfoRef = doc(
            db,
            USER_COLLECTION_ID,
            GetCurrentUserFromFirebase().uid,
        );
        await updateDoc(userInfoRef, { repBadge: arrayUnion(badgeId) });
        return { success: true };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * 뱃지 정보를 반환합니다.
 * @param {string} badgeId
 * @returns {Promise<{ success: boolean, error: any | undefined, data: Badge }>}
 */
export async function GetBadgeData(badgeId) {
    try {
        const badgeData = await GetDocFromCollection(
            BADGE_COLLECTION_ID,
            badgeId,
        );
        if (!badgeData.exists())
            return { success: false, error: DOES_NOT_EXIST_DOC };
        return {
            success: true,
            data: {
                id: badgeId,
                ...badgeData.data(),
            },
        };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 *
 * @param {string} uid
 * @param {string} badgeId
 * @param {string} value
 * @returns {Promise<{ success: boolean, error: any | undefined }>}
 */
export async function UpdateBadgeProgressValue(uid, badgeId, { set, op }) {
    try {
        const myBadgeRef = doc(
            db,
            USER_COLLECTION_ID,
            uid,
            MYBADGE_COLLECTION_ID,
            badgeId,
        );
        const myBadgeDoc = await getDoc(myBadgeRef);
        if (!myBadgeDoc.exists()) {
            await setDoc(myBadgeRef, { progressValue: op });
            return { success: true };
        }
        await updateDoc(myBadgeRef, {
            progressValue: set ? op : increment(op),
        });
        return { success: true };
    } catch (e) {
        return { success: false, error: e };
    }
}
/**
 * 뱃지 취득 시간을 추가합니다.
 * @param {string} uid
 * @param {string} badgeId
 * @returns {Promise<{ success: boolean, error: any | undefined }>}
 */
export async function AddBadgeAddedTime(uid, badgeId) {
    try {
        const myBadgeRef = doc(
            db,
            USER_COLLECTION_ID,
            uid,
            MYBADGE_COLLECTION_ID,
            badgeId,
        );
        const myBadgeDoc = await getDoc(myBadgeRef);
        if (!myBadgeDoc.exists()) {
            return { success: false, error: DOES_NOT_EXIST_DOC };
        }
        await updateDoc(myBadgeRef, {
            addedTime: Timestamp.fromDate(new Date()),
        });
        return { success: true };
    } catch (e) {
        return { success: true, error: e };
    }
}
