import React, { useEffect, useState } from 'react'
import apiClient from '../../spotify'


export default function SideBar() {

    const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CBFL4EkVABgYbtTbawnbdX0VvF06I94_0w&usqp=CAU")

    useEffect(() => {
    apiClient.get("me").then(response => {
        setImage(response.data.images[0].url)
    })
    }, [])

  return (
    <div className="sidebar-container">
        <img 
            className="profile-img"
            src={image}
            alt="profile"
        />
        <div>
          <div className="btn-body">
              <p className="btn-title">Feed</p>
          </div>
          <div className="btn-body">
              <p className="btn-title">Library</p>
          </div>
          <div className="btn-body">
              <p className="btn-title">trending</p>
          </div>
          <div className="btn-body">
              <p className="btn-title">Player</p>
          </div>
          <div className="btn-body">
              <p className="btn-title">Sign out</p>
          </div>

        </div>

    </div>
  )
}
