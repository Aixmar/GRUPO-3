import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider"; 

const useAuth = () => {
    // const { auth } = useContext(AuthContext);
    // useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    const response = useContext(AuthContext);
    // console.log('return usercontext en useAuth, esto retorna el contexto----------->', response )
    return response;
}

export default useAuth;