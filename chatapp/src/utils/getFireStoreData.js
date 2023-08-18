import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export async function fetchUserDataFromFirestore ()
{
   // Assuming you have a collection named "users"
    const usersCollectionRef = collection(db, "users");

        // Fetch the documents within the collection and return the data
    try {
        const querySnapshot = await getDocs(usersCollectionRef);

    // Map the querySnapshot to an array of user data
        const userDataArray = querySnapshot.docs.map((doc) => doc.data());

  return userDataArray; // Return the data
}
catch ( error )
{
  console.error("Error fetching documents:", error);
  return []; // Return an empty array or handle the error as needed
}
}

/** THIS FUNCTION SEARCH THE USER FROM FIRESTORE BASED ON ID'S AND RETURN HIS/HER ALL MESSAGES */
export async function fetchUserMessages (uid)
{
   // Assuming you have a collection named "users"
    const messageCollectionRef = collection(db, "messages");

        // Fetch the documents within the collection and return the data
  try
  {
    const querySnapshot = await getDocs( messageCollectionRef );
    // Map the querySnapshot to an array of user data
    const messageDataArray = querySnapshot.docs.map( ( doc ) => doc.data() );
    const matchingMessages = messageDataArray.map((obj) => {
    return obj.messages.filter(
    (message) => message.receiverUID === uid
  );
    } ).flat();
  return matchingMessages
}
catch ( error )
{
  console.error("Error fetching documents:", error);
  return []; // Return an empty array or handle the error as needed
}
}

export async function fetchAllUserMessages ()
{
   // Assuming you have a collection named "users"
    const messageCollectionRef = collection(db, "messages");

  // Fetch the documents within the collection and return the data
  try
  {
    const querySnapshot = await getDocs( messageCollectionRef );
    // Map the querySnapshot to an array of user data
    const messageDataArray = querySnapshot.docs.map( ( doc ) => doc.data() );
    return messageDataArray
}
catch ( error )
{
  console.error("Error fetching documents:", error);
  return []; // Return an empty array or handle the error as needed
}
}