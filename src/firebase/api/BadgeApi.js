import { GetDocFromCollection } from '../functions/util';
import { BADGE_COLLECTION_ID, DOES_NOT_EXIST_DOC } from '../type/const';
import '../type/typedef';

/**
 * 해당 id 값을 가진 Badge의 정보를 반환합니다.
 * @param {string} id
 * @returns {{ success: boolean, error: any, data: Badge }}
 */
export async function GetBadgeInformation(id) {
    try {
        const badgeRef = await GetDocFromCollection(BADGE_COLLECTION_ID, id);
        if (!badgeRef.exists())
            return { success: false, error: DOES_NOT_EXIST_DOC };
        return { success: true, data: badgeRef.data() };
    } catch (e) {
        return { success: false, error: e };
    }
}
