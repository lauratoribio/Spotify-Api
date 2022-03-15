// import React, { useReducer } from "react";

// let user = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser")).user
//   : "";

  export const initialState = {
    userName: "",
    userEmail: "",
    userPassword: "",
    errorMessage: null
  };
  

  export const AuthReducer = (state, action) => {
      switch (action.type) {
          case "REQUEST_LOGIN":
              return {
                  ...state,
                  [action.fieldName]: action.payload
              };
          case "LOGIN_SUCCESS":
              return {
                  ...state,
                  userName: "",
                  userEmail: "",
                  userPassword: "",
              };
          case "LOGOUT":
              return {
                  ...state,
                  userName: "",
                  userEmail: "",
                  userPassword: "",
              }    
          case "LOGIN_ERROR":
              return {
                  ...state,
                  errorMessage: action.error
              }  
          default:
            throw new Error(`Unhandled action type: ${action.type}`)          
      }

  }