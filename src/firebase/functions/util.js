import { doc, getDoc } from 'firebase/firestore';
import { db } from '../root';

/** 특정 Collection으로 부터 Doc을 불러옴
 * @async
 * @param {string} path
 * @param {string[]} pathSegments
 * @returns {Promise<import('firebase/firestore').DocumentSnapshot>}
 */
export async function GetDocFromCollection(path, ...pathSegments) {
    const userDocRef = doc(db, path, ...pathSegments);
    return getDoc(userDocRef);
}
