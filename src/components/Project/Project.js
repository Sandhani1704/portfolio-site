import React from 'react';
import './Project.css';

function Project({ onCardClick, card }) {

    function handleClick() {
        onCardClick(card)
    }

    return (
        <>
            <div className="project">
                <div className="project-list__conteiner">
                    <img src={card.image} alt='' onClick={handleClick} className="project__image" />
                </div>
            </div>

        </>
    )
}

export default Project