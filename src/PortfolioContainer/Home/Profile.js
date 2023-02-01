import React from "react";
// import Typical from 'react-typical'
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Jayson </span>{" "}
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text"> <h1>


                </h1></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
