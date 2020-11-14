import React from 'react';
import ProfilePic from './images/photo_pic.jpg'
import github from './images/github_logo_icon.png'
import whatsapp from './images/whatsapp_icon_32.png'
import facebook from './images/facebook_icon_32.png'
import ProjectsImage from './images/Научиться_учиться_2.png'
import ProjectsImageRussiaTravel from './images/__logo.png'

function App() {
    return (
        <>
            <header className="header">
                <p className="header__title">Portfolio</p>
                <nav className="navbar">
                    <ul className="navbar__nav">
                        <li className="navbar__item">
                            <a className="navbar__link" href="https://github.com/Sandhani1704" target="_blank"><img className="navbar__social-icon" src={github}
                                alt="Facebook" /></a>
                        </li>
                        <li className="navbar__item">
                            <a className="navbar__link" href="https://wa.me/+79037085488" target="_blank"><img className="navbar__social-icon" src={whatsapp}
                                alt="whatsapp" /></a>
                        </li>
                        <li className="navbar__item">
                            <a className="navbar__link" href="https://www.facebook.com/NyushaGalkina" target="_blank"><img className="navbar__social-icon" src={facebook}
                                alt="Facebook" /></a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="author">
                <div className="author__container">
                    <h1 className="author__title" data-sr-id="4"
                    >Hi Everyone! My name is
                    <span className="author__text-color-main"> Anna Galkina</span>
                    </h1>
                    <p className="author__caption">I'm a Web Developer.</p>
                    <p className="author__link">
                        <a className="cta-btn cta-btn--hero" href="#about">Know more</a>
                    </p>
                </div>
            </div>
            <section className="places">
                <h3 className="places__title">About me</h3>
                <div className="places__place">

                    <img className="places__image" src={ProfilePic} alt="Фотография профиля" />
                    <div className="places__grid-paragraph">
                        <p className="places__paragraph">I am novice front-end developer who is
                        building a new career from the thing I really enjoy. For a year, I have
                        honed my skills as a web-developer, learning how to build web applications
                        with HTML, CSS, JavaScript, React, Node, databasing in MongoDB while studying in Yandex.Practicum.
                        I've loved building things for web and been working with JavaScript (ES6+), HTML & CSS,
                        React, Node.js and MongoDB recently.
 </p>

                    </div>
                </div>
            </section>

            <h2 className="projects__title">Projects</h2>
            <section className="projects">

                {/* <div className="projects__container">
                    <div className="projects__description-wrapper">
                        <h2 className="projects__description-title">How to learn</h2>
                        <p className="projects__description">My first stand-alone project was a one-page 
                        site dedicated to teaching methods and useful learning resources.</p>
                        <a target="_blank" className="projects__link" href="https://github.com/Sandhani1704/how-to-learn">
                            See Live
                </a>
                    </div>
                    <div className="projects__wrapper-image">
                        <a target="_blank" className="projects__pic-link" href="https://github.com/Sandhani1704/how-to-learn">
                            <img className="projects__image" src={ProjectsImage} alt="баннер проекта" />
                        </a>
                    </div>

                </div> */}

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
                    {/* <p className="mt-4"><span className="font-weight-bold">Contribution </span>
            <br /><code className="text-success">Owner</code></p> */}
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

                {/* <div className="projects__container">
                    <div className="projects__description-wrapper">
                        <h2 className="projects__description-title">How to learn</h2>
                        <p className="projects__description">A Robofriends website having robots fetched
                    from API along with search option using react.js</p>
                        <a target="_blank" className="projects__link" href="https://github.com/Sandhani1704/how-to-learn">
                            See Live
                </a>
                    </div>
                    <div className="projects__wrapper-image">
                        <a target="_blank" className="projects__pic-link" href="https://github.com/Sandhani1704/how-to-learn">
                            <img className="projects__image" src={ProjectsImageRussiaTravel} alt="баннер проекта" />
                        </a>
                    </div>

                </div>

                <div className="projects__container">
                    <div className="projects__description-wrapper">
                        <h2 className="projects__description-title">How to learn</h2>
                        <p className="projects__description">A Robofriends website having robots fetched
                    from API along with search option using react.js</p>
                        <a target="_blank" className="projects__link" href="https://github.com/Sandhani1704/how-to-learn">
                            See Live
                </a>
                    </div>
                    <div className="projects__wrapper-image">
                        <a target="_blank" className="projects__pic-link" href="https://github.com/Sandhani1704/how-to-learn">
                            <img className="projects__image" src={ProjectsImage} alt="баннер проекта" />
                        </a>
                    </div>

                </div> */}

            </section>


            <section className="contact">
                <div className="contact__container">
                    <h2 className="contact__title">
                        Contact Me
                    </h2>
                    {/* <div className="contact__wrapper"> */}
                    <a
                        target="_blank"
                        className="contact__link"
                        href="mailto:angalkina1704@gmail.com"
                    >Click Me! angalkina1704@gmail.com</a
                    >
                    {/* </div> */}
                </div>
            </section>



            {/* <footer className="footer navbar-static-bottom">
                <div className="container">
                    <a href="#top" className="back-to-top">
                        <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
                    </a>
                    <div className="social-links">
                        <a href="https://twitter.com/ritikasonii" target="_blank">
                            <i className="fa fa-twitter fa-inverse"></i>
                        </a>
                        <a href="https://codepen.io/ritika_soni" target="_blank">
                            <i className="fa fa-codepen fa-inverse"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ritika-sonii/" target="_blank">
                            <i className="fa fa-linkedin fa-inverse"></i>
                        </a>
                        <a href="https://github.com/Ritika-soni" target="_blank">
                            <i className="fa fa-github fa-inverse"></i>
                        </a>
                    </div>

                    <hr />

                </div>
            </footer> */}

        </>
    )

}

export default App