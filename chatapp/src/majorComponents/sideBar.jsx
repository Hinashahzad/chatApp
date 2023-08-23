import React, { useContext, useEffect } from 'react';
import { NavBar } from '../minorComponents/navBar';
import User from './user';
import InputTextField from '../minorComponents/inputTextField';
import { AppContext } from '../context/appContext';
import { useParams } from 'react-router-dom';
import MessagePannel from './messagePannel';
import { fetchUserByID, fetchUserMessages } from '../utils/getFireStoreData';

function SideBar ( )
{
    const { uid } = useParams();
    const { user, userList, setUserList, setFriend, setUser, friend } = useContext( AppContext );
    //console.log(friend);
    /** DISPLAY REST OF THE USERS LIST IN THE SIDE BAR EXCEPT THE LOGIN USER */
    useEffect( () =>
    {
        const finduser = userList.find( data => data.uid === user.uid );
        if ( finduser )
        {
           console.log("now the findUser", finduser);
    const completeDetails = {
      ...user,
      receivedMessages: finduser.receivedMessages || [] // Set default value as an empty array if receivedMessages is undefined
    };
                setUser(completeDetails);
        }
        
        
        const updateUserList = userList.filter( ( User, index ) => User.uid !== user.uid )
        setUserList( updateUserList );

        // SELECT THE FRIEND FROM SIDE BAR AND ASSIGN THAT USER TO FRIEND OBJECT
        const fetchAllMessages = async () =>
        {
            const friend = userList.find( user => user.uid === uid );
            const fetchFriendData = await fetchUserMessages( uid );
            if ( friend )
            {
               setFriend( {
            friendUID: friend.uid,
            friendName: friend.displayName,
            sendMessages:fetchFriendData
            } ); 
            }
            
        }
           fetchAllMessages();
    }, [ user, uid] )
    
    return ( <>
        <aside
            className="w-1/4 bg-gray-800 text-white p-4 "
            style={ { height: '100vh', overflowY: 'auto' } }>
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
                        ring-inset ring-gray-300" />
        </div>
            <div
            className='container'>
               <ul>
                { userList.map((user, index) => {
                    return (
                        <User
                            key={index}
                            uid={user.uid}
                            name={user.displayName }   
                            img={ user.photoURL }
                        />);})}
                </ul>
            </div>
        </aside>
    <MessagePannel />
    
    </> );
}

export default SideBar;