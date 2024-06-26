import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MovbileNav";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div>

            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">

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

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span class={"material-symbols-outlined"} 
                        style={{fontSize : "1.8rem"}}
                        >
                        
                        {openMenu ? "close" : "menu"}

                        </span>
                    </button>
                </div>
            </nav>
        </div>
    )

}

export default Navbar;