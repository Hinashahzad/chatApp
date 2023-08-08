
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
/** GET FIREBASE ENVIRONMENT VARIABLE */
const {
  FIREBASE_apiKey,
  FIREBASE_authDomain,
  FIREBASE_projectId,
  FIREBASE_storageBucket,
  FIREBASE_messagingSenderId,
  FIREBASE_appId,
  FIREBASE_measurementId
} = process.env;
/** INITILIZE FIREBASE CONFIG OBJECT */
const firebaseConfig = {
  apiKey: FIREBASE_apiKey,
  authDomain:FIREBASE_authDomain,
  projectId:FIREBASE_projectId,
  storageBucket:FIREBASE_storageBucket,
  messagingSenderId:FIREBASE_messagingSenderId,
  appId:FIREBASE_appId,
  measurementId:FIREBASE_measurementId
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth();