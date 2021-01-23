import React from 'react';
import News from '../../images/news_1.png';
import MestoReactImg from '../../images/mesto-react.png';
import TraveltoRussia from "../../images/Travel-to-Russia.png";
import HowToLearn from "../../images/HowToLearn.png";
import Weather from '../../images/Weather.png';

export const initialCards = [
    {
        name: 'How to learn',
        image: HowToLearn,
        description: 'My first stand-alone project was a one-page site dedicated to teaching methods and useful learning resources',
        githubLink: 'https://github.com/Sandhani1704/how-to-learn',
        link: 'https://sandhani1704.github.io/how-to-learn/'
    },
    {
        name: 'Travel to Russia',
        image: TraveltoRussia,
        description: 'Website about traveling in Russia. Made layout on the Figmas mokup, used BEM, responsive design',
        githubLink: 'https://github.com/Sandhani1704/russian-travel',
        link: 'https://sandhani1704.github.io/russian-travel/'
    },
    {
        name: 'Mesto',
        image: 'https://travelinlife.ru/uploads/666/08ca19b5eb73ebf4a3f223ea51221b25.jpg',
        description: 'Website is written entirely in vanilla JS. An interactive page where you can add photos, delete them, and like.',
        githubLink: 'https://github.com/Sandhani1704/how-to-learn',
        link: 'https://sandhani1704.github.io/how-to-learn/'
    },
    {
        name: 'Mesto-react',
        image: MestoReactImg,
        description: 'The project was created using Create React App. An interactive page where you can add photos, delete them, and like.',
        githubLink: 'https://github.com/Sandhani1704/mesto-react',
        link: 'https://sandhani1704.github.io/mesto-react/'
    },
    {
        name: 'News Explorer',
        image: News,
        description: 'Service for searching news on demand with registration and authorization of users. The user can save the articles he likes to "Favorites".',
        githubLink: 'https://github.com/Sandhani1704/express-mesto',
        link: '#'
    },
    {
        name: 'Weather-app',
        image: Weather,
        description: 'Project on react with registration, authorization and routes. Added the ability to register and authorize a user.',
        githubLink: 'https://github.com/Sandhani1704/react-mesto-auth',
        link: 'https://sandhani1704.github.io/react-mesto-auth/'
    }
];