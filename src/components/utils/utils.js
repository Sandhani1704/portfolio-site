import React from 'react';
import News from '../../images/news_1.png';
import MestoReactImg from '../../images/mesto-react.png';
import TraveltoRussia from "../../images/travel.png";
import HowToLearn from "../../images/how-to-learn.png";
import Weather from '../../images/weather_1.png';
import mesto from '../../images/mesto_1.png';

export const initialCards = [
    {
        name: 'How to learn',
        image: HowToLearn,
        description: 'My first stand-alone project was a one-page site dedicated to teaching methods and useful learning resources',
        stack: 'HTML, CSS',
        githubLink: 'https://github.com/Sandhani1704/how-to-learn',
        link: 'https://sandhani1704.github.io/how-to-learn/'
    },
    {
        name: 'Travel to Russia',
        image: TraveltoRussia,
        description: 'Website about traveling in Russia. Made layout on the Figmas mokup, used BEM, responsive design',
        stack: 'HTML, CSS',
        githubLink: 'https://github.com/Sandhani1704/russian-travel',
        link: 'https://sandhani1704.github.io/russian-travel/'
    },
    {
        name: 'Mesto',
        image: mesto,
        description: 'Website is written entirely in vanilla JS. A social network in which the students of the Practicum can change their data, add and delete their pictures, mark their favorites. The data is stored on the server and retrieved using Fetch API requests.',
        stack: 'HTML, CSS, JS, Fetch API, ES6 Classes, Webpack',
        githubLink: 'https://github.com/Sandhani1704/mesto',
        link: 'https://sandhani1704.github.io/mesto/index.html'
    },
    {
        name: 'React-mesto-api-full',
        image: MestoReactImg,
        description: 'Project includes the frontend and backend parts of the application with the following capabilities: authorization and registration of users, operations with cards and users.',
        stack: 'HTML, CSS, JS, React, Node.js, Express.js, MongoDB, mongoose',
        githubLink: 'https://galkina.students.nomoreparties.space/#/signin',
        link: 'https://github.com/Sandhani1704/react-mesto-api-full'
    },
    {
        name: 'News Explorer',
        image: News,
        description: 'Service for searching news on demand with registration and authorization of users. The user can save the articles he likes to "Favorites".',
        stack: 'HTML, CSS, JS, React, API, Express.js, MongoDB',
        githubLink: 'https://github.com/Sandhani1704/news-explorer-frontend',
        link: 'https://news-explorer.students.nomoreparties.space/#/'
    },
    {
        name: 'Weather-app',
        image: Weather,
        description: 'Weather app to find the current weather and 5 day forecast of any city on earth. The app displays weather information from the OpenWeatherMap API',
        stack: 'HTML, CSS, JS, React',
        githubLink: 'https://github.com/Sandhani1704/weather-app',
        link: 'https://sandhani1704.github.io/weather-app/'
    }
];