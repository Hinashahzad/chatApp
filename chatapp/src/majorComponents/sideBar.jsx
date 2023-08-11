import React, { useContext } from 'react';
import { NavBar } from '../minorComponents/navBar';
import User from './user';
import InputTextField from '../minorComponents/inputTextField';
import { AppContext } from '../context/appContext';

function SideBar (  {loginUserUID})
{
    console.log("Login user is", loginUserUID);
    const { userList } = useContext( AppContext );
    return (
        <aside className="w-1/4 bg-gray-800 text-white p-4">
            <NavBar />
            <div className='flex mt-5'>
            <InputTextField
                    id="searchBar"
                    name="search"
                    type="search"
                    autoComplete="search"
                placeHolderText="Find a user"
                width="w-full"
                  focus="focus:ring-2 focus:ring-inset 
                        focus:ring-indigo-600 ring-1
                        ring-inset ring-gray-300"
                    />
        </div>
            <div className='container overflow-y-auto border'>
               <ul>
                {userList.map((user, index) => {
                    // Check if the user's uid is not equal to the loginUserUID
                    if (user.uid !== loginUserUID) {
                    return (
                        <User
                        key={index}
                        uid={user.uid}
                        name={user.displayName}
                        img={user.photoURL}
                        />
                    );
                    }
                    return null; // Skip rendering if the user's uid matches loginUserUID
                })}
</ul>

            </div>
            
      </aside>
    );
}

export default SideBar;