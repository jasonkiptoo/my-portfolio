import React from "react";
import "./Skills.css";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiAdobephotoshop } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { DiRuby } from "react-icons/di";
function Skills() {
  return (
    <div className="container-lg" id="skills">
      <div className="header">
        <h3>My Skills</h3>
        <small>I do all kinds of neat stuffs</small>
      </div>
      <div className="container-skills">
        <div className="skills">
          <div className="container-exp">
            <div className="aboutme-content">
              <div className="skill-cards">
                <article className="skill-card">
                  <FaReact />
                  <h5 className="skill-name">React JS</h5>
                  <small className="skill-period">
                    Over 2+ year Experience
                  </small>
                  <p className="skill-description ">
                    {" "}
                    For the past 2 years i have been on a learning curve
                  </p>
                </article>
                <article className="skill-card">
                  <SiJavascript />

                  <h5 className="skill-name"> JavaScript</h5>
                  <small className="skill-period">
                    Over 2+ year Experience
                  </small>
                  <p className="skill-description ">
                    {" "}
                    For the past 2 years i have been on a learning curve
                  </p>
                </article>

                <article className="skill-card">
                  <AiFillHtml5 />

                  <h5 className="skill-name">HTML/CSS</h5>
                  <small className="skill-period">
                    Over 2+ year Experience
                  </small>
                  <p className="skill-description ">
                    {" "}
                    For the past 2 years i have been on a learning curve
                  </p>
                </article>
                <article className="skill-card">
                  <FiFigma />

                  <h5 className="skill-name">Figma</h5>
                  <small className="skill-period">
                    Over 2+ year Experience
                  </small>
                  <p className="skill-description ">
                    {" "}
                    For the past 2 years i have been on a learning curve
                  </p>
                </article>
                <article className="skill-card">
                  <SiAdobephotoshop />

                  <h5 className="skill-name">Adobe Photoshop</h5>
                  <small className="skill-period">
                    Over 2+ year Experience
                  </small>
                  <p className="skill-description ">
                    {" "}
                    For the past 2 years i have been on a learning curve
                  </p>
                </article>
                <article className="skill-card">
                  <DiRuby />

                  <h5 className="skill-name">Ruby on Rails</h5>
                  <small className="skill-period">
                    Over 2+ year Experience
                  </small>
                  <p className="skill-description ">
                    {" "}
                    For the past 2 years i have been on a learning curve
                  </p>
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
    </div>
  );
}

export default Skills;
