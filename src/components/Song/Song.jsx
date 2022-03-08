import React from 'react'

export default function Song({ song: { strArtist, strArtistFanart, strGenre }}) {
  return (
    <div className="song">
       <img src={strArtistFanart} alt=""/>
       <h2>{strArtist}</h2>
       <p>{strGenre}</p>
    </div>
  )
}
