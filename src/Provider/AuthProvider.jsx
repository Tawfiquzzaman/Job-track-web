import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);

  //console.log(loading, user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const signIn = (email, password) => {
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const forgetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
    alert('Password reset email sent')
      
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthenticated(!!currentUser); // true if user exists
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authData = {
    user,
    signIn,
    setUser,
    loading,
    setLoading,
    createUser,
    logOut,
    googleSignIn,
    isAuthenticated,
    forgetPassword,
    
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
