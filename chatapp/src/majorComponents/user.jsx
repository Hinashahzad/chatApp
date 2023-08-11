import React from 'react';
import Logo from '../minorComponents/logo';
import LabelText from '../minorComponents/labelText';
import { Link } from 'react-router-dom';

function User ( { name, img, uid } )
{
    console.log("uid inside user", uid);
    return (
        <li className="py-2">
            <Link to={`/Home/${uid}`} className="block">
        <div className='flex justify-start mb-2 p-2 border-b border-gray-300' >
                <Logo size="w-16 h-16" img={img} />
                 <div className='flex flex-col mt-3'>
                <LabelText text={name}
                    color="px-2 text-white" />
                   {/* <Messages messageText={message} />*/}
        </div>
            </div>
           </Link>
        </li>
         
    );
}

export default User;