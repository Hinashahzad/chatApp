import { createContext, useState } from "react";

export const AppContext = createContext();
const AppProvider = ({children}) =>
{
    const [ error, setError ] = useState( { status: false, details: "" } );
    
    //MANAGE ALL THE REGISTERED USERS IN FIRSTORE
    const [ userList, setUserList ] = useState( [] );

    //THIS VARIABLE HANDLES ALL THE INPUT WHEN LOGGED IN USER SEND MESSAGES TO SELECTED FRIEND FROM THE SIDEBAR
    const [ message, setMessage ] = useState( '' );

    // USER HAS ACCESS TO HIS/HER FRIEND LIST FROM SIDE BAR AND ALL THE SEND MESSAGES TO FRIEND IS HANDLED ON SENDMESSAGE ARRAY 
    const [ friend, setFriend ] = useState( {
        friendUID: '', 
        friendName: '',
        sendMessages: [], 
        //receivedMessages:[]
    } )
    
    //USER OBJECT TO LOGIN ON THE CHAT APP
    const [ user, setUser ] = useState( {
        displayName: "", 
        email: "",
        password: "", 
        photoURL: "",
        //receivedMessages:[]
    } )

    // MESSAGES ARRAY MANAGES ALL THE MESSAGE HISTORY. e.g., senderUID, receiverUID, messages and TimeStamp
    const [ messages, setMessages ] = useState([])
    
    const value = {
        userList,setUserList,
        user,setUser, 
        error,setError,
        friend, setFriend,
        messages,setMessages,
        message, setMessage,
        
    }
    return <AppContext.Provider value={ value }>{ children }</AppContext.Provider>
};
export default AppProvider;