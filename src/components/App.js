import React from 'react';
import Header from './Header/Header';
import Author from './Author/Author';
import Footer from './Footer/Footer';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import ImagePopup from './ImagePopup/ImagePopup';
import { initialCardsEn } from './utils/utils';
import { initialCardsRu } from './utils/utils';
import { TranslationContext, translations } from './contexts/translation/TranslationContext';
import LangSelect from './LangSelect/LangSelect';



function App() {

    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [cards, setCards] = React.useState([]);
    const [lang, setLang] = React.useState('en')
    
    function closeImagePopup() {
        setIsImagePopupOpen(false);
        setSelectedCard({});
    }

    const handleCardClick = (card) => {
        setSelectedCard(card)
        setIsImagePopupOpen(true);
    }

    React.useEffect(() => {
        if (lang === 'en') {
            
            setCards(initialCardsEn);
        }
        else {
            setCards(initialCardsRu)
        }
    }, [lang]);

    React.useEffect(() => {
        function handleEscClose(evt) {
            if (evt.key === 'Escape') {
                closeImagePopup();
            }
        }

        function closeByOverlayClick(evt) {
            if (evt.target.classList.contains('popup-image__overlay')) {
                closeImagePopup();
            }
        }

        document.addEventListener('keydown', handleEscClose);
        document.addEventListener('click', closeByOverlayClick);

        return () => {
            document.removeEventListener('keydown', handleEscClose);
            document.removeEventListener('click', closeByOverlayClick);
        };
    });

    return (
        <>
            <TranslationContext.Provider value={translations[lang]}>
                <Header onLangSelect={setLang}/>

                <Author />

                <About />

                <Projects onCardClick={handleCardClick} cards={cards} />

                <Contact />

                <Footer />

                <ImagePopup
                    card={selectedCard}
                    isOpen={isImagePopupOpen}
                    onClose={closeImagePopup}
                />

                {/* <LangSelect onLangSelect={setLang} /> */}
                {/* <LangSelect onLangSelect={lang} /> */}
            </TranslationContext.Provider>

        </>
    )

}

export default App