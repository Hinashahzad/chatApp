import { createContext, useState } from "react";

export const Context = createContext();
const AppContext = ({children}) =>
{
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    return <Context.Provider value={ {
        email, 
        setEmail,
        password,
        setPassword
    }}>{children }</Context.Provider>
};
export default AppContext;