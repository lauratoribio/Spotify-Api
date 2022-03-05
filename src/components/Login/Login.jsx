import React, { useState, useEffect } from "react";
import * as S from "./styles";


export default function Login() {

  const CLIENT_ID = "734edb19dbd14d6e9b3e6a92a9e6b917"
  const REDIRECT_URI = "http://localhost:3000/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    //Si no tenemos token y hash
    if(!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }

  }, [])

  return (
    <div>
      <S.LoginContainer>
      
        <S.LoginCLeft>
          <S.Title>Welcome<br /> to Musify!</S.Title>
          <S.LoginButton href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Musify</S.LoginButton>
        </S.LoginCLeft>

        <S.LoginCRight></S.LoginCRight>

      </S.LoginContainer>
    </div>
  );
}
