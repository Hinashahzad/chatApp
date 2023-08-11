import { doc, setDoc } from "firebase/firestore";
import { db } from '../utils/firebase';

/** FUNCTION TO SAVE USER DATA TO FIRE STORE */
export async function saveDataToFireStore (DBName, userData, uid)
{
    const userDocRef = doc( db, DBName, uid );
    await setDoc(userDocRef, userData);
}