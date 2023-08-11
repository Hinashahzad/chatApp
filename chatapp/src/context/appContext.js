import { createContext, useState } from "react";

export const AppContext = createContext();
const AppProvider = ({children}) =>
{
    const [ error, setError ] = useState({status:false, details:""} );
    const [ userList, setUserList ] = useState( [] );
    const [ activeUser, setActiveUser ] = useState( false );
    const [ user, setUser ] = useState( {
        userName: "", 
        email: "",
        password: "", 
        userImg: "",
        receiveMessages: [], 
        sendMessages:[]
    } )
    const [ sendMessage, setSendMessage ] = useState( '' );
    const [ receiveMessage, setReceiveMessage ] = useState( '' );
    const value = {
        userList,
        setUserList,
        user,
        setUser, 
        error,
        setError,
        activeUser,
        setActiveUser,
        sendMessage,
        setSendMessage,
        receiveMessage,
        setReceiveMessage
    }
    return <AppContext.Provider value={ value }>{ children }</AppContext.Provider>
};
export default AppProvider;