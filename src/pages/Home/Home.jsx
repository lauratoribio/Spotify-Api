import React, { useState, useEffect } from 'react'
import Song from '../Song/Song'
import { useUpdateUser, useUser } from "../../components/UserProvider"

import { useDarkTheme } from "../../components/ThemeProvider/ThemeProvider"

import APIKit from "../../spotify"



export default function Home(props) {

  //Llamada al contexto para obtener los datos del usuario registrados

  const dispatch = useUpdateUser()
  const userDetails = useUser()

  //Llamada a la API para obetener los datos del artista

  const [artist1, setArtist1] = useState([])

  useEffect(() => {
    fetch("https://www.theaudiodb.com/api/v1/json/2/search.php?s=lady+gaga")
    .then(data => data.json())
    .then(data => setArtist1(data.artists))
  }, [])

  const [artist2, setArtist2] = useState([])

  useEffect(() => {
    fetch("https://www.theaudiodb.com/api/v1/json/2/search.php?s=bad+bunny")
    .then(data => data.json())
    .then(data => setArtist2(data.artists))
  }, [])

  
  const [artist3, setArtist3] = useState([])

  useEffect(() => {
    fetch("https://www.theaudiodb.com/api/v1/json/2/search.php?s=shakira")
    .then(data => data.json())
    .then(data => setArtist3(data.artists))
  }, [])

  const [artist4, setArtist4] = useState([])

  useEffect(() => {
    fetch("https://www.theaudiodb.com/api/v1/json/2/search.php?s=beyonce")
    .then(data => data.json())
    .then(data => setArtist4(data.artists))
  }, [])

  
  const [artist5, setArtist5] = useState([])

  useEffect(() => {
    fetch("https://www.theaudiodb.com/api/v1/json/2/search.php?s=miley+cyrus")
    .then(data => data.json())
    .then(data => setArtist5(data.artists))
  }, [])

  const darkTheme = useDarkTheme();

  const darkStyle = {
    color: darkTheme ?  "#FFFFFF" : "#141414",
  }

  //Conexion con spotify apiClient
  const [playlists, setPlaylists] = useState(null)
  
  APIKit.get("me/playlists").then(function(response) {
    setPlaylists(response.data.items)
  })

  
  return (
    <>
    <div className="home-container" style={darkStyle}>
     <h1>Welcome {userDetails.userName}</h1>
     <h1>Tus artistas más escuchados:</h1>
       <div className="home-container__song">
      {artist1.map((song) => {
         return (
           <Song key={song.idArtist} song={song}/>
         )
       })}
       {artist2.map((song) => {
         return (
           <Song key={song.idArtist} song={song}/>
         )
       })}
       {artist3.map((song) => {
         return (
           <Song key={song.idArtist} song={song}/>
         )
       })}
       {artist4.map((song) => {
         return (
           <Song key={song.idArtist} song={song}/>
         )
       })}
       {artist5.map((song) => {
         return (
           <Song key={song.idArtist} song={song}/>
         )
        })}
     </div>
    </div> 
    </>
  )
}
