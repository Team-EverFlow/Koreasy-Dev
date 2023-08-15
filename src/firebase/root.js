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
        userBadgeDocs.forEach(v => myBadges.push(v.id));
        myBadges.forEach(async badgeId => {
            const badge = await GetBadgeData(badgeId);
            if (!badge.success) return console.error(badge.error);
            badge.data.eventName.forEach(async eventName => {
                window.addEventListener(eventName, async e => {
                    const { success, error } = await UpdateBadgeProgressValue(
                        user.uid,
                        badge.data.id,
                        e.detail.op,
                    );
                    if (!success) console.error(error);
                });
                console.log('Event Listner: ', eventName);
            });
        });
    }
});
