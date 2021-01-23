import React from 'react';
import './Projects.css';
import Project from '../Project/Project';


function Projects({ onCardClick, cards }) {
    return (

        <section className="projects">

            <h2 className="projects__title">Projects</h2>
            <div className="projects__conteiner">

                {cards.map((card) => (
                    <Project key={card._id}
                        onCardClick={onCardClick}
                        card={card}
                    />
                ))}

            </div>
        </section>
    )
}

export default Projects