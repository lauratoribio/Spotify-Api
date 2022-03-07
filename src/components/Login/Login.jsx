import React, { useState, useEffect } from "react";


export default function Login() {

  const CLIENT_ID = "734edb19dbd14d6e9b3e6a92a9e6b917"
  const REDIRECT_URI = "http://localhost:3000/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const loginURL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`

  const handleLogin = () => {
    window.location.replace(loginURL)
  }

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    //Si no tenemos token y hash
    if(!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }

    setToken(token)

  }, [])

  const searchArtist = (e) => {
    e.preventDefault()
    fetch('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg', {
      method: 'GET', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
  })
      .then((response) => {
          console.log(response.json().then(
              (data) => { console.log(data) }
          ));
      });
  }



  return (
    <div>
      <div className="loginContainer">
      
        <div className="loginContainer__left">
          <h1 className="loginContainer__title">Welcome<br /> to Musify!</h1>
          <button className="loginContainer__anchor" onClick={handleLogin}>Login to Musify</button>
        </div>

        <div className="loginContainer__right"></div>
      </div>
      <form onSubmit={searchArtist}>
        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
        <button type={"submit"}>Search</button>
      </form>
    </div>
  );
}
