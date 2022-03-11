// import React, { useReducer, useContext }  from 'react'
// import { initialState, AuthReducer } from './reducer';
import React, { useState, useContext } from 'react'

// export const UserContext = React.createContext()
// export const UserUpdateContext = React.createContext()

// export const useUser = () => {
//      return useContext(UserContext)
// }

// export const useUpdateUser = () => {
//     return useContext(UserUpdateContext)
// }


export const UserContext = React.createContext()

export const useUserContext = () => {
     return useContext(UserContext)
}



export default function UserProvider({ children }) {

  // const [user, setUser] = useReducer(AuthReducer, initialState)
  const [userRegistered, setUserRegistered] = useState([])
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [password, setPassword] = useState("") 

  const user = {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    password,
    setPassword,
}

  return (
    <UserContext.Provider value={user}>
           { children }
    </UserContext.Provider>
  )
}
