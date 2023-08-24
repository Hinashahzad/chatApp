import { useContext, useEffect } from "react";
import Button from '../minorComponents/button'
import HeadingText from "../minorComponents/headingText";
import InputTextField from "../minorComponents/inputTextField";
import LabelText from "../minorComponents/labelText";
import Logo from "../minorComponents/logo";
import { AppContext } from "../context/appContext";
import { signInWithEmailAndPassword } from "firebase/auth";
 import { auth, db } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import image from '../assets/chat logo.png';
import {fetchUserDataFromFirestore } from "../utils/getFireStoreData";
const Login = () =>
{
  const {
    user,setUserList,
    setUser, userList } = useContext( AppContext ); 
  const navigate = useNavigate();
  //console.log("userList is ", userList);
  // FETCHING ALL THE USERS WHO ARE REGISTERED ON THE FIRESTORE AND SET THEM INTO USERlIST
  useEffect( () =>
  {
     const fetchData = async () => {
      try {
        const userDataArray = await fetchUserDataFromFirestore();
        setUserList( userDataArray );
        
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();

  }, [] )
  
  /** HANDLE SUBMIT FUNCTION */
  const submitHandler = async (e) => {
    e.preventDefault();
    if ( user.email && user.password )
    {
      // SIGN IN FIRESTORE 
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
      const User = userCredential.user;
      if ( User ){
        const userDocRef = doc(db, "users", User.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUser( {
            uid: userData.uid,
            displayName: userData.displayName,
            email: userData.email,
            photoURL: userData.photoURL
          })
          // Perform further actions with user data
          navigate(`/Home/${User.uid}`);
        } else {
          console.log("User data not found in Firestore");
        }
       
    }
  }
};

  return ( <> 
          <div
            className="flex min-h-full 
                 flex-col
                 justify-center
                 px-6 py-12 lg:px-8 border border-blue-500">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Logo img={ image} />
                <HeadingText text= "Sign in to your account "/>
        </div>
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={submitHandler}>
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
                  autocomplete="email"
                  width="w-full"
                  focus="focus:ring-2 focus:ring-inset 
                        focus:ring-indigo-600 ring-1
                        ring-inset ring-gray-300"
                onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
            <LabelText
            id="password"
            text="Password"/>
            <div className="text-sm">
                <LabelText text="Forgot password?" color="text-indigo-600 hover:text-indigo-500"/>
            </div>
        </div>
            <div className="mt-2">
            <InputTextField
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  width="w-full"
                  focus="focus:ring-2 focus:ring-inset focus:ring-indigo-600 ring-1 ring-inset ring-gray-300"
                 onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </div>
      </div>
            <div>
              <Button type="submit"
              text="Sign in"/>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">Not a member? 
            <LabelText text=" Register" color="text-indigo-600 hover:text-indigo-500"
              onClick={ ()=>{navigate('/registration')}} />
    </p>
  </div>
      </div>
    
    </> );
};
export default Login;