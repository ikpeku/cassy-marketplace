import React from 'react'
import { Navigate , useLocation} from 'react-router-dom'
import { HandleContext } from '../hooks/getContext';

export const RequireSignRoute = ({children}) => {

    const {currentUser } = HandleContext()
    const location = useLocation()

    console.log(currentUser);

    if(!currentUser){
        return <Navigate to={"/sign"} state={{path: location.pathname}} />

    }


  return children;
}