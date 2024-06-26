import React from "react";
import "./MobileNav.css";
import { HashLink } from "react-router-hash-link";

const MobileNav = ({ isOpen, toggleMenu }) => {

    return (

        <div>

            <div className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >

                <div className="mobile-menu-container">

                    <h1 className="name">Himanshu Sharma</h1>

                    <ul>
                    <li>
                            <HashLink to='#' smooth className="menu-item">
                                Home
                            </HashLink>
                        </li>
                        <li>
                            <HashLink to='#skills' smooth className="menu-item">
                                    Skills
                            </HashLink>
                        </li>
                        <li>
                            <HashLink to='#project' smooth className="menu-item">
                                Projects
                            </HashLink>
                        </li>

                        <a href="mailto:himanshusharma2002.2000@gmail.com" target="_blank" rel="noreferrer">
                            <button className="contact-btn">Contact Me</button>
                        </a>
                    </ul>


                </div>

            </div>


        </div>
    )

}

export default MobileNav;