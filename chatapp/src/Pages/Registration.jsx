import Logo from '../minorComponents/logo';
import LabelText from '../minorComponents/labelText';
import InputTextField from '../minorComponents/inputTextField';
import HeadingText from '../minorComponents/headingText';
import Button from '../minorComponents/button';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { Context } from '../context/context';
const Registration = () =>
{
  const { user, setUser, userList, setUserList } = useContext( Context ); 
  useEffect(() => {
  }, [userList]);
  const submitHandler = (e) =>
  {
    e.preventDefault();
    if ( user.userName && user.email && user.password )
    {
      setUserList( [ ...userList, user ] ); 
      createUserWithEmailAndPassword( auth, user.email, user.password )
      .then((userCredential) => {
      // Signed in 
        const user = userCredential.user;
        console.log(user);
       
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    } );
      setUser({
      userName: "",
      email: "",
      password: ""
    } ); 
      
    }
    else
    {
      alert("Enter the Mandatory fields")
    }
    

  }
    return (<>
        <div
            className="flex min-h-full 
                 flex-col
                 justify-center
                 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo
            size="w-150" />
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
</>);
};
export default Registration;