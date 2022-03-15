import React from "react";
import { useUser, useUpdateUser } from "../../components/UserProvider";
import image from "../../assets/images/login.png";

import { Link } from "react-router-dom";


import { useDarkTheme } from "../../components/ThemeProvider/ThemeProvider";

export default function Register(props) {

   const dispatch = useUpdateUser()

   const { userName, userEmail, userPassword } = useUser()


  const darkTheme = useDarkTheme();

  const darkStyle = {
    color: darkTheme ?  "#FFFFFF" : "#141414"
  }


  return (
    <div>
      <div className="loginContainer">
          <div className="loginContainer__left">
            <h1 className="loginContainer__title" style={darkStyle}>
              Welcome
              <br /> to Musify!
            </h1>
            <h4 className="loginContainer__subTitle">
              Please create an account
            </h4>
            <form className="loginContainer__form">
              <input
                className="loginContainer__form__item"
                type="text"
                name="userName"
                value={userName}
                onChange={(e) => dispatch({
                  type: "REQUEST_LOGIN",
                  fieldName: "userName",
                  payload: e.target.value,
                })}
                placeholder="Your user name"
              />

              <input
                className="loginContainer__form__item"
                type="text"
                name="userEmail"
                value={userEmail}
                onChange={(e) => dispatch({
                  type: "REQUEST_LOGIN",
                  fieldName: "userEmail",
                  payload: e.target.value,
                })}
                placeholder="Your email"
              />

              <input
                className="loginContainer__form__item"
                type="password"
                name="userPassword"
                value={userPassword}
                onChange={(e) => dispatch({
                  type: "REQUEST_LOGIN",
                  fieldName: "userPassword",
                  payload: e.target.value,
                })}
                placeholder="Your password"
              />
              <Link to="/home">
                  <button className="loginContainer__form__button" type="submit">
                    Register
                  </button>
              </Link>
            </form>
          </div>

          <div className="loginContainer__right">
            <img className="loginContainer__right__img" src={image} alt="Dancing man" />
          </div>
        </div>
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
