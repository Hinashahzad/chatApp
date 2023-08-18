import React, { useContext } from 'react';
import Logo from '../minorComponents/logo';
import LabelText from '../minorComponents/labelText';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/appContext';
function User ( { name, img, uid, onClick} )
{
    const { messages } = useContext( AppContext );
    return (
        <li className="py-2" onClick={onClick}>
            <Link to={`/Home/${uid}`} className="block" >
        <div className='flex justify-start mb-2 p-2 border-b border-gray-300' >
                <Logo size="w-16 h-16" img={img} />
                 <div className='flex flex-col mt-3'>
                <LabelText text={name} color="px-2 text-white" />
                       {messages && messages.length > 0 && (
                            <>
                        {messages[messages.length - 1].receiverUID === uid && (
                            <LabelText
                                text={messages[messages.length - 1].messages}
                                color="px-2 text-white"
                            />)}</>)}
        </div>
            </div>
           </Link>
        </li>
         
    );
}

export default User;