import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { onAuthStateChanged } from "firebase/auth";
import{ auth} from "./firbase"
import { SignedInStack, SignedOutStack } from './Screen/Navigation';

const AuthNavigation = () => {
    const [currentUser, setCurrentUser] = useState(null)

    const userHandler = (user) => {
        user ? setCurrentUser(user) : setCurrentUser(null);
    }
   
    useEffect(() => 
         onAuthStateChanged(auth, user => setCurrentUser(user))
      
    , [])

    return (
        <>
        {currentUser ? <SignedInStack /> : <SignedOutStack />}
        </>
    )
   
}

export default AuthNavigation
