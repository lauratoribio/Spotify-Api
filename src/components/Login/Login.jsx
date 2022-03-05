import React from "react";
import * as S from "./styles";

const endpoint = "https://accounts.spotify.com/authorize"
const clientID = "734edb19dbd14d6e9b3e6a92a9e6b917"
const redirectUri = "http://localhost:3000/"
const scope = [
  "ser-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
]

const loginURL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&show_dialog=true`

export default function LoginRegister() {
  return (
    <div>
      <S.LoginContainer>
        <S.LoginCLeft>
          <h1>Musify</h1>
          <S.LoginButton href={loginURL}>Login to Musify</S.LoginButton>
        </S.LoginCLeft>

        <S.LoginCRight></S.LoginCRight>
      </S.LoginContainer>
    </div>
  );
}
