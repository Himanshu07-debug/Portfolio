import React from "react";
import ContactForm from "./ContactForm";
import "./ContactMe.css";
import { BiLogoLinkedin, BiLogoGithub, BiLogoTwitter } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa6";

const ContactMe = () => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }} className="box1">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <div className="icons">
                <div className="icon" onClick={() => handleLinkClick("https://in.linkedin.com/in/himanshu-sharma-708949227")}><BiLogoLinkedin /></div>
                <div className="icon" onClick={() => handleLinkClick("https://github.com/Himanshu07-debug")}><BiLogoGithub /></div>
                <div className="icon" onClick={() => handleLinkClick("https://twitter.com/T_Himanshu_")}><BiLogoTwitter /></div>
                <div className="icon" onClick={() => handleLinkClick("mailto:himanshusharma2002.2000@gmail.com")}><FaEnvelope /></div>
            </div>
        </div>

        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
