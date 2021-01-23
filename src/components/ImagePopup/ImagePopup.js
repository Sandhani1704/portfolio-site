import React from 'react';
import closeIcon from '../../images/Close_Icon.svg'

import './ImagePopup.css';


function ImagePopup({ isOpen, onClose, card }) {

    return (

        <section className={`popup-image ${isOpen && 'popup-image_opened'}`}>
            <div className="popup-image__overlay"></div>
            <div className="popup-image__cover">
                <button type="button" onClick={onClose} className="popup-image__close-button"><img className="popup-image__close-icon" src={closeIcon} alt="закрыть" /></button>
                <h4 className="popup-image__title">{card.name}</h4>

                <div className="popup-image__conteiner">
                    <img src={card.image} alt='' className="popup-image__image" />
                    <div className="popup-image__content">
                        <p className="popup-image__description">{card.description}</p>
                        <div className="popup-image__link-conteiner">
                            <a href={card.githubLink} target="_blank" rel="noopener noreferrer" className="popup-image__link">Github</a>
                            <a target="_blank" className="popup-image__link" href={card.link}>
                                See Live
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default ImagePopup;