import React, { useState, useContext } from 'react'

export const MyUserContext = React.createContext()

export const userRegistrationContext = () => {
    return useContext(MyUserContext)
}

export default function RegistrationProvider({ children }) {

    const [userRegistered, setUserRegistered] = useState([])

    const user = {
        userRegistered,
        setUserRegistered
    }

    return (
        <>
            <MyUserContext.Provider value={user}>
                { children }
            </MyUserContext.Provider>
        </>
    )
}