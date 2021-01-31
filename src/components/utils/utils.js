import React from 'react';
import News from '../../images/news_1.png';
import MestoReactImg from '../../images/mesto-react.png';
import TraveltoRussia from "../../images/travel.png";
import HowToLearn from "../../images/how-to-learn.png";
import Weather from '../../images/weather_1.png';
import mesto from '../../images/mesto_1.png';

export const initialCardsEn = [
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
        name: 'Mesto-api-full',
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

export const initialCardsRu = [
    {
        name: 'Научиться учиться',
        image: HowToLearn,
        description: 'Мой первый самостоятельный проект — одностраничный сайт, посвященный методикам обучения и полезным ресурсам для учебы.',
        stack: 'HTML, CSS',
        githubLink: 'https://github.com/Sandhani1704/how-to-learn',
        link: 'https://sandhani1704.github.io/how-to-learn/'
    },
    {
        name: 'Путешествия по России',
        image: TraveltoRussia,
        description: 'Сайт о путешествиях по России. Верстка по макету из Figma с использованием методологии БЭМ, адаптивный дизайн',
        stack: 'HTML, CSS',
        githubLink: 'https://github.com/Sandhani1704/russian-travel',
        link: 'https://sandhani1704.github.io/russian-travel/'
    },
    {
        name: 'Место',
        image: mesto,
        description: 'Сайт полностью написан на ванильном JS. Социальная сеть, в которой студенты Практикума могут изменять свои данные, добавлять и удалять свои фотографии, ставить лайки. Данные хранятся на сервере и извлекаются с помощью запросов Fetch API.',
        stack: 'HTML, CSS, JS, Fetch API, ES6 Classes, Webpack',
        githubLink: 'https://github.com/Sandhani1704/mesto',
        link: 'https://sandhani1704.github.io/mesto/index.html'
    },
    {
        name: 'Место-реакт',
        image: MestoReactImg,
        description: 'Проект включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями',
        stack: 'HTML, CSS, JS, React, Node.js, Express.js, MongoDB, mongoose',
        githubLink: 'https://galkina.students.nomoreparties.space/#/signin',
        link: 'https://github.com/Sandhani1704/react-mesto-api-full'
    },
    {
        name: 'Поиск новостей',
        image: News,
        description: 'Сервис по поиску новостей по запросу с регистрацией и авторизацией пользователей. Пользователь может сохранить понравившиеся статьи в "Избранное".',
        stack: 'HTML, CSS, JS, React, API, Express.js, MongoDB',
        githubLink: 'https://github.com/Sandhani1704/news-explorer-frontend',
        link: 'https://news-explorer.students.nomoreparties.space/#/'
    },
    {
        name: 'Прогноз погоды',
        image: Weather,
        description: 'Приложение для поиска прогноза погоды в любом городе на пять дней. Приложение отображает информацию из OpenWeatherMap API',
        stack: 'HTML, CSS, JS, React',
        githubLink: 'https://github.com/Sandhani1704/weather-app',
        link: 'https://sandhani1704.github.io/weather-app/'
    }
];