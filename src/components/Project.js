import React, { useRef } from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";

const Project = ({details}) => {

    const sliderRef = useRef();

    const settings = {
        dots : false,
        infintite : true, 
        speed : 500,
        slidesToShow : 2,
        SlidesToScroll : 1,
        arrows : false,
        responsive : [
            {
                breakpoint : 769,
                settings : {
                    slidesToShow : 1,
                    slidesToScroll : 1,
                }
            }
        ]
    }

    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <section className="project-container">

            <h5> {details.header} </h5>

            <div className="project-content">

                <div className="arrow-right" onClick={slideRight}>
                    <span className="material-symbols-outlined">chevron_right</span>
                </div>

                <div className="arrow-left" onClick={slideLeft}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </div>

                <Slider ref={sliderRef} {...settings}>
                {
                    details.list.map((item) => (
                        <ProjectCard key={item.title} detail={item} />
                    ))
                }
                </Slider>
                
            </div>
        </section>
    )

}

export default Project;