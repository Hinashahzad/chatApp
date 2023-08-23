import React, { useContext, useEffect } from 'react';
import InputPannel from './inputPannel';
import { AppContext } from '../context/appContext';
import Messages from './messages';
import MessageBar from '../minorComponents/mesaagebar';


function MessagePannel ()
{
  const { friend, user} = useContext( AppContext );
  //console.log("messages" , messages);
  console.log("Login user" , user.receivedMessages );
  //console.log("Friend is", friend);

  return (
    <div className="w-3/4 bg-gray-100 p-4"
      style={ { minHeight: "calc(100vh - 2rem)" } }>
      { ( friend.friendName === user.displayName ) ?
        ( <div> <span> Select the Friend to start the chat </span></div> ) : 
        ( 
        <>
        <h1 className="text-2xl font-bold mb-4">{ friend.friendName }</h1>
        <div style={ { height: 'calc(100vh - 8rem)', overflowY: 'auto' } }>
              {/** Received Messages */ }
              { user.receivedMessages && user.receivedMessages.map( ( data, index ) =>
              {
              if (
              data.receiverUID === user.uid &&
              data.senderUID === friend.friendUID
              )
              {
                console.log( "Condition is true " );
                return (
                <MessageBar
                  key={`friend-${index}`} // Unique key for friend messages
                  keyIndex={`friend-${index}`} // Pass the key as a prop
                  data={data} // Pass the specific received message to the MessageBar
                  label={"received"}
                  color={"bg-pink-500"}
                  position={"justify-start"}
                />
              );
               }
              
              
              } ) }
          {/** Send Messages */}
          { friend.sendMessages && friend.sendMessages.map( ( data, index ) =>{
            return ( (
            <MessageBar
                   key={ `friend-${ index }` }  // Unique key for friend messages
                   keyIndex={ `friend-${ index }` } // Pass the key as a prop
                   data={ data }
                   label={ "sent" }
                   color={ "bg-blue-500" }
                   position={ "justify-end"} />)) })}
          { friend.friendUID && <Messages /> } {/* Render Messages component if friend.friendUID exists */ }
          </div>
            <InputPannel />
            </>) }
       
</div>
    );
}

export default MessagePannel;