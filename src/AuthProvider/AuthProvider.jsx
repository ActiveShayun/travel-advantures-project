import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,  signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.init';
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const[loader, setLoader] = useState(true)
    // console.log('user',user);

    // user register
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //  user login
    const handleSignIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // user observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)

            return () => {
                unSubscribe()
            }
        })
    }, [])
    // user logout
    const userSignOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch(error => {
                // console.log('ERROR', error);
            })
    }
    //user profile update    
    const profileUpdate = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

 

    const profile = {
        handleRegister,
        handleSignIn,
        setUser,
        user,
        userSignOut,
        profileUpdate,
        loader
    
    }

    return (
        <AuthContext.Provider value={profile}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;