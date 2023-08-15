import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';

function Messages ( )
{
  const { messages } = useContext( AppContext );
  console.log(messages);
    return (
          <div  className="bg-gray-200 p-4 rounded-lg shadow-md">
            <div className="bg-blue-500 text-white p-2 rounded-lg mb-2 max-w-md">    
          { messages.map( ( data, index ) =>
          {
            return ( <p key={ index }> { data.messages}</p>)
        })}
        </div>
      </div>
    );
}

export default Messages;