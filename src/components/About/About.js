import React from 'react';
import './About.css';
import ProfilePic from '../../images/avatar.jpg'
import { TranslationContext } from '../contexts/translation/TranslationContext';

function About() {
    const translation = React.useContext(TranslationContext);
    return (

        <section id="about" className="about">
            <h3 className="about__title">{translation.about}</h3>
            <div className="about__conteiner">
                <img className="about__image" src={ProfilePic} alt="Фотография профиля" />
                <p className="about__paragraph">{translation.aboutText}</p>
            </div>
        </section>
    )
}

export default About