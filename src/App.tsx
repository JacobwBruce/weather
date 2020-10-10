import Axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import image from './images/snowing.jpg';

//Design: https://dribbble.com/vowles/projects/491714-Weather-project

//https:codepen.io/brandonkennedy/pen/yGjsi
function App() {
    const [searchQuery, changeSearchQuery] = useState('');
    const [weather, setWeather] = useState({});

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const { lat, lon } = (
            await Axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&APPID=${process.env.REACT_APP_WEATHER_KEY}`
            )
        ).data.coord;
        const { data } = await Axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`
        );
        console.log(data);
        setWeather(data);
        changeSearchQuery('');
    };

    return (
        <div className='App'>
            <div className='info-container'>
                <div className='search-container'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            className='search'
                            value={searchQuery}
                            onChange={(e) => changeSearchQuery(e.target.value)}
                        />
                    </form>
                </div>
                <Dashboard weather={weather} />
            </div>
            <img className='image' src={image} alt='' />
        </div>
    );
}

export default App;
