import { auth, db } from '../root';
import {
    BADGE_COLLECTION_ID,
    DOES_NOT_EXIST_DOC,
    MYBADGE_COLLECTION_ID,
    USER_COLLECTION_ID,
} from '../type/const';
import {
    setDoc,
    doc,
    updateDoc,
    arrayUnion,
    Timestamp,
    getDocs,
    deleteDoc,
    collection,
} from 'firebase/firestore';
import '../type/typedef';
import { GetDocFromCollection } from '../functions/util';
import { deleteUser, signOut } from 'firebase/auth';
import { AttendanceEvent } from '../functions/Events';

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
            username: user.displayName,
            profileBackgroundColor: 'black',
            profileAvatarUrl: user.photoURL,
            recentWord: [],
            repBadge: [],
            bookmark: [],
            testScore: [],
            attendance: [],
            ...initialUserInformation,
        });
        const badgeSnap = await getDocs(collection(db, BADGE_COLLECTION_ID));
        for (const badge of badgeSnap.docs) {
            await setDoc(
                doc(
                    db,
                    USER_COLLECTION_ID,
                    user.uid,
                    MYBADGE_COLLECTION_ID,
                    badge.id,
                ),
                {
                    progressValue: 0,
                },
            );
        }
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
    return auth?.currentUser;
}

/**
 * 현재 유저의 UserInformation정보를 반환
 * @returns { Promise<{success: boolean, error: any, user: UserInformation | undefined}> }
 */
export async function GetCurrentUserInformation() {
    const user = GetCurrentUserFromFirebase();
    if (!user) return { success: false, error: 'User is null' };
    return await GetUserInformation(user.uid);
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
        const userBadgeRef = collection(
            db,
            USER_COLLECTION_ID,
            UID,
            MYBADGE_COLLECTION_ID,
        );
        const userBadgeDocs = await getDocs(userBadgeRef);
        const myBadges = [];
        userBadgeDocs.forEach(v =>
            myBadges.push({
                ...v.data(),
                badgeId: v.id,
            }),
        );
        return {
            success: true,
            user: {
                ...userSnapRef.data(),
                myBadges,
            },
        };
    } catch (e) {
        return { success: false, error: e };
    }
}

/**
 * Firebase에서 로그아웃합니다.
 * @returns {Promise<{success: boolean, error: any | undefined}}
 */
export async function SignOutFromFirebase() {
    try {
        await signOut(auth);
        return { success: true };
    } catch (e) {
        return { success: false, error: e };
    }
}


/**
 * 해당 Date를 현재 유저의 UserInformation.attendace에 추가합니다.
 * @param {Date} date
 * @returns {Promise<{ success: boolean, error: any | undefined }>}
 */
export async function AddAttendance(date) {
    try {
        const user = GetCurrentUserFromFirebase();
        if (!user) return { success: false, error: 'User is null' };
        const userInfoRef = doc(db, USER_COLLECTION_ID, user.uid);
        await updateDoc(userInfoRef, {
            attendance: arrayUnion(Timestamp.fromDate(date)),
        });
        window.dispatchEvent(AttendanceEvent());

/**
 * 현재 유저를 데이터에서 삭제합니다.
 * (Firebase Auth 정보 삭제, Firestore 유저 DB 삭제)
 * @returns {Promise<{ success: boolean, error: any | undefined }}
 */
export async function DeleteUser() {
    try {
        const user = GetCurrentUserFromFirebase();
        if (!user) return { success: false, error: 'User is null' };
        await deleteDoc(doc(db, USER_COLLECTION_ID, user.uid));
        await deleteUser(user);
        return { success: true };
    } catch (e) {
        return { success: false, error: e };
    }
}
