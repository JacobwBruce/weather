import Axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Welcome from './Components/Welcome';
import Error from './Components/Error';
import Loading from './Components/Loading';

//Design: https://dribbble.com/vowles/projects/491714-Weather-project
// https://medium.muz.li/weather-app-inspiration-3378000015c6
// https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
function App() {
    const [searchQuery, changeSearchQuery] = useState('');
    const [mainComponent, setMainComponent] = useState<any>(<Welcome />);
    const [image, setImage] = useState<string | null>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setMainComponent(<Loading />);
        try {
            const { lat, lon } = (
                await Axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&APPID=${process.env.REACT_APP_WEATHER_KEY}`
                )
            ).data.coord;
            const { data } = await Axios.get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
            );
            setImage(`${data.current.weather[0].main}-image`);
            setMainComponent(<Dashboard weather={data} />);
        } catch (err) {
            setMainComponent(<Error errorMessage={err} />);
        }
    };

    return (
        <div className='App-container'>
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
                            <button type='submit' className='btn-search fas fa-search'></button>
                        </form>
                    </div>
                    {mainComponent}
                </div>
                <div className={`image ${image || 'no-image'}`} />
            </div>
        </div>
    );
}

export default App;
