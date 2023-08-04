import React from 'react';
import Logo from '../minorComponents/logo';
import LabelText from '../minorComponents/labelText';
import Messages from './messages';

function User({key, name, message}) {
    return (
        <li className="py-1">
        <div className='flex justify-start mb-2 border' >
                <Logo size="w-75 h-20 object-contain" />
                 <div className='flex flex-col mt-3'>
                <LabelText text={name}
                    color="text-white" />
                    <Messages messageText={message} />
        </div>
            </div>
           
        </li>
         
    );
}

export default User;