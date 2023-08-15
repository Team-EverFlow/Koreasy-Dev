import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { browserLocalPersistence, getAuth } from 'firebase/auth';
import { firebaseConfig } from './token';
import './token.js';
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
await auth.setPersistence(browserLocalPersistence);
