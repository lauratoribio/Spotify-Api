import React from "react"
import { loginEndpoint } from "../../spotify"


export default function Login() {

  return (
    <div className="loginContainer">
      <div className="loginContainer__left">
         <h1 className="loginContainer__title">Welcome<br />to Musify!</h1>
         <a className="loginContainer__anchor" href={loginEndpoint}>AUTHENTICATE</a>
      </div>
    </div>
  );
}
