import React, { useEffect, useState } from 'react'
import apiClient from '../../spotify'

export default function Account() {

    const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CBFL4EkVABgYbtTbawnbdX0VvF06I94_0w&usqp=CAU")

    useEffect(() => {
    apiClient.get("me").then(response => {console.log(response)})
    }, [])

  return (
    <div>
        <img 
            src={image}
            alt="profile"
        />
    </div>
  )
}
