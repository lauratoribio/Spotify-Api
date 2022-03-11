// // import React, { useState, useReducer } from "react";
// import React, { useState } from "react";
// import { useUserContext } from "../../components/UserProvider/UserProvider";
// import image from "../../assets/images/login.png";

// // function reducer(state, action) {
// //   console.log(state);
// //   console.log(action);
// //   switch (action.type) {
// //     case "inputFields": {
// //       return {
// //         ...state,
// //         [action.inputName]: action.payload,
// //       };
// //     }
// //     case "login": {
// //       return {
// //         ...state,
// //         isLoading: true,
// //         error: "",
// //         isLoggedIn: true,
// //       };
// //     }
// //     case "success": {
// //       return {
// //         ...state,
// //         isLoggedIn: true,
// //       };
// //     }
// //     case "error": {
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isLoggedIn: false,
// //         userName: "",
// //         userImage: "",
// //         userPassword: "",
// //       };
// //     }
// //     case "logout": {
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isLoggedIn: false,
// //         userName: "",
// //         userImage: "",
// //         userPassword: "",
// //       };
// //     }
// //     default:
// //       return state;
// //   }
// // }

// // const initialState = {
// //   userName: "",
// //   userEmail: "",
// //   userPassword: "",
// //   isLoading: false,
// //   error: "",
// //   isLoggedIn: false,
// // };

// export default function Register() {
//   // const [state, dispatch] = useReducer(reducer, initialState);
//   // const { userName, userEmail, userPassword } = state;

//   // const onSubmit = async (e) => {
//   //   e.preventDefault();

//   //   dispatch({ type: "login" });

//   //   // try {
//   //   //   await login({ userName, userEmail, userPhone, userImage, userPassword });
//   //   //   dispatch({ type: "success" });
//   //   // } catch (error) {
//   //   //   //debugger
//   //   //   dispatch({ type: "error" });
//   //   // }
//   // };

//   const { userRegistered } = useUserContext()
//   const { userName } = useUserContext()
//   const { userEmail } = useUserContext()
//   const { password } = useUserContext()


//   return (
//     <div>
//       <div>
//         <div className="loginContainer">
//           <div className="loginContainer__left">
//             <h1 className="loginContainer__title">
//               Welcome
//               <br /> to Musify!
//             </h1>
//             <h4 className="loginContainer__subTitle">
//               Please create an account
//             </h4>
//             <form className="loginContainer__form" onSubmit={onSubmit}>
//               <input
//                 className="loginContainer__form__item"
//                 type="text"
//                 name="userName"
//                 value={userName}
//                 onChange={e => setUserName(e.target.value)}
//                 placeholder="Your user name"
//               />

//               <input
//                 className="loginContainer__form__item"
//                 type="text"
//                 name="userEmail"
//                 value={userEmail}
//                 onChange={(e) =>
//                   dispatch({
//                     type: "inputFields",
//                     inputName: "userEmail",
//                     payload: e.target.value,
//                   })
//                 }
//                 placeholder="Your email"
//               />

//               <input
//                 className="loginContainer__form__item"
//                 type="password"
//                 name="userPassword"
//                 value={userPassword}
//                 onChange={(e) =>
//                   dispatch({
//                     type: "inputFields",
//                     inputName: "userPassword",
//                     payload: e.target.value,
//                   })
//                 }
//                 placeholder="Your password"
//               />

//               <button className="loginContainer__form__button" type="submit">
//                 Register
//               </button>
//             </form>
//           </div>

//           <div className="loginContainer__right">
//             <img src={image} alt="Dancing man" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
