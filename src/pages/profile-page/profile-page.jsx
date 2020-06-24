import React, { useState, useEffect } from "react";
import Card from "../../components/card/card";

import "./profile-page-styles.css";

const ProfilePage = ({ history, match }) => {
  // Adding nested key to be able to access it after the full object is loaded
  const [userProfile, setUserProfile] = useState({});

  const API_USER_DETAIL = "https://jsonplaceholder.typicode.com/users/";

  useEffect(() => {
    fetch(`${API_USER_DETAIL}${match.params.monsterId}`)
      .then((response) => response.json())
      .then((userDetail) => setUserProfile(userDetail));
  }, []);

  const handleBackNavigation = () => {
    console.log(match);
    history.push(`${match.url}`.substring(0, match.url.lastIndexOf("/")));
  };

  const { id, name, email, address, website } = userProfile;

  return (
    <div className="profile-container">
      <div className="profile-header-section">
        <button className="nav-button" onClick={handleBackNavigation}>
          &#10094; Back
        </button>

        {userProfile ? <h1 className="profile-title">{name}</h1> : null}
      </div>
      <div className="profile-details">
        <div className="profile-pic-container">
          <img
            className="profile-pic"
            alt="Avatar"
            src={`https://robohash.org/${id}?set=set2&bgset=bg1&size=300x300`}
          />
        </div>

        <div className="profile-data-container">
          {!userProfile.address ? (
            <div className="loading-text">Loading...</div>
          ) : (
            <React.Fragment>
              <div className="profile-data">Name: {name}</div>
              <div className="profile-data">Email: {email}</div>
              <div className="profile-data">Website: {website}</div>
              <div className="profile-data">
                Address:
                {` ${address.street}, ${address.city} ${address.zipcode}`}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
