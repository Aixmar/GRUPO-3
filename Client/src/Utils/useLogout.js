import axios from "axios";
import useAuth from "./useAuth";
import { useAuthProv } from "../context/AuthProvider";

const useLogout = () => {
    // const { setAuth } = useAuth();
    const { setUser } = useAuthProv();

    const logout = async () => {
        setUser({});
        window.localStorage.removeItem('loggedUser')
        try {
            const response = await axios('/users/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout