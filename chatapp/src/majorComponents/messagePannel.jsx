import React, { useContext} from 'react';
import InputPannel from './inputPannel';
import { AppContext } from '../context/appContext';
import Messages from './messages';


function MessagePannel ()
{
    const { friend, setMessages } = useContext( AppContext );
    return (
    <div className="w-3/4 bg-gray-100 p-4"
            style={ { minHeight: "calc(100vh - 2rem)" } }>
            <h1 className="text-2xl font-bold mb-4">{ friend.friendName }</h1>
            <Messages/>
            <InputPannel />
</div>
    );
}

export default MessagePannel;