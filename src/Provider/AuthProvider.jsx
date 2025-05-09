import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
const googleProvider = new GoogleAuthProvider;

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setAuthenticated] = useState(false);

    console.log(user);

    const createUser = (email, password) =>{

        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);

    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setAuthenticated(!!currentUser); // true if user exists
            setLoading(false);
            });
        return ()=>{
            unsubscribe();

        };
    },[]);
    const authData = {
        user,
        setUser,
        loading,
        createUser,
        logOut,
        googleSignIn,
        isAuthenticated,
        

        

    };

    return (
        <AuthContext value={authData}>
            {children}

        </AuthContext>
    );
};

export default AuthProvider;