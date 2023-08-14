import { auth, db } from '../root';
import { DOES_NOT_EXIST_DOC, USER_COLLECTION_ID } from '../type/const';
import { setDoc, doc } from 'firebase/firestore';
import '../type/typedef';
import { GetDocFromCollection } from '../functions/util';

/**
 * UserInformation을 User collection에 UID를 PK로 저장
 * @param {string} UID
 * @param {UserInformation} [initialUserInformation=undefined]
 * @returns {Promise<{success: boolean, error: any}>}
 */
export async function RegisterUser(initialUserInformation = {}) {
    try {
        const user = GetCurrentUserFromFirebase();
        await setDoc(doc(db, USER_COLLECTION_ID, user.uid), {
            recentWord: [],
            repBadge: [],
            bookmark: [],
            testScore: [],
            username: user.displayName,
            profileBackgroundColor: 'black',
            profileAvatarUrl: user.photoURL,
            ...initialUserInformation,
        });
        return { success: true };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * Firebase에서 제공하는 현재 유저 객체를 반환
 * @returns {import('firebase/auth').User | null}
 */
export function GetCurrentUserFromFirebase() {
    return auth.currentUser;
}

/**
 * 현재 유저의 UserInformation정보를 반환
 * @returns { Promise<{success: boolean, error: any, user: UserInformation | undefined}> }
 */
export async function GetCurrentUserInformation() {
    return await GetUserInformation(GetCurrentUserFromFirebase().uid);
}

/**
 * 해당 UID 유저의 UserInformation정보를 반환
 * @param {string} UID
 * @returns { Promise<{success: boolean, error: any, user: UserInformation | undefined}> }
 */
export async function GetUserInformation(UID) {
    try {
        const userSnapRef = await GetDocFromCollection(USER_COLLECTION_ID, UID);
        if (!userSnapRef.exists())
            return { success: false, error: DOES_NOT_EXIST_DOC };
        return { success: true, user: userSnapRef.data() };
    } catch (e) {
        return { success: false, error: e };
    }
}
