import { auth as authProv } from '../firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

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

    useEffect(() => {
        const logged = onAuthStateChanged(authProv, (currentUser) => {
            if(user.name) return;
            if (!currentUser) {
                console.log('no user logged in');
                setUser('');
            } else {
                setUser(currentUser);
            };
        });
        return () => logged();
    }, []);

    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider();
        try {
            const response = await signInWithPopup(authProv, responseGoogle);
            if (!response) throw Error('something went wrong');
            navigate('/allpizzas');
            setUser(response.user)
        } catch (error) {
            console.error(error.message);
        };
    };

    const googleLogout = async () => {
        const response = await signOut(authProv);
        console.log(response);
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
