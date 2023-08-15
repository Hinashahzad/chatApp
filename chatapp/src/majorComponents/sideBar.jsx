import React, { useContext, useEffect } from 'react';
import { NavBar } from '../minorComponents/navBar';
import User from './user';
import InputTextField from '../minorComponents/inputTextField';
import { AppContext } from '../context/appContext';
import { useParams } from 'react-router-dom';

function SideBar ( )
{
    const { uid } = useParams();
    const { user, userList, setUserList, setFriend } = useContext( AppContext );

    /** DISPLAY REST OF THE USERS LIST IN THE SIDE BAR EXCEPT THE LOGIN USER */
    useEffect( () =>
    {
        const updateUserList = userList.filter( ( User, index ) => User.uid !== user.uid )
        setUserList( updateUserList );
        const friend = userList.find( user => user.uid === uid );
        setFriend( {
            friendUID: friend.uid,
            friendName: friend.displayName,
        } );
    }, [ user, uid ] )
    
    return ( <>
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
                    return (
                        <User
                        key={index}
                        uid={user.uid}
                        name={ user.displayName }   
                        img={user.photoURL}
                        />
                    );
                })}
</ul>
            </div>
        </aside></>
    
    );
}

export default SideBar;