import React from 'react';
import './Projects.css';


function Projects() {
    return (

        <section className="projects">

            <h2 className="projects__title">Projects</h2>
            <div className="projects__conteiner">

                <div className="project">

                    <h4 className="project__title">How to learn</h4>

                    <div className="project-list__conteiner">
                        <p className="project__description">My first stand-alone project was a one-page
                        site dedicated to teaching methods and useful learning resources</p>
                        <div className="project__link-conteiner">
                            <a href="https://github.com/Sandhani1704/how-to-learn" target="_blank" rel="noopener noreferrer" className="projects__link">Github</a>
                            <a target="_blank" className="projects__link" href="https://sandhani1704.github.io/how-to-learn/">
                                See Live
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project">

                    <h4 className="project__title">Travel to Russia</h4>

                    <div className="project-list__conteiner">
                        <p className="project__description">Website about traveling in Russia. Made layout on the Figmas's mokup, used BEM, responsive design</p>
                        <div className="project__link-conteiner">
                            <a href="https://github.com/Sandhani1704/russian-travel" target="_blank" rel="noopener noreferrer" className="projects__link">Github</a>
                            <a target="_blank" className="projects__link" href="https://sandhani1704.github.io/russian-travel/">
                                See Live
                                </a>
                        </div>
                    </div>

                </div>
                <div className="project">

                    <h4 className="project__title">Mesto</h4>

                    <div className="project-list__conteiner">
                        <p className="project__description">Website is written entirely in vanilla JS.
                         An interactive page where you can add photos, delete them, and like.</p>
                        <div className="project__link-conteiner">
                            <a href="https://github.com/Sandhani1704/how-to-learn" target="_blank" rel="noopener noreferrer" className="projects__link">Github</a>
                            <a target="_blank" className="projects__link" href="https://sandhani1704.github.io/how-to-learn/">
                                See Live
                                </a>
                        </div>
                    </div>

                </div>

                <div className="project">

                    <h4 className="project__title">Mesto-react</h4>

                    <div className="project-list__conteiner">
                        <p className="project__description">The project was created using Create React App.
                        An interactive page where you can add photos, delete them, and like.</p>
                        <div className="project__link-conteiner">
                            <a href="https://github.com/Sandhani1704/mesto-react" target="_blank" rel="noopener noreferrer" className="projects__link">Github</a>
                            <a target="_blank" className="projects__link" href="https://sandhani1704.github.io/mesto-react/">
                                See Live
                                </a>
                        </div>
                    </div>

                </div>
                <div className="project">

                    <h4 className="project__title">Backend Mesto</h4>

                    <div className="project-list__conteiner">
                        <p className="project__description">Project is dedicated to creating your own server for the Mesto project. Functional: Responses to GET, POST, DELETE requests</p>
                        <div className="project__link-conteiner">
                            <a href="https://github.com/Sandhani1704/express-mesto" target="_blank" rel="noopener noreferrer" className="projects__link">Github</a>
                            <a target="_blank" className="projects__link" href="#">
                                See Live
                                </a>
                        </div>
                    </div>

                </div>
                <div className="project">

                    <h4 className="project__title">Mesto-auth</h4>

                    <div className="project-list__conteiner">
                        <p className="project__description">Project on react with registration, authorization and routes. Added the ability to register and authorize a user.</p>
                        <div className="project__link-conteiner">
                            <a href="https://github.com/Sandhani1704/react-mesto-auth" target="_blank" rel="noopener noreferrer" className="projects__link">Github</a>
                            <a target="_blank" className="projects__link" href="https://sandhani1704.github.io/react-mesto-auth/">
                                See Live
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects