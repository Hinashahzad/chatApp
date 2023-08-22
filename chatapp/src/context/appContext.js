import { createContext, useState } from "react";

export const AppContext = createContext();
const AppProvider = ({children}) =>
{
    const [ error, setError ] = useState({status:false, details:""} );
    //MANAGE ALL THE REGISTERED USERS IN FIRSTORE
    const [ userList, setUserList ] = useState( [] );
    //USE TO UPDATE THE MESSAGE ARRAY 
    const [ message, setMessage ] = useState( '' );
    // EACH FRIEND HAS HIS/HER OWN ID, NAME AND MESSAGES HISTORY AND ALL FRIENDS MUST B REGISTERED ON FIRESTORE
    const [ friend, setFriend ] = useState( {
        friendUID: '', 
        friendName: '',
        friendMessages:[]
    } )
    //USER OBJECT TO LOGIN ON THE CHAT APP
    const [ user, setUser ] = useState( {
        userName: "", 
        email: "",
        password: "", 
        userImg: "",
        //receivedMessages:[]
    } )

    // MESSAGES ARRAY MANAGES ALL THE MESSAGE HISTORY. e.g., senderUID, receiverUID, messages and TimeStamp etch
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