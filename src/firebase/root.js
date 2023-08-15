import { initializeApp } from 'firebase/app';
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
} from 'firebase/firestore';
import { browserLocalPersistence, getAuth } from 'firebase/auth';
import { firebaseConfig } from './token';
import './token.js';
import { GetUserInformation } from './api/userAPI';
import { GetBadgeData, UpdateBadgeProgressValue } from './api/BadgeApi';
import {
    DOES_NOT_EXIST_DOC,
    MYBADGE_COLLECTION_ID,
    USER_COLLECTION_ID,
} from './type/const';
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
await auth.setPersistence(browserLocalPersistence);
auth.onAuthStateChanged(async user => {
    if (user) {
        const userDocRef = doc(db, USER_COLLECTION_ID, user.uid);
        const userDoc = await getDoc(userDocRef);
        if (!userDoc.exists()) return console.error(DOES_NOT_EXIST_DOC);
        const userBadgeRef = collection(
            db,
            USER_COLLECTION_ID,
            user.uid,
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
        const userInformation = {
            ...userDoc.data(),
            myBadges,
        };
        console.log(userInformation);
        userInformation.myBadges.forEach(async v => {
            const badge = await GetBadgeData(v.badgeId);
            if (!badge.success) return console.error(badge.error);
            window.addEventListener(badge.data.eventName, async () => {
                await UpdateBadgeProgressValue(user.uid, badge.data.id);
            });
        });
    }
});
