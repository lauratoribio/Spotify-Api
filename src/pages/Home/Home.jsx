import React, { useState, useEffect } from 'react'
import Song from '../Song/Song'
import { useUpdateUser, useUser } from "../../components/UserProvider"

import { useDarkTheme } from "../../components/ThemeProvider/ThemeProvider"

import APIKit from "../../spotify"
import SideBar from '../../components/SideBar/SideBar'



export default function Home(props) {

  //Llamada al contexto para obtener los datos del usuario registrados

  const userDetails = useUser()


  const darkTheme = useDarkTheme();

  const darkStyle = {
    color: darkTheme ?  "#FFFFFF" : "#141414",
  }

  const darkBg = {
    backgroundColor: darkTheme ? "#b892ff" : "#141414",
    color: darkTheme ? "#141414" : "#FFFFFF"
  }

  const darkNumBg = {
    backgroundColor: darkTheme ? "#141414" : "#f5cb5c",
    color: darkTheme ? "#FFFFFF" : "#141414"
  }

  //Conexion con spotify apiClient
  const [playlists, setPlaylists] = useState(null)
  
  useEffect(() => {
    APIKit.get("me/playlists").then(function(response) {
      setPlaylists(response.data.items)
      console.log(response.data.items)
    })
  }, [])

  
  return (
    <>
    <SideBar />
    <div className="home-container" style={darkStyle}>
     <h1 className="home-container__title">{userDetails.userName} Playlists:</h1>
       <div className="playlist-container">
           {playlists?.map(playlist => 
             <div className="playlist-container__box" style={darkBg} key={playlist.id}>
                <img src={playlist.images[0].url}  className="playlist-container__img" alt="playlist-img"/>
                <p className="playlist-container__title">{playlist.name}</p>
                <p className="playlist-container__num" style={darkNumBg}>{playlist.tracks.total}</p>
             </div>
           )}
       </div>
    </div> 
    </>
  )
}
