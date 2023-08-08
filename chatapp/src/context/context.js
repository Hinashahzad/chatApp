import { createContext, useState } from "react";

export const Context = createContext();
const AppContext = ({children}) =>
{
    
    const [ userList, setUserList ] = useState( [] );
    const [ user, setUser ] = useState( {
        userName: "", 
        email: "",
        password:""
    })
    //const [ userName, setUserName ] = useState( '' );
    //const [ email, setEmail ] = useState('');
    //const [ password, setPassword ] = useState('');
    return <Context.Provider value={ {
        userList, 
        setUserList,
        user,
        setUser,
        //userName, 
        //setUserName,
        //email, 
        //setEmail,
        //password,
        //setPassword
    }}>{children }</Context.Provider>
};
export default AppContext;