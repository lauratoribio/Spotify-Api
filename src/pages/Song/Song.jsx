import React from 'react'

export default function Song({ song: { strArtist, strArtistFanart, strStyle }}) {
  return (
    <div className="song">
       <img className="song__image" src={strArtistFanart} alt=""/>
       <div className="song__info">
          <h2 className="song__info__artist">{strArtist}</h2>
          <p className="song__info__genre">{strStyle}</p>
          <button className="song__info__button">+ info</button>
       </div>
    </div>
  )
}
