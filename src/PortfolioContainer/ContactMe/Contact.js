import React from "react";
import { useState } from "react";
import "./Contact.css";
import { FiPhoneCall, FiSend } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
function Contact() {
  const [show, setShow] = useState(false);
  return (
    <div className="container-lg" id="contact">
      <div className="contact-header" style={{ color: "#FF5964" , marginLeft:"50%"}}>
        <h4 className="">Hit Me Up</h4>
      </div>
      <div>
        {" "}
        <span className="highlighted-text">
          Get in touch and set the ball rolling 🎱
        </span>
      </div>
      <div className="contact-cards">
        <article className="contact-card">
          <FiPhoneCall />
          <h5>Call </h5>
        </article>

        <article className="contact-card">
          <AiOutlineGithub />
          <a href="https://github.com/jasonkiptoo">
            <h5>GitHub </h5>
          </a>
        </article>

        <article className="contact-card">
          <AiOutlineTwitter />
          <h5>tweet </h5>
        </article>
        <article className="contact-card">
          <HiOutlineMail />
          <h5>Send an email </h5>
        </article>
      </div>

      <div className="contact-header">
        <h4
          className="open-form pt-5"
          style={{ color: "#FF5964", paddingLeft: "10px" }}
          onClick={() => setShow(!show)}
        >
          Click here to fill in a contact form
        </h4>
      </div>

      {show && (
        <div className="contact-form">
          <div className="contact-header">
            <h5 className=" pt-4">Fill out this form and submit</h5>
          </div>
          <form className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
            <label for="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
            <label for="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter your subject"
            />
            <label for="message">Message</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
            <button type="submit" className="btn btn-primary mt-4">
              Submit <FiSend />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Contact;
