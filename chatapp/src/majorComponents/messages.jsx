import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';

function Messages ( )
{
  const { messages, friend } = useContext( AppContext );
    return (
          <div  className="bg-gray-200 p-4 rounded-lg shadow-md">
            <div className="bg-blue-500 text-white p-2 rounded-lg mb-2 max-w-md">    
         { /*{ messages && messages.map( ( data, index ) =>
          {
            //console.log( "data.receiverUID = ", data.friendUID, "friend.friendUID =", friend.friendUID );
            if ( data.friendUID === friend.friendUID )
            {
              console.log("Data i have found", data);
              data.friendMessages && data.friendMessages.map( ( msg ) =>
              {
                return ( <>
                <div key={index}
                  className="flex justify-end mb-2">
                <div className="max-w-[80%] p-2 rounded-lg bg-blue-500 text-white">
                  { msg.messages} 
                </div>
              </div>

              <div className="flex justify-start mb-2">
                <div className="max-w-[80%] p-2 rounded-lg bg-gray-200">
                 
                </div>
              </div>
</> )
              })
              
            }
              
        })} */}
        </div>
      </div>
    );
}

export default Messages;