import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';

function Header() {
    return (

        <header className="header">
            <p className="header__title">Portfolio</p>
            <Navbar />
        </header>
    )
}

export default Header