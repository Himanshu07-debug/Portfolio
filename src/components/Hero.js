import React from "react";
import "./Hero.css";

const Hero = () => {

    return (
        <section className="hero-container">
            <div className="hero-content">
                <div className="intro">Hi , my name is</div>
                <div className="name">Himanshu Sharma</div>

                <div class="description">
                    <p>I'm a passionate problem solver & software developer with a deep interest in exploring the world & meeting new people.</p>
                    <p>I enjoy combining my skills in competitive programming and software development to tackle complex problems.</p>
                </div>
                <div className="button-holder">
                    <a href="https://drive.google.com/file/d/1_FedkTjXY23AzyldwuzjE946hIoOI0se/view?usp=sharing" rel="noreferrer" target="_blank">
                        <button>Resume</button>
                    </a>
                    <a href="https://linktr.ee/t_himanshu_sharma" target="_blank" rel="noreferrer">
                        <button>
                            My Coding Profile
                        </button>
                    </a>
                </div>

            </div>

            <div className="hero-img">

                <div>
                    <img src="/assests/avatar.svg" alt="Profile" ></img>
                </div>

                <div>
                    <div className="tech-icon">
                        <img src="/assests/React.png" alt="react" />
                    </div>

                    <div className="tech-icon">
                        <img src="/assests/Javascript.svg" alt="js"  />
                    </div>

                    <div className="tech-icon">
                        <img src="/assests/CSS.png" alt="css" />
                    </div>

                </div>

            </div>

        </section>
    )
    
}

export default Hero;

