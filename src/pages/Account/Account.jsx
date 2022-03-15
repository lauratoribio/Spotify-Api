import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";

import apiClient from '../../spotify'


export default function Account() {
  
  const [userData, setUserData] = useState(null)
  
  useEffect(() => {
    apiClient.get("me").then(response => {
      setUserData(response.data)
      console.table(response.data)
    })
  }, [])

  return (
    <>
     <SideBar />
       <div className="user-card">
           {userData?.map(user => 
              <div>
                 <h2>{user.display_name}</h2>
                 <h3>{user.id}</h3>
                 <p>Followers: {user.followers.total}</p>
                 <img src={user.images[0].url} alt=""/>
              </div>
           )}
      </div> 
    </>
  );
}
