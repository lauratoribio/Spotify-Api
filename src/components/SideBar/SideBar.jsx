import React, { useEffect, useState } from 'react'
import apiClient from '../../spotify'

import { useDarkTheme } from "../../components/ThemeProvider/ThemeProvider";



export default function SideBar() {

    const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CBFL4EkVABgYbtTbawnbdX0VvF06I94_0w&usqp=CAU")

    useEffect(() => {
    apiClient.get("me").then(response => {
        setImage(response.data.images[0].url)
    })
    }, [])

    const darkTheme = useDarkTheme();

    const darkStyle = {
        borderRight: darkTheme && "solid 1px #FFFFFF"
    }

  return (
    <div className="sidebar-container" style={darkStyle}>
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
              <p className="btn-title">Trending</p>
          </div>
          <div className="btn-body">
              <p className="btn-title">Player</p>
          </div>


        </div>

    </div>
  )
}
