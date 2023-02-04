import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import Headersocials from "./Headersocials";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
        

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
              <h1 className="text-lg">
                <Typical
                  loop={Infinity}
                  steps={[
                    "React Developer 👨‍💻",
                    2000,
                    "Web Developer 🗺️",
                    2000,
                    "Software Developer💻",
                    2000,
                    "Enthusiastic Techie 🔴",
                    2000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">Always Building</span>
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
      <Headersocials/>

    </div>
  );
}

export default Profile;
