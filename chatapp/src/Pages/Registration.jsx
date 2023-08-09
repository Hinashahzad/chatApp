import Logo from '../minorComponents/logo';
import LabelText from '../minorComponents/labelText';
import InputTextField from '../minorComponents/inputTextField';
import HeadingText from '../minorComponents/headingText';
import Button from '../minorComponents/button';
import { auth, db } from '../utils/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { AppContext } from '../context/appContext';
import Popup from '../minorComponents/popup';
import { storage } from '../utils/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from "firebase/firestore"

const Registration = () =>
{
  const {
    user,
    setUser,
    //userList,
    //setUserList,
    error,
    setError} = useContext( AppContext ); 
  const submitHandler = async (e) => {
  e.preventDefault();
  
  if (user.userName && user.email && user.password && user.userImg) {
    try {
      const response = await createUserWithEmailAndPassword(auth, user.email, user.password);
      
      const storageRef = ref(storage, user.userName);
      const uploadTask = uploadBytesResumable(storageRef, user.userImg);
      
      uploadTask.on("state_changed",
        null,
        (err) => {
          setError({ status: true, details: err });
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          
          await updateProfile(response.user, {
            displayName: user.userName,
            photoURL: downloadURL
          });

          await setDoc(doc(db, "users", response.user.uid), {
            uid: response.user.uid,
            displayName: user.userName,
            email: user.email,
            photoURL: downloadURL
          });

          setUser({
            userName: "",
            email: "",
            password: "",
            userImg: null // Reset userImg after successful registration
          });
        }
      );
    } catch (err) {
      setError({ status: true, details: err });
    }
  } else {
    alert("Enter the Mandatory fields");
  }
};

    return (<>
        <div
            className="flex min-h-full 
                 flex-col
                 justify-center
                 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo
            size="w-150 h-50" />
            <HeadingText text= "Register your account "/>
        </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
            <LabelText
                id="name"
                text="Name"
                color="text-indigo-600 hover:text-indigo-500"/>
            <div className="mt-2">
                <InputTextField
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="name"
                  width="w-full"
                  focus="focus:ring-2 focus:ring-inset focus:ring-indigo-600 ring-1 ring-inset ring-gray-300"
                  onChange={(e) => setUser({ ...user, userName: e.target.value })}
                   />
            </div>
      </div>
        <div>
            <LabelText
                id="email"
                text="Email address"
              color="text-indigo-600 hover:text-indigo-500"/>
            <div className="mt-2">
                <InputTextField
                    id="email"
                    name="email"
                    type="email"
                  autoComplete="email" 
                  width="w-full"
                  focus="focus:ring-2 focus:ring-inset focus:ring-indigo-600 ring-1 ring-inset ring-gray-300"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
            </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
            <LabelText
            id="password"
                  text="Password"
                color="text-indigo-600 hover:text-indigo-500"/>
        </div>
            <div className="mt-2">
            <InputTextField
                id="password"
                name="password"
                type="password"
                  autocomplete="current-password"
                  width="w-full"
                  focus="focus:ring-2 focus:ring-inset focus:ring-indigo-600 ring-1 ring-inset ring-gray-300"
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
        </div>
            </div>
            <div className="mb-6">
              <LabelText
                id="password"
                text="Add an avatar"
                color="block text-gray-700 text-sm font-bold mb-2"/>
      <div className="relative border rounded-md border-gray-300">
   <InputTextField
                id="image"
                name="image"
                type="file"
                width="w-full"
                accept="image/*"
                focus="opacity-0 absolute inset-0 h-full cursor-pointer"
                onChange={(e) => setUser({ ...user, userImg: e.target.files[0] })}
                />
    <div className="flex items-center justify-center p-4">
      {user.userImg ? (
        <img
          src={URL.createObjectURL(user.userImg)}
          alt="Selected"
          className="w-16 h-16 object-cover rounded-full"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      )}
    </div>
  </div>
</div>
            <div>
              <Button type="submit"
                text="Register"
                size="w-full"/>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">Already a member?
            <LabelText
              text="Log in"
              color="text-indigo-600 hover:text-indigo-500" />
    </p>
  </div>
      </div>
      {error.status && (<Popup text={error.details} />)}
</>);
};
export default Registration;