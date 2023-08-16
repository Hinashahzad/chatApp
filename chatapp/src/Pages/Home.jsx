import React, { useContext, useEffect } from 'react';
import SideBar from '../majorComponents/sideBar';
import { fetchUserMessages } from '../utils/getFireStoreData';
import { AppContext } from '../context/appContext';
function Home ()
{
  /** GETTING ALL THE DATA FROM THE FIRESTORE */
  /*useEffect( () =>
  {
    const fetchData = async () => {
      try {
        const fetchMessages = await fetchUserMessages();
         console.log( "Fetch messages",fetchMessages );
        fetchMessages && fetchMessages.map( ( data ) =>
        {
          console.log( "Fetch messages", data.friendMessages );
        })
       
        //setMessages(fetchMessages)
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchData();
  },[])*/
    return (<div className='h-screen'> 
          <div className="flex">
            <SideBar />
            </div>
      </div>);
}

export default Home;