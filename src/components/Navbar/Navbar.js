import React from 'react';
import './Navbar.css';
import github from '../../images/github_logo_icon.png'
import whatsapp from '../../images/whatsapp_icon_32.png'
import facebook from '../../images/facebook_icon_32.png'

function Navbar() {
    return (

        <nav className="navbar">
            <ul className="navbar__nav">
                <li className="navbar__item">
                    <a className="navbar__link" href="https://github.com/Sandhani1704" target="_blank" rel="noopener noreferrer"><img className="navbar__social-icon" src={github}
                        alt="Facebook" /></a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="https://wa.me/+79037085488" target="_blank" rel="noopener noreferrer"><img className="navbar__social-icon" src={whatsapp}
                        alt="whatsapp" /></a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="https://www.facebook.com/NyushaGalkina" target="_blank" rel="noopener noreferrer"><img className="navbar__social-icon" src={facebook}
                        alt="Facebook" /></a>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar