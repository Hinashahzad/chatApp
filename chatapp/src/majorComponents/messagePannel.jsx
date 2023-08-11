import React, { useContext, useEffect, useState } from 'react';
import InputPannel from './inputPannel';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/appContext';
import { fetchUserMessages } from '../utils/getFireStoreData';

function MessagePannel ()
{
    const { uid } = useParams();
    const { user,setUser } = useContext(AppContext);

    useEffect(() => {
    // Fetch user-specific messages using the uid
    fetchUserMessages()
      .then(messages => {
        setUser({sendMessages:messages});
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  }, [uid]);
    return (
    <div className="w-3/4 bg-gray-100 p-4"
            style={ { minHeight: "calc(100vh - 2rem)" } }>
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
    <p>
    
    </p>
    <InputPannel />
</div>
    );
}

export default MessagePannel;