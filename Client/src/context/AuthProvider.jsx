import { auth as authProv } from '../firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AuthContext = createContext({})

export const useAuthProv = () => {
    const context = useContext(AuthContext);
    if (!context) return console.error('error creating auth context');
    return context;
};


export const AuthProvider = ({children}) =>{
    // const [auth,setAuth] = useState(JSON.parse(window.localStorage.getItem('loggedUser')) || {})
    const navigate = useNavigate();
    const [ user, setUser ] = useState(JSON.parse(window.localStorage.getItem('loggedUser')) || {});


    const loginWithGoogle = async () => {
        const googleResponse = new GoogleAuthProvider();
        try {
            const { user } = await signInWithPopup(authProv, googleResponse);
            if (!user.email) throw Error('something went wrong');
            
            const getUsers = await axios.get('/users');
            const userLogin = await getUsers.data.filter((userDb) => userDb.email === user.email);

            if (!userLogin.length) {    
                const userName = user?.displayName?.split(' ')[0];
                const userLastName = user?.displayName?.split(' ')[1];            
                const userGoogle = { name: userName, lastName: userLastName, email: user?.email, password: user?.uid, image: user?.photoURL, birthday: '00-00-00', cart: [], rol: 'user', favorites: [], previusPurchase: [] };
                const { data } = await axios.post("/users", userGoogle);
                setUser(data);
                window.localStorage.setItem('loggedUser' , JSON.stringify(data));
            } else {
                const userGoogle = { email: user?.email, password: user?.uid };
                const { data } = await axios.post("/users/login", userGoogle, { headers : { 'Content-Type' : 'application/json' }, withCredentials: true });
                setUser(data);
                window.localStorage.setItem('loggedUser' , JSON.stringify(data));
            };            
            // navigate('/allpizzas');
        } catch (error) {
            console.error(error.message);
        };
    };

    const googleLogout = async () => {
        await signOut(authProv);
        setUser({});
    };


    return (
        <AuthContext.Provider value={{ loginWithGoogle, googleLogout, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext





    // const register = async (email, password) => {
    //     const response = await createUserWithEmailAndPassword(authProv, email, password);
    //     console.log('response-->', response);
    // };

    // const login = async (email, password) => {
    //     const response = await signInWithEmailAndPassword(authProv, email, password);
    //     console.log('response-->', response);
    // };
