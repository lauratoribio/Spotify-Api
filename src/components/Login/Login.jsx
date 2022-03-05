import React from "react";
import * as S from "./styles";


export default function Login() {

  const CLIENT_ID = "734edb19dbd14d6e9b3e6a92a9e6b917"
  const REDIRECT_URI = "http://localhost:3000/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  return (
    <div>
      <S.LoginContainer>
      
        <S.LoginCLeft>
          <h1>Musify</h1>
          <S.LoginButton href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Musify</S.LoginButton>
        </S.LoginCLeft>

        <S.LoginCRight></S.LoginCRight>

      </S.LoginContainer>
    </div>
  );
}
