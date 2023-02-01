import React from "react";
import Typical from "react-typical";
import "./Profile.css";
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
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
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm{" "}
              <span className="highlighted-text" style={{ color: "#FF5823" }}>
                Jayson{" "}
              </span>{" "}
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "React Developer 😅",
                    1000,
                    "Web Developer🙋‍♀️",
                    1000,
                    "Software Developer🤓",
                    1000,
                    "Enthusiastic Techie 🔴",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">Always Building</span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="JasonKiptoo.pdf" download="Jason kiptoo.pdf">
              <button className="btn highlighted-btn">Get Resume</button>{" "}
            </a>
          </div>
        </div>
        <div className="profile-image">
          <div className="profile-image-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
