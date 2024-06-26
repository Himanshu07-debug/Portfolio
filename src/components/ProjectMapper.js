import React from "react";
import { PROJECT} from "../utils/data";
import Project from "./Project";
import "./ProjectMapper.css"

const ProjectMapper = () => {

    return (
        <div id="project">
            <h5>Projects</h5>
            <div>
                {
                    PROJECT.map((domain) => <Project key={domain.header} details={domain} />)
                }
            </div>
            
        </div>
        
    )

}

export default ProjectMapper;