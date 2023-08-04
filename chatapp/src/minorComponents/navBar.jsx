import React from 'react';
import Logo from './logo';
import Button from './button';
import LabelText from './labelText';


export const NavBar = () => {
    return ( <div className='bg-gray-800'>
        <div className='flex justify-between'>
            <Logo size="w-75 h-10 object-contain" />
            <div className='flex items-center gap-6 '>
                <LabelText text="Hina"
                    color="text-white" />
                <Button type="submit"
                    text="Log out" />
            </div> 
        </div>
     </div> );
};
