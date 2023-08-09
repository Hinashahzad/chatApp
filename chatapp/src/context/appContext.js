import { createContext, useState } from "react";

export const AppContext = createContext();
const AppProvider = ({children}) =>
{
    const [ error, setError ] = useState({status:false, details:""} );
    const [ userList, setUserList ] = useState( [] );
    const [ user, setUser ] = useState( {
        userName: "", 
        email: "",
        password: "", 
        userImg:"",
    } )
    const value = {
        userList,
        setUserList,
        user,
        setUser, 
        error,
        setError,
    }
    return <AppContext.Provider value={ value }>{ children }</AppContext.Provider>
};
export default AppProvider;