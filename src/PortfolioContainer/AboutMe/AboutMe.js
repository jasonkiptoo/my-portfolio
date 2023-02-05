import react from "react";

import image from "../../assets/Home/profile.jpg";
import { BsAward } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import "./Aboutme.css";
import Typical from "react-typical";

function AboutMe() {
  return (
    <div className="container-lg" id="about">
      <div className="about-header">
        <h5>Get to Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container-about">
        <div className="container-img-overlay">
          <div className="container-img">
            <img src={image} alt="IMG-20210410-134500" border="0" />
          </div>
        </div>
        <div className="container-exp">
          <div className="aboutme-content">
            <div className="about-cards">
              <article className="about-card">
                <BsAward />

                <h5>Experience</h5>
                <small>3+ year Experience</small>
              </article>
              <article className="about-card">
                <HiUsers />

                <h5>Clients</h5>
                <small>300+ satisfied</small>
              </article>

              <article className="about-card">
                <AiOutlineFundProjectionScreen />

                <h5>Projects</h5>
                <small>30+ Completed</small>
              </article>
            </div>
            <p>
              {" "}
              A Web Developer is a professional who is responsible for the
              design and construction of websites. They ensure that sites meet
              user expectations by ensuring they look good, run smoothly and
              offer easy access points with no loading issues between pages or
              error messages.{" "}
              <div className="aboutme-btn">
                <a href="#contact"> Let's Talk</a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>

    // <section className="containerr" id="about">
    //   <div className="container-about">
    //     <h5>Get to Know Me</h5>
    //     <h2>About Me</h2>
    //   </div>

    //   <div className="container-aboutme">
    //     <div className="aboutme-img">
    //       <div className="aboutme-img-overlay">
    //         <img src={image} alt="aboutme-img" />
    //       </div>
    //     </div>
    //     <div className="aboutme-content">
    //       <div className="about-cards">
    //         <article className="about-card">
    //           <BsAward />

    //           <h5>Experience</h5>
    //           <small>3+ year Experience</small>
    //         </article>
    //         <article className="about-card">
    //           <HiUsers />

    //           <h5>Clients</h5>
    //           <small>300+ satisfied</small>
    //         </article>

    //         <article className="about-card">
    //           <AiOutlineFundProjectionScreen />

    //           <h5>Projects</h5>
    //           <small>30+ Completed</small>
    //         </article>
    //       </div>
    //       <p>
    //         {" "}
    //         A Web Developer is a professional who is responsible for the design
    //         and construction of websites. They ensure that sites meet user
    //         expectations by ensuring they look good, run smoothly and offer easy
    //         access points with no loading issues between pages or error
    //         messages.{" "}
    //         <div className="aboutme-btn">
    //           <a href="#contact"> Let's Talk</a>
    //         </div>
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
}

export default AboutMe;
