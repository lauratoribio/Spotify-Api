import React from "react"
import { loginEndpoint } from "../../spotify"

import { useDarkTheme } from "../../components/ThemeProvider/ThemeProvider";


export default function Login() {

  
const darkTheme = useDarkTheme();

const darkStyle = {
  color: darkTheme ?  "#FFFFFF" : "#141414"
}

  return (
    <div className="login-Container">
      <div className="login-Container__left">
         <h1 className="login-Container__title" style={darkStyle}>Welcome<br />to Musify!</h1>
         <a className="login-Container__anchor" href={loginEndpoint}>AUTHENTICATE</a>
      </div>
    </div>
  );
}
