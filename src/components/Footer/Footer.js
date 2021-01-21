import React from 'react';
import './Footer.css';
import github from '../images/github_logo_icon.png'
import whatsapp from '../images/whatsapp_icon_32.png'
import facebook from '../images/facebook_icon_32.png'
import UpIcon from '../images/up-icon.png'

function Footer() {
    return (

        <footer className="footer">
            <a href="#top" className="footer__back-to-top"><img className="footer__back-to-top-icon" src={UpIcon} alt='back to top' /></a>
            <nav className="navbar_footer">
                <ul className="navbar__nav">
                    <li className="navbar__item navbar__item_footer">
                        <a className="navbar__link" href="https://github.com/Sandhani1704" target="_blank" rel="noopener noreferrer"><img className="navbar__social-icon" src={github}
                            alt="Facebook" /></a>
                    </li>
                    <li className="navbar__item navbar__item_footer">
                        <a className="navbar__link" href="https://wa.me/+79037085488" target="_blank" rel="noopener noreferrer"><img className="navbar__social-icon" src={whatsapp}
                            alt="whatsapp" /></a>
                    </li>
                    <li className="navbar__item navbar__item_footer">
                        <a className="navbar__link" href="https://www.facebook.com/NyushaGalkina" target="_blank" rel="noopener noreferrer"><img className="navbar__social-icon" src={facebook}
                            alt="Facebook" /></a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer