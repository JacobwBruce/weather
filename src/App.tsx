import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';

//Design: https://dribbble.com/vowles

function App() {
    const [searchQuery, changeSearchQuery] = useState('');

    return (
        <div className='App'>
            <input
                type='text'
                className='search'
                value={searchQuery}
                onChange={(e) => changeSearchQuery(e.target.value)}
            />
            <Dashboard />
        </div>
    );
}

export default App;
