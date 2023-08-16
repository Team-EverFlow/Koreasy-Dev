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
import {
    AddBadgeAddedTime,
    GetBadgeData,
    UpdateBadgeProgressValue,
} from './api/BadgeApi';
import {
    BADGE_COLLECTION_ID,
    DOES_NOT_EXIST_DOC,
    MYBADGE_COLLECTION_ID,
    USER_COLLECTION_ID,
} from './type/const';
import { GetDocFromCollection } from './functions/util';
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
await auth.setPersistence(browserLocalPersistence);
auth.onAuthStateChanged(async user => {
    if (user) {
        const userDocRef = doc(db, USER_COLLECTION_ID, user.uid);
        const userDoc = await getDoc(userDocRef);
        if (!userDoc.exists()) return console.error(DOES_NOT_EXIST_DOC);
        const badgeRef = collection(db, BADGE_COLLECTION_ID);
        const badgeDocs = await getDocs(badgeRef);
        const badges = [];
        badgeDocs.forEach(v => badges.push(v.id));
        badges.forEach(async badgeId => {
            const badge = await GetBadgeData(badgeId);
            if (!badge.success) return console.error(badge.error);
            badge.data.eventName.forEach(async eventName => {
                window.addEventListener(eventName, async e => {
                    const { success, error } = await UpdateBadgeProgressValue(
                        user.uid,
                        badge.data.id,
                        e.detail,
                    );
                    if (!success) console.error(error);
                    const badgeDoc = await GetDocFromCollection(
                        USER_COLLECTION_ID,
                        user.uid,
                        MYBADGE_COLLECTION_ID,
                        badge.data.id,
                    );
                    if (!badgeDoc.exists()) console.error(DOES_NOT_EXIST_DOC);
                    if (badgeDoc.data().progressValue >= badge.data.goalValue) {
                        const status = await AddBadgeAddedTime(
                            user.uid,
                            badge.data.id,
                        );
                        if (!status.success) console.error(status.error);
                    }
                });
            });
        });
    }
});
