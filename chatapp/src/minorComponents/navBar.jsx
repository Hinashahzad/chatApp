import React, { useContext } from 'react';
import Logo from './logo';
import Button from './button';
import LabelText from './labelText';
import { AppContext } from '../context/appContext';
import image from './../assets/chat logo.png';
import { firebaseLogout } from '../utils/firebaseRegistration';
import { useNavigate } from 'react-router-dom';
export const NavBar = () =>
{
    const { user } = useContext( AppContext );
    const navigate = useNavigate();
    const handleLogOut = async () =>
    {
        await firebaseLogout();
        navigate( '/Login' );
    }
    return ( <div className='bg-gray-800'>
        <div className='flex justify-between'>
            <Logo size="w-75 h-10 object-contain" img={image} />
            <div className='flex items-center gap-6 '>
                <LabelText text={user.userName}
                    color="text-white" />
                <Button type="submit"
                    text="Log out"
                    onClick={ handleLogOut } />
            </div> 
        </div>
     </div> );
};
