import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

export async function firebaseLogin (email, password)
{
    const response = await createUserWithEmailAndPassword( auth, email, password );
    return response;
}

export async function firebaseLogout ()
{
    try
    {
       auth.signOut(); 
    }
    catch ( error )
    {
        console.error('Error logging out:', error.message);
    }
    
}