import React from "react";
import "./Footer.css";
import { BiLogoLinkedin, BiLogoGithub, BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
    const handleLinkClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="footer">
            <h2>Copyright © 2024 Himanshu Sharma </h2> 
            <div className="footer-icon">
                <div className="f-icon" onClick={() => handleLinkClick("https://in.linkedin.com/in/himanshu-sharma-dev")}>
                    <BiLogoLinkedin />
                </div>
                <div className="f-icon" onClick={() => handleLinkClick("https://github.com/Himanshu07-debug")}>
                    <BiLogoGithub />
                </div>
                <div className="f-icon" onClick={() => handleLinkClick("https://twitter.com/T_Himanshu_")}>
                    <BiLogoTwitter />
                </div>
            </div>
        </div>
    )
}

export default Footer;
