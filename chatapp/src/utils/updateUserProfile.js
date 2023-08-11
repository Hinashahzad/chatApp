import { updateProfile } from "firebase/auth";

export async function updateUserProfile (user)
{
     await updateProfile(user, {
            displayName: user.userName,
            photoURL: user.downloadURL
          } );
}