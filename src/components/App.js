import React from 'react';
import Header from './Header/Header';
import Author from './Author/Author';
import Footer from './Footer/Footer';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import ImagePopup from './ImagePopup/ImagePopup';
import { initialCards as initialCards } from './utils/utils';



function App() {

    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [cards, setCards] = React.useState([]);

    function closeImagePopup() {
        setIsImagePopupOpen(false);
        setSelectedCard({});
    }

    const handleCardClick = (card) => {
        setSelectedCard(card)
        setIsImagePopupOpen(true);
    }

    React.useEffect(() => {
        setCards(initialCards);
    }, []);

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
            <Header />

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


        </>
    )

}

export default App