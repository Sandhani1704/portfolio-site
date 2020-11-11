import React from 'react';
import ProfilePic from './images/photo_pic.jpg'
import facebook from './images/facebook_color_white.svg'
import VK from './images/vk_color_white.svg'
import github from './images/icon-github.png'

function App() {
    return (
        <>
            <header className="header">
                <p>Portfolio</p>
                <nav className="navbar">
                    <ul className="navbar__nav">
                        <li className="navbar__item">
                            <a className="navbar__link" href="#" target="_blank"><img class="navbar__social-icon" src={facebook}
                                alt="Facebook" /></a>
                        </li>
                        <li className="navbar__item">
                            <a className="navbar__link" href="#" target="_blank"><img class="navbar__social-icon" src={VK}
                                alt="Facebook" /></a>
                        </li>
                        <li className="navbar__item">
                            <a className="navbar__link" href="#" target="_blank"><img class="navbar__social-icon" src={github}
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

                    {/* <div className="places__grid-item">
                        <p className="places__url-heading">URL</p>
                        <a className="places__link" href="http://park-kosa.ru">park-kosa.ru</a>
                    </div> */}
                    <img className="places__image" src={ProfilePic} alt="Куршская коса" />
                    <div className="places__grid-paragraph">
                        <p className="places__paragraph">I Code and Develop website and web apps. Skilled in HTML5, CSS3, Javascript, React.js, Node.js, Express knowledge. Believe in constant learning that enhances my coding skills more and more!!! </p>
                        {/* <p className="places__paragraph">На этом Калининградская область не заканчивается. Для путешественника
                        и исследователя там же по соседству — самая западная точка России, Балтийская коса, — и немецкое
                        наследие россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная в
                    спокойствие природы и запах стального, прохладного моря.</p> */}
                    </div>
                </div>
            </section>

            <section id="projects">
                <div class="container">
                    <div class="project-wrapper">
                        <h2 class="section-title dark-blue-text">
                            Projects
          </h2>



                        <div class="row">
                            <div class="col-lg-4 col-sm-12">
                                <div class="project-wrapper__text">
                                    <h3 class="project-wrapper__text-title">Robofriends</h3>
                                    <div>
                                        <p class="mb-4">
                                            A Robofriends website having robots fetched from API along with search option using react.js
                  </p>
                                    </div>
                                    <a target="_blank" class="cta-btn cta-btn--hero" href="https://ritika-soni.github.io/robofriends/">
                                        See Live
                </a>
                                    <a target="_blank" class="cta-btn text-color-main" href="https://github.com/Ritika-soni/robofriends">
                                        Source Code
                </a>
                                </div>
                            </div>
                            <div class="col-lg-8 col-sm-12">
                                <div class="project-wrapper__image">
                                    <a href="https://ritika-soni.github.io/robofriends/" target="_blank">
                                        <div data-tilt class="thumbnail rounded">
                                            <img class="img-fluid" src="./assets/banner.png" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>



                        <div class="row">
                            <div class="col-lg-4 col-sm-12">
                                <div class="project-wrapper__text">
                                    <h3 class="project-wrapper__text-title">Covid19 First Case</h3>
                                    <div>
                                        <p class="mb-4">
                                            A website that shows the arrival of first corona virus case in different countries along with date and place using just html and css.
                  </p>
                                    </div>
                                    <a target="_blank" class="cta-btn cta-btn--hero" href="https://ritika-soni.github.io/covid19firstcase/">
                                        See Live
                </a>
                                    <a target="_blank" class="cta-btn text-color-main" href="https://github.com/Ritika-soni/covid19firstcase">
                                        Source Code
                </a>
                                </div>
                            </div>
                            <div class="col-lg-8 col-sm-12">
                                <div class="project-wrapper__image">
                                    <a href="https://ritika-soni.github.io/covid19firstcase/" target="_blank">
                                        <div data-tilt class="thumbnail rounded">
                                            <img class="img-fluid" src="./assets/banner1.png" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-sm-12">
                                <div class="project-wrapper__text">
                                    <h3 class="project-wrapper__text-title">Walking Warrior</h3>
                                    <div>
                                        <p class="mb-4">
                                            A codepen animation page with a warrior walking in a dark road using just html and css.
                  </p>
                                    </div>
                                    <a target="_blank" class="cta-btn cta-btn--hero" href="https://codepen.io/ritika_soni/full/JjYLYgM">
                                        See Live
                </a>
                                    <a target="_blank" class="cta-btn text-color-main" href="https://codepen.io/ritika_soni/pen/JjYLYgM">
                                        Source Code
                </a>
                                </div>
                            </div>
                            <div class="col-lg-8 col-sm-12">
                                <div class="project-wrapper__image">
                                    <a href="https://codepen.io/ritika_soni/full/JjYLYgM" target="_blank">
                                        <div data-tilt class="thumbnail rounded">
                                            <img class="img-fluid" src="./assets/banner3.png" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>



                        <div class="row">
                            <div class="col-lg-4 col-sm-12">
                                <div class="project-wrapper__text">
                                    <h3 class="project-wrapper__text-title">Cakegaadi</h3>
                                    <div>
                                        <p class="mb-4">
                                            A wordpress website for selling cake
              </p>
                                    </div>
                                    <a target="_blank" class="cta-btn cta-btn--hero" href="https://cakegaadishop.wordpress.com/">
                                        See Live
            </a>
                                </div>
                            </div>
                            <div class="col-lg-8 col-sm-12">
                                <div class="project-wrapper__image">
                                    <a href="https://cakegaadishop.wordpress.com/" target="_blank">
                                        <div data-tilt class="thumbnail rounded">
                                            <img class="img-fluid" src="./assets/banner4.png" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            <section id="contact">
                <div class="container">
                    <h2 class="section-title">
                        Wanna Contact
        </h2>
                    <div class="contact-wrapper">
                        <a
                            target="_blank"
                            class="cta-btn cta-btn--resume"
                            href="mailto:ritikasoni73@gmail.com"
                        >Click Me ! ritikasoni73@gmail.com</a
                        >
                    </div>
                </div>
            </section>



            <footer class="footer navbar-static-bottom">
                <div class="container">
                    <a href="#top" class="back-to-top">
                        <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
                    </a>
                    <div class="social-links">
                        <a href="https://twitter.com/ritikasonii" target="_blank">
                            <i class="fa fa-twitter fa-inverse"></i>
                        </a>
                        <a href="https://codepen.io/ritika_soni" target="_blank">
                            <i class="fa fa-codepen fa-inverse"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ritika-sonii/" target="_blank">
                            <i class="fa fa-linkedin fa-inverse"></i>
                        </a>
                        <a href="https://github.com/Ritika-soni" target="_blank">
                            <i class="fa fa-github fa-inverse"></i>
                        </a>
                    </div>

                    <hr />

                </div>
            </footer>

        </>
    )

}

export default App