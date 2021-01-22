import React from 'react';
import './Projects.css';
import Project from '../Project/Project';


function Projects() {
    return (

        <section className="projects">

            <h2 className="projects__title">Projects</h2>
            <div className="projects__conteiner">

                <Project />

            </div>
        </section>
    )
}

export default Projects