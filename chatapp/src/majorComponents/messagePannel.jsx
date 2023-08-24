import React, { useContext, useEffect } from 'react';
import InputPannel from './inputPannel';
import { AppContext } from '../context/appContext';
import Messages from './messages';
import MessageBar from '../minorComponents/mesaagebar';
import { listenToMessages } from '../utils/firestore';

function MessagePannel ()
{
  const { friend, user,setMessages, setUser} = useContext( AppContext );

  useEffect( () =>
  {
    console.log("MessagePannel useEffect is calling...");
    // Set up the real-time listener for messages
    const unsubscribe = listenToMessages(user.uid, (receivedMessages) => {
      //setMessages(messagesData.messages || []);
      console.log( receivedMessages );
      receivedMessages && receivedMessages.map( ( data ) =>
      {
        //if ( data.senderUID === friend.friendUID && user.uid=== data.receiverUID) {
          setUser( {
            ...user, 
            receivedMessages:[...receivedMessages, ...data.messages]
          })
        //}
      })
    });

    return () => unsubscribe();
  }, [user.uid]);

  /*useEffect(() => {
  console.log("MessagePannel useEffect is calling...");
  // Set up the real-time listener for messages
  const unsubscribe = listenToMessages(user.uid, (receivedMessagesData) => {
    console.log(receivedMessagesData);
   // if (receivedMessagesData && Array.isArray(receivedMessagesData.messages)) {
      const updatedReceivedMessages = [...user.receivedMessages, ...receivedMessagesData.messages];
      setUser({
        ...user,
        receivedMessages: updatedReceivedMessages,
      });
    //}
  });

  return () => unsubscribe();
}, [user.uid, friend.friendUID, friend.sendMessages, user.receivedMessages]);*/

  return (
    <div className="w-3/4 bg-gray-100 p-4"
      style={ { minHeight: "calc(100vh - 2rem)" } }>
      {/** THERE IS NO MESSAGE pANNEL FOR LOGGED IN USER */}
      {
      ( friend.friendName === user.displayName ) ?
        ( <div> <span> Select the Friend to start the chat </span></div> ) : 
        ( 
        <>
        <h1 className="text-2xl font-bold mb-4">{ friend.friendName }</h1>
        <div style={ { height: 'calc(100vh - 8rem)', overflowY: 'auto' } }>
             
          {/** Send Messages */}
                { friend.sendMessages && friend.sendMessages.map( ( data, index ) =>
                {
                  if (data.senderUID === user.uid && data.receiverUID === friend.friendUID)
                  {
              return ( (
              <MessageBar
                   key={ `friend-${ index }` }  // Unique key for friend messages
                   keyIndex={ `friend-${ index }` } // Pass the key as a prop
                   data={ data }
                   label={ "sent" }
                   color={ "bg-blue-500" }
                   position={ "justify-end"} />))
            }
                } ) }
                 {/** Received Messages */ }
              { user.receivedMessages && user.receivedMessages.map( ( data, index ) =>{
              if (data.receiverUID === user.uid && data.senderUID === friend.friendUID){
                return (
                <MessageBar
                  key={`friend-${index}`} // Unique key for friend messages
                  keyIndex={`friend-${index}`} // Pass the key as a prop
                  data={data} // Pass the specific received message to the MessageBar
                  label={"received"}
                  color={"bg-pink-500"}
                  position={"justify-start"}/>
              );}
              } ) }
          { friend.friendUID && <Messages /> } {/* Render Messages component if friend.friendUID exists */ }
          </div>
            <InputPannel />
            </>) }
       
</div>
    );
}

export default MessagePannel;