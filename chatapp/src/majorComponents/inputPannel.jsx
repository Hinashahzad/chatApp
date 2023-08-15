import React, { useContext, useEffect } from 'react';
import InputTextField from '../minorComponents/inputTextField';
import { IoMdAttach } from 'react-icons/io';
import {BiImageAdd} from 'react-icons/bi'
import Button from '../minorComponents/button';
import { AppContext } from '../context/appContext';
import { saveDataToFireStore } from '../utils/firestore';
function InputPannel ( )
{
  const { user, messages, setMessages, setMessage, message, friend, setFriend } = useContext( AppContext );
  useEffect( () =>
  {
    const friendMessages = messages.filter( ( msg ) => msg.receiverUID === friend.friendUID );
    setFriend( {
        ...friend,
        friendMessages,
      })
  }, [messages])
  const handleMessageSubmit = async ( e ) =>
  {
    e.preventDefault();
    if ( message.trim() !== "" )
    {
      const messageData = {
        senderUID: user.uid,
        receiverUID: friend.friendUID,
        messages: message,
        timestamp: new Date().toISOString()
      };
      // Update the messages state
      setMessages( [ ...messages, messageData ] );
    
    }
  }
    return (
        <div className='sticky top-[100vh] h-15
             border
            border-gray-500'>
            <form className="border border-red-700" onSubmit={ handleMessageSubmit }>
                <div className="flex justify-between">
                    <InputTextField
                        type="text"
                        placeHolderText="Type something..."
                        name="sendMessage"
                    border="border-none"
                    width="w-1/2"
                        background="bg-transparent"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}/>
            <div className='flex flex-end gap-2 '>
            <IoMdAttach className='cursor-pointer'  size={30} />
            <BiImageAdd className='cursor-pointer' size={30}/>
            <Button type="submit" text="Send" size=""  /></div>
            </div>
          </form>  
  </div>
    );
}

export default InputPannel;