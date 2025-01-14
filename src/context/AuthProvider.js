import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

function AuthProvider({children}) {
    const [userData , setUserData] = useState({
        employees : "",
        admin: ""
    });
    // console.log(userData)

    useEffect(() => {
        const {employees , admin} = getLocalStorage();
        setUserData({employees , admin});

        // const data = getLocalStorage();
        // const employees = data.employees;
        // const admin = data.admin;
    } , []);


    return (
        <div>
            <AuthContext.Provider value={userData}>
              {children}
            </AuthContext.Provider>
            
        </div>
    )
}

export default AuthProvider
