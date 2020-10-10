import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
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

    return (
        <div className='Dashboard'>
            <h1 className='Dashboard-date'>
                {day} {date.getDate()} <br /> {month}
            </h1>
            <div className='Dashboard-temperature-container'>
                <h1 className='Dashboard-temperature'>-10°</h1>
            </div>
            <div className='Dashboard-weekly-container'></div>
        </div>
    );
}
