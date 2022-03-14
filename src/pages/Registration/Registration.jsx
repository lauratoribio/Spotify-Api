import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useUpdateUser } from "../../components/UserProvider";
import { registration } from "../../data/registration";
import image from "../../assets/images/login.png";
import Home from "../Home/Home";

import { useDarkTheme } from "../../components/ThemeProvider/ThemeProvider";

export default function Register(props) {

   const [userName, setUserName] = useState("")
   const [userEmail, setUserEmail] = useState("")
   const [userPassword, setUserPassword] = useState("")
   const dispatch = useUpdateUser()
   let navigate = useNavigate();
   const { isLoggedIn, errorMessage } = useUser()

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await registration(dispatch, { userName, userEmail, userPassword });

    } catch (error) {
      //debugger
      dispatch({ type: "error" });
    }
  }

  const darkTheme = useDarkTheme();

  const darkStyle = {
    color: darkTheme ?  "#FFFFFF" : "#141414"
  }


  return (
    <div>
     {isLoggedIn ? (
         <Home />
     ) : (
      <div className="loginContainer">
          <div className="loginContainer__left">
            <h1 className="loginContainer__title" style={darkStyle}>
              Welcome
              <br /> to Musify!
            </h1>
            <h4 className="loginContainer__subTitle">
              Please create an account
            </h4>
            <form className="loginContainer__form" onSubmit={onSubmit}>
              <input
                className="loginContainer__form__item"
                type="text"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your user name"
              />

              <input
                className="loginContainer__form__item"
                type="text"
                name="userEmail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Your email"
              />

              <input
                className="loginContainer__form__item"
                type="password"
                name="userPassword"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                placeholder="Your password"
              />

              <button className="loginContainer__form__button" type="submit">
                Register
              </button>
            </form>
          </div>

          <div className="loginContainer__right">
            <img className="loginContainer__right__img" src={image} alt="Dancing man" />
          </div>
        </div>
     )}
    </div>
  );
}

// const submitForm = (e) => {
//  e.preventDefault();
// }

// // const [user, setUser] = useState({
// //     userName: "",
// //     userEmail: "",
// //     userPhone: "",
// //     userImage: "",
// // })

// // const { userName, userEmail, userPhone, userImage } = user

// // const handleChange = (e) => {
// //     const {name, value} = e.target

// //     const newUser = {
// //         ...user,
// //         [name]: value
// //     }
// //     setUser(newUser)
// // }