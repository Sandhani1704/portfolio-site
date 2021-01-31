import React from 'react';
import './Projects.css';
import Project from '../Project/Project';
import { TranslationContext } from '../contexts/translation/TranslationContext';


function Projects({ onCardClick, cards }) {
    const translation = React.useContext(TranslationContext);
    return (

        <section className="projects">

            <h2 className="projects__title">{translation.projects}</h2>
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