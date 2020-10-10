import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
    return (
        <div className='Dashboard'>
            <h1 className='Dashboard-date'>
                mon, 13 <br /> November
            </h1>
            <div className='Dashboard-temperature-container'>
                <h1 className='Dashboard-temperature'>-10°</h1>
            </div>
        </div>
    );
}
