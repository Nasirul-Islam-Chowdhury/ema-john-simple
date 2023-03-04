import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app)

const UseContexts = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() =>{
        const unSuscribed = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false)
    });
        return ()=>unSuscribed;
    }, [])
    if(loading){
        return <div>Loading...</div>
    }
    const authInfo = { user, createUser, signIn, logOut, loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContexts;