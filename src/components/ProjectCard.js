import React from "react";
import "./ProjectCard.css";
import { BiLogoGithub , BiLink } from "react-icons/bi";

const ProjectCard = ({detail}) => {

    return (
        <div className="project-card">
            <h6>{detail.title}</h6>

            <div className="project-duration">{detail.date}</div>

            <ul>
                {
                    detail.responsibilities.map((item) => (
                        <li key={item} > {item} </li>
                    ))
                }
            </ul>

            <div className="project-links">
            <a href={detail.githubLink} target="_blank" rel="noreferrer"><BiLogoGithub /></a>
                {
                    (detail.deployLink !== "") ? 
                    (<a href={detail.deployLink} target="_blank" rel="noreferrer"><BiLink /></a>)
                     : <></>
                }
                
            </div>

        </div>
    )

}

export default ProjectCard;