import React, { useContext, useEffect } from 'react';
import InputPannel from './inputPannel';
import { AppContext } from '../context/appContext';
import Messages from './messages';
import MessageBar from '../minorComponents/mesaagebar';


function MessagePannel ()
{
  const { friend } = useContext( AppContext );
    return (
    <div className="w-3/4 bg-gray-100 p-4"
            style={ { minHeight: "calc(100vh - 2rem)" } }>
       { <h1 className="text-2xl font-bold mb-4">{ friend.friendName }</h1>}
        <div style={ { height: 'calc(100vh - 8rem)', overflowY: 'auto' } }>
          { friend.friendMessages && friend.friendMessages.map( ( data, index ) =>
          {
            return ( (
            <MessageBar
              key={`friend-${index}`}  // Unique key for friend messages
              keyIndex={`friend-${index}`} // Pass the key as a prop
              data={data}/>
      ))})}
          { friend.friendUID && <Messages /> } {/* Render Messages component if friend.friendUID exists */ }
          </div>
            <InputPannel />
</div>
    );
}

export default MessagePannel;