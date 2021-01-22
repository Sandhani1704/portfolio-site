import React from 'react';
import './Author.css';
import '../Animation/Animation.css';

function Author() {
    return (

        <section id="top" className="author">
            <div className="author__container">
                <div className="author__content">
                    <h1 className="author__title"
                    >Hi Everyone! My name is
                    <span className="author__text-color-main"> Anna Galkina</span>
                    </h1>
                    <p className="author__caption">I'm a Web Developer.</p>
                    <a href="#about" rel="noopener noreferrer" className="author__link projects__link_author">Know more</a>
                </div>
            </div>
        </section>
    )
}

export default Author