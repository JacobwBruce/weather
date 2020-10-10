import Axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import image from './images/snowing.jpg';

//Design: https://dribbble.com/vowles/projects/491714-Weather-project

function App() {
    const [searchQuery, changeSearchQuery] = useState('');
    const [weather, setWeather] = useState<object | null>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const { lat, lon } = (
            await Axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&APPID=${process.env.REACT_APP_WEATHER_KEY}`
            )
        ).data.coord;
        const { data } = await Axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
        );
        setWeather(data);
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
                        <button
                            type='reset'
                            className='btn-search fas fa-search'
                            onClick={handleSubmit}
                        ></button>
                    </form>
                </div>
                {weather && <Dashboard weather={weather} />}
            </div>
            <img className='image' src={image} alt='' />
        </div>
    );
}

export default App;
