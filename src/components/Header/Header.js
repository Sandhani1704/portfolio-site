import React from 'react';
import './Header.css';
// import Navbar from '../Navbar/Navbar';
import LangSelect from '../LangSelect/LangSelect';
import { TranslationContext } from '../contexts/translation/TranslationContext';

function Header({onLangSelect}) {
    const translation = React.useContext(TranslationContext);

    return (

        <header className="header">
            <p className="header__title">{translation.title}</p>
            {/* <Navbar /> */}
            <LangSelect onLangSelect={onLangSelect}/>
        </header>
    )
}

export default Header