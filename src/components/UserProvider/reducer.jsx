// import React, { useReducer } from "react";

// let user = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser")).user
//   : "";

  export const initialState = {
    userName: "",
    userEmail: "",
    userPassword: "",
    loading: false,
    isLoggedIn: false,
    errorMessage: null
  };
  

  export const AuthReducer = (state, action) => {
      switch (action.type) {
          case "REQUEST_LOGIN":
              return {
                  ...state,
                  userName: "",
                  userEmail: "",
                  userPassword: "",
                  loading: true
              };
          case "LOGIN_SUCCESS":
              return {
                  ...state,
                  userName: "",
                  userEmail: "",
                  userPassword: "",
                  loading: false,
                  isLoggedIn: true
              };
          case "LOGOUT":
              return {
                  ...state,
                  userName: "",
                  userEmail: "",
                  userPassword: "",
                  isLoggedIn: false
              }    
          case "LOGIN_ERROR":
              return {
                  ...state,
                  loading: false,
                  isLoggedIn: false,
                  errorMessage: action.error
              }  
          default:
            throw new Error(`Unhandled action type: ${action.type}`)          
      }

  }