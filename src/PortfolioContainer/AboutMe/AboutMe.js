import react from "react";

import image from "../../assets/Home/profile.jpg";
import { BsAward } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import "./Aboutme.css";

function AboutMe() {
  return (
    <section className="containerr" id="about">
      <div className="container-about">
        <h5>Get to Know Me</h5>
        <h2>About Me</h2>
      </div>

      <div className="container-aboutme">
        <div className="aboutme-img">
          <div className="aboutme-img-overlay">
            <img src={image} alt="aboutme-img" />
          </div>
        </div>
        <div className="aboutme-content">
          <div className="about-cards">
            <article className="about-card">
              <i className="fas fa-user">
                <BsAward />
              </i>
              <h5>Experience</h5>
              <small>3+ year Working</small>
            </article>
            <article className="about-card">
              <i className="fas fa-user">
                <HiUsers />
              </i>
              <h5>Clients</h5>
              <small>300</small>
            </article>
            <article className="about-card">
              <i className="fas fa-user">
                <AiOutlineFundProjectionScreen />
              </i>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            {" "}
            A Web Developer is a professional who is responsible for the design
            and construction of websites. They ensure that sites meet user
            expectations by ensuring they look good, run smoothly and offer easy
            access points with no loading issues between pages or error
            messages.{" "}
          </p>
          <a href="#contact"> Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
