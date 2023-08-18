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
import { SuccessBadgeEvent } from './functions/Events';

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
        for (const badgeId of badges) {
            const badge = await GetBadgeData(badgeId);
            if (!badge.success) console.error(badge.error);
            const mybadgeDoc = await GetDocFromCollection(
                USER_COLLECTION_ID,
                user.uid,
                MYBADGE_COLLECTION_ID,
                badge.data.id,
            );
            if (mybadgeDoc.exists() && mybadgeDoc.data().addedTime) continue;
            for (const eventName of badge.data.eventName) {
                window.addEventListener(eventName, async e => {
                    console.log(e);
                    const { success, error } = await UpdateBadgeProgressValue(
                        user.uid,
                        badge.data.id,
                        e.detail,
                    );
                    if (!success) return console.error(error);
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
                        console.log('root: ', badge.data.successEventName);
                        window.dispatchEvent(
                            SuccessBadgeEvent(
                                badge.data.successEventName,
                                badge.data.id,
                            ),
                        );
                        if (!status.success) return console.error(status.error);
                    }
                });
            }
        }
    }
});
