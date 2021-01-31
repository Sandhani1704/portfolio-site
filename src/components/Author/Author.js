import React from 'react';
import './Author.css';
import '../Animation/Animation.css';
import { TranslationContext } from '../contexts/translation/TranslationContext';

function Author() {
    const translation = React.useContext(TranslationContext);

    return (

        <section id="top" className="author">
            
            <div className="author__content">
                <h1 className="author__title"
                >{translation.authorTitle}
                    <span className="author__text-color-main"> {translation.authorTitleСolor}</span>
                </h1>
                <p className="author__caption">{translation.authorСaption}</p>
                <a href="#about" rel="noopener noreferrer" className="author__link projects__link_author">{translation.authorLink}</a>
                
            </div>
        </section>
    )
}

export default Author