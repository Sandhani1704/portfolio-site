import React from 'react';
import './About.css';
import ProfilePic from '../../images/avatar.jpg'

function About() {
    return (

        <section id="about" className="about">
            <h3 className="about__title">About me</h3>
            <div className="about__conteiner">
                <img className="about__image" src={ProfilePic} alt="Фотография профиля" />
                <p className="about__paragraph">I am novice front-end developer who is
                building a new career from the thing I really enjoy. For a year, I have
                honed my skills as a web-developer, learning how to build web applications
                with HTML, CSS, JavaScript, React, Node, databasing in MongoDB while studying in Yandex.Practicum.
                I've loved building things for web and been working with JavaScript (ES6+), HTML & CSS,
                React, Node.js and MongoDB recently.
                    </p>
            </div>
        </section>
    )
}

export default About