import React, { useContext } from 'react';
import SideBar from '../../majorComponents/sideBar';
import MessagePannel from '../../majorComponents/messagePannel';
import { AppContext } from '../../context/appContext';
function Home ( props )
{
  const { user } = useContext( AppContext );
  console.log("Login user id is",user.uid);
    return (
      <div className='h-screen'> 
          <div className="flex">
          <SideBar loginUserUID={ user.uid} />
            <MessagePannel />
    </div>
      </div>
    
    );
}

export default Home;