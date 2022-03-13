import React from 'react'
import { useDarkTheme } from "../../components/ThemeProvider/ThemeProvider";


export default function Song({ song: { strArtist, strArtistFanart, strGenre }}) {

  const darkTheme = useDarkTheme();

  const darkStyle = {
    backgroundColor: darkTheme ?  "#b892ff" : "#141414"
  }

  const darkTitle = {
    color: darkTheme ? "#141414" : "#e7c6ff"
  }

  const darkBtn = {
    color: darkTheme ? "#141414" : "#b892ff"
  }

  return (
    <div className="song" style={darkStyle}>
       <img className="song__image" src={strArtistFanart} alt=""/>
       <div className="song__info">
          <h2 className="song__info__artist" style={darkTitle}>{strArtist}</h2>
          <p className="song__info__genre">{strGenre}</p>
          <button className="song__info__button" style={darkBtn}>+ info</button>
       </div>
    </div>
  )
}
