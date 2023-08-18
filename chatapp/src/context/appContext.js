import { createContext, useState } from "react";

export const AppContext = createContext();
const AppProvider = ({children}) =>
{
    const [ error, setError ] = useState({status:false, details:""} );
    const [ userList, setUserList ] = useState( [] );
    const [ message, setMessage ] = useState( '' );
    const [ friend, setFriend ] = useState( {
        friendUID: '', 
        friendName: '',
        friendMessages:[]
    })
    const [ user, setUser ] = useState( {
        userName: "", 
        email: "",
        password: "", 
        userImg: "", 
        //currentMessage: message,
    } )

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