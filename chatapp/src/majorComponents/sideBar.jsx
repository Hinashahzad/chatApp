import React, { useState } from 'react';
import { NavBar } from '../minorComponents/navBar';
import User from './user';
import InputTextField from '../minorComponents/inputTextField';

function SideBar ( props )
{
    const [ user, setUser ] = useState( [
        {
            name: "Hina Shahzad",
            message: "Hello Whats up??"
        },
         {
            name: "Hina Shahzad",
            message: "Hello Whats up??"
        },
          {
            name: "Hina Shahzad",
            message: "Hello Whats up??"
        },
           {
            name: "Hina Shahzad",
            message: "Hello Whats up??"
        },
           {
            name: "Hina Shahzad",
            message: "Hello Whats up??"
        },{
            name: "Hina Shahzad",
            message: "Hello Whats up??"
        },
           {
            name: "Hina Shahzad",
            message: "Hello Whats up??"
        },{
            name: "Hina Shahzad",
            message: "Hello Whats up??"
        },
        
    ]);
    return (
        <aside className="w-1/4 bg-gray-800 text-white p-4">
            <NavBar />
            <div className='flex mt-5'>
            <InputTextField
                    id="searchBar"
                    name="search"
                    type="search"
                    autoComplete="search"
                placeHolderText="Find a user"
                width="w-full"
                  focus="focus:ring-2 focus:ring-inset 
                        focus:ring-indigo-600 ring-1
                        ring-inset ring-gray-300"
                    />
        </div>
            <div className='container overflow-y-auto border'>
                <ul>
                 {user.map((user, index) => (
                     <User
                        key={ index }
                        name={ user.name }
                        message={ user.message } />
        ))}
         
        </ul>
            </div>
            
      </aside>
    );
}

export default SideBar;