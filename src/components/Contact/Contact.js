import React from 'react';
import './Contact.css';
import { TranslationContext } from '../contexts/translation/TranslationContext';


function Contact() {
    const translation = React.useContext(TranslationContext);
    return (

        <section className="contact">
            <div className="contact__container">
                <h2 className="contact__title">{translation.contact}</h2>
                <a target="_blank" rel="noopener noreferrer" className="contact__link" href="mailto:angalkina1704@gmail.com">angalkina1704@gmail.com</a>
            </div>
        </section>
    )
}

export default Contact