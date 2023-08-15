import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../root';
import { USER_COLLECTION_ID } from '../type/const';
import { GetCurrentUserFromFirebase } from './userAPI';

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
