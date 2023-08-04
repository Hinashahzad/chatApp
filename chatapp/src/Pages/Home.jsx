import React from 'react';
import SideBar from '../majorComponents/sideBar';
import MessagePannel from '../majorComponents/messagePannel';
function Home(props) {
    return (
      <div className='border h-screen border-red-600'> 
          <div className="flex">
            <SideBar />
            <MessagePannel />
    </div>
      </div>
    
    );
}

export default Home;