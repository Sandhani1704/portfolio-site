import React from 'react';
import Header from './Header/Header';
import Author from './Author/Author';
import Footer from './Footer/Footer';
import About from './About/About';
import Projects from './Projects/Projects';

function App() {
    return (
        <>
            <Header />

            <Author />

            <About />

            <Projects />






            <section className="contact">
                <div className="contact__container">
                    <h2 className="contact__title">Contact Me</h2>
                    <a target="_blank" className="contact__link" href="mailto:angalkina1704@gmail.com">Click Me! angalkina1704@gmail.com</a>
                </div>
            </section>

            <Footer />


        </>
    )

}

export default App