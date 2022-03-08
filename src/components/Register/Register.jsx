import React, { useState } from "react";

export default function Register() {

  const submitForm = (e) => {
   e.preventDefault();
  }
  
  const [user, setUser] = useState({
      userName: "",
      userEmail: "",
      userPhone: "",
      userImage: "",
  })

  const { userName, userEmail, userPhone, userImage } = user

  const handleChange = (e) => {
      const {name, value} = e.target

      const newUser = {
          ...user,
          [name]: value
      }
      setUser(newUser)
  }


  return (
    <div>
      <div>
        <div className="loginContainer">
          <div className="loginContainer__left">
          <h1 className="loginContainer__title">Welcome<br /> to Musify!</h1>
          <h4 className="loginContainer__subTitle">Please create an account</h4>
            <form  className="loginContainer__form" onSubmit={submitForm}>
              <input className="loginContainer__form__item"
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={handleChange}
                  placeholder="Your name"
              />

              <input className="loginContainer__form__item"
                  type="text"
                  name="userEmail"
                  value={userEmail}
                  onChange={handleChange}
                  placeholder="Your email"
              />

              <input className="loginContainer__form__item"
                  type="text"
                  name="userPhone"
                  value={userPhone}
                  onChange={handleChange}
                  placeholder="Your phone"
              />

              <input className="loginContainer__form__item"
                  type="text"
                  name="userImage"
                  value={userImage}
                  onChange={handleChange}
                  placeholder="Your profile image"
              />
              
              <button className="loginContainer__form__button" type="submit">Create</button>
            </form>
          </div>

          <div className="loginContainer__right">
              <img src="login.png" alt="Dancing man"/>
          </div>
        </div>
      </div>
    </div>
  );
}
