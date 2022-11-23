import { createContext, useEffect, useState } from "react";
import { auth, createUserData } from "../utils/firebase.utils.db";
import { onAuthStateChanged } from "firebase/auth";



export const context = createContext({
    currentUser: "not again",
    SetCurrentUser: () => null
}) 

export const Contextprovider = ({children}) => {

const [currentUser, SetCurrentUser] = useState(null)

const value = {currentUser, SetCurrentUser}


useEffect(() => {
    const onAuthStateChange = () => onAuthStateChanged(auth, (user) => {
        if(user){
     createUserData(user)
        }
        SetCurrentUser(user)
   
      })
      return onAuthStateChange()
}, [])

    return (
        <context.Provider value={value}>
                {children}
        </context.Provider>
    )
}