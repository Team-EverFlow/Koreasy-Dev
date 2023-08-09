import { auth } from '../root';
import { USER_COLLECTION_ID } from '../type/const';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import '../type/typedef';
import { GetDocFromCollection } from '../functions/util';

/**
 * Google로그인을 Popup으로 열어 로그인 시도
 * @returns {Promise<{state: ("signIn" | "register" | "error"), user: import("firebase/auth").User | undefined, error: any }>}
 */
export async function GoogleAuth() {
    const googleProvider = new GoogleAuthProvider();
    try {
        const { user } = await signInWithPopup(auth, googleProvider);
        const userDocSnap = await GetDocFromCollection(
            USER_COLLECTION_ID,
            user.uid,
        );
        if (userDocSnap.exists()) return { state: 'signIn', user };
        else return { state: 'register', user };
    } catch (e) {
        return { state: 'error', error: e };
    }
}
