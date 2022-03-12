import React, { useReducer, useContext }  from 'react'
import { initialState, AuthReducer } from './reducer';

export const UserContext = React.createContext()
export const UserUpdateContext = React.createContext()

export const useUser = () => {
     return useContext(UserContext)
}

export const useUpdateUser = () => {
    return useContext(UserUpdateContext)
}


export default function UserProvider({ children }) {

  const [user, dispatch] = useReducer(AuthReducer, initialState)


  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={dispatch}>
            { children }
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  )
}
