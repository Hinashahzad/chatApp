import React, { useContext } from 'react';
import InputTextField from '../minorComponents/inputTextField';
import { IoMdAttach } from 'react-icons/io';
import {BiImageAdd} from 'react-icons/bi'
import Button from '../minorComponents/button';
import { AppContext } from '../context/appContext';
import { saveDataToFireStore } from '../utils/firestore';

function InputPannel ( )
{
    const { user, setUser, setSendMessage, sendMessage } = useContext( AppContext );

   const handleMessageSubmit = async (e) => {
  e.preventDefault();

       if ( sendMessage.trim() !== "" )
       {
           const userData = {
               senderUID:user.uid,
               sendMessage
      }
          await saveDataToFireStore( "messages", userData, user.uid );
    setSendMessage(""); // Clear the input field
  } else {
    alert("Enter message!");
  }
};

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
                        value={sendMessage}
                        onChange={(e)=>setSendMessage(e.target.value)}/>
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