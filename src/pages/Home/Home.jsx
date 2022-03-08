import React, { useState, useEffect } from 'react'
import Song from '../../components/Song/Song'

export default function Home() {

  const [topSongs, setTopSongs] = useState([])

  useEffect(() => {
    fetch("https://www.theaudiodb.com/api/v1/json/2/search.php?s=lady+gaga")
    .then(data => data.json())
    .then(data => console.log(data.artists[0]))
  }, [])

  
  return (
    <>
    <div>
    <h1>Estos son los artistas que más has esuchado:</h1>
     {topSongs.map((song) => {
       return (
         <Song key={song.idArtist} song={song}/>
       )
     })}

    </div> 
    </>
  )
}
