import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../root';
import { USER_COLLECTION_ID } from '../type/const';
import { GetCurrentUserFromFirebase } from './userAPI';

/**
 * 해당 뱃지 id를 현재 유저의 UserInformation repBadge 를 설정합니다.
 * @param {Array<string>} badgeId
 * @returns {Promise<{ success: boolean, error: any | undefined }>}
 */
export async function UpdateRepBadge(badgeId) {
    try {
        const userInfoRef = doc(
            db,
            USER_COLLECTION_ID,
            GetCurrentUserFromFirebase().uid,
        );
        await updateDoc(userInfoRef, { repBadge: badgeId });
        return { success: true };
    } catch (e) {
        return { success: false, error: e };
    }
}
