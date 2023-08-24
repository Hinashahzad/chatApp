import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from '../utils/firebase';

/** FUNCTION TO SAVE USER DATA TO FIRE STORE */
export async function saveDataToFireStore (DBName, userData, uid)
{
    const userDocRef = doc( db, DBName, uid );
    await setDoc(userDocRef, userData);
}
export function listenToMessages(uid, onMessageUpdate) {
  const messagesRef = doc(db, 'users', uid);
    
  const unsubscribe = onSnapshot(messagesRef, (snapshot) => {
      const messagesData = snapshot.data().receivedMessages;
      console.log("messagesData", messagesData);
        onMessageUpdate(messagesData);
  });
    //console.log("Unsubscribe", unsubscribe);
  return unsubscribe;
}