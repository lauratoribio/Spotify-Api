import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";

import apiClient from "../../spotify";

export default function Account() {
  const [userDataName, setUserDataName] = useState("");
  const [userDataId, setUserDataId] = useState("");
  const [userDataFollowers, setUserDataFollowers] = useState("");
  const [userDataImage, setUserDataImage] = useState("");

  useEffect(() => {
    apiClient.get("me").then((response) => {
      setUserDataName(response.data.display_name);
      console.log(response.data.display_name);

      setUserDataId(response.data.id);
      console.log(response.data.id);

      setUserDataFollowers(response.data.followers.total);
      console.log(response.data.followers.total);

      setUserDataImage(response.data.images[0].url);
      console.log(response.data.images[0].url);
    });
  }, []);

  return (
    <>
      <SideBar />
      <div className="account-container">
        <div className="user-card">
          <img className="user-card__image" src={userDataImage} alt="" />
          <div className="user-card__details">
            <h2 className="user-card__details__title">{userDataName}</h2>
            <h3 className="user-card__details__subtitle">{userDataId}</h3>
            <p className="user-card__details__p">
              Followers: <span>{userDataFollowers}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
