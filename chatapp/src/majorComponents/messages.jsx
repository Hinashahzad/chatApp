import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';
import MessageBar from '../minorComponents/mesaagebar';

function Messages() {
  const { friend, messages } = useContext(AppContext);

  return (
    <>
      {messages &&
        messages.map((data, index) => {
          if (data.receiverUID === friend.friendUID) {
            return (
              <MessageBar
                key={`message-${index}`} // Unique key for messages
                keyIndex={`message-${index}`} // Pass the key as a prop
                data={ data }
                 label={"sent"}
                color={ "bg-blue-500" }
                position={ "justify-end"}
              />
            );
          }
          return null; // Return null if the condition is not met
        })}
    </>
  );
}

export default Messages;
