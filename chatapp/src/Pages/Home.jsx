import React from 'react';
import SideBar from '../majorComponents/sideBar';
import MessagePannel from '../majorComponents/messagePannel';
function Home ()
{
    return (
      <div className='h-screen'> 
          <div className="flex">
          <SideBar />
          <MessagePannel />
    </div>
      </div>
    
    );
}

export default Home;