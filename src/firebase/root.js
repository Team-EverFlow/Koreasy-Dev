import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
    browserLocalPersistence,
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
import { firebaseConfig } from './token';
import './token.js';
import { CREATE_COMMENT_EVENT_NAME } from './type/const';
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
await auth.setPersistence(browserLocalPersistence);
onAuthStateChanged(auth, user => {
    if (user) {
        window.addEventListener(CREATE_COMMENT_EVENT_NAME, () => {});
    } else {
        window.removeEventListener(CREATE_COMMENT_EVENT_NAME);
    }
});
