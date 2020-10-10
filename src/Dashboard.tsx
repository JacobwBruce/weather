import React from 'react';
import './Dashboard.css';

interface Props {
    weather: {
        [key: string]: any;
    };
}

interface Day {
    temp: {
        day: number;
    };
    weather: [{ icon: string }];
}

const Dashboard: React.FC<Props> = ({ weather }) => {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const date = new Date();
    const month = monthNames[date.getMonth()];
    const day = date.toDateString().slice(0, 3);
    console.log(weather);

    const weeklyComponents = weather.daily.map((day: Day) => {
        return (
            <div className='Dashboard-day-container'>
                <span>day</span>
                <img
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=''
                />
                <span>{Math.round(day.temp.day)}</span>
            </div>
        );
    });

    return (
        <div className='Dashboard'>
            <h1 className='Dashboard-date'>
                {day} {date.getDate()} <br /> {month}
            </h1>
            <div className='Dashboard-temperature-container'>
                <h1 className='Dashboard-temperature'>{Math.round(weather.current.temp)}°</h1>
                <img
                    src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`}
                    alt=''
                />
            </div>
            <div className='Dashboard-weekly-container'>{weeklyComponents}</div>
        </div>
    );
};

export default Dashboard;
