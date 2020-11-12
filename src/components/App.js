import React from 'react';
import ProfilePic from './images/photo_pic.jpg'
import facebook from './images/facebook_icon.png'
import telegram from './images/telegram_icon.png'
import github from './images/icon-github.png'
import ProjectsImage from './images/banner1.png'

function App() {
    return (
        <>
            <header className="header">
                <p className="header__title">Portfolio</p>
                <nav className="navbar">
                    <ul className="navbar__nav">
                        <li className="navbar__item">
                            <a className="navbar__link" href="#" target="_blank"><img className="navbar__social-icon" src={facebook}
                                alt="Facebook" /></a>
                        </li>
                        <li className="navbar__item">
                            <a className="navbar__link" href="#" target="_blank"><img className="navbar__social-icon" src={telegram}
                                alt="Facebook" /></a>
                        </li>
                        <li className="navbar__item">
                            <a className="navbar__link" href="#" target="_blank"><img className="navbar__social-icon" src={github}
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
                        <p className="places__paragraph">I Code and Develop website and web apps. Skilled in HTML5, CSS3, Javascript, React.js, Node.js, Express knowledge. Believe in constant learning that enhances my coding skills more and more!!! </p>

                    </div>
                </div>
            </section>

            <section className="projects">
                <h2 className="projects__title">Projects</h2>
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
                        <a target="_blank" className="projects__link" href="https://github.com/Sandhani1704/how-to-learn">
                            <img className="projects__image" src={ProjectsImage} alt="баннер проекта" />
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
                        <a target="_blank" className="projects__link" href="https://github.com/Sandhani1704/how-to-learn">
                            <img className="projects__image" src={ProjectsImage} alt="баннер проекта" />
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
                        <a target="_blank" className="projects__link" href="https://github.com/Sandhani1704/how-to-learn">
                            <img className="projects__image" src={ProjectsImage} alt="баннер проекта" />
                        </a>
                    </div>

                </div>

            </section>


            <section className="contact">
                <div className="contact__container">
                    <h2 className="contact__title">
                        Wanna Contact
        </h2>
                    {/* <div className="contact__wrapper"> */}
                    <a
                        target="_blank"
                        className="contact__link"
                        href="mailto:angalkina1704@gmail.com"
                    >Click Me ! angalkina1704@gmail.com</a
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