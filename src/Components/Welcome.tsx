import React from 'react';
import './Welcome.css';

const Welcome: React.FC = () => {
    return (
        <div className='Welcome'>
            <h1 className='Welcome-message'>Welcome! Start by typing a city up above</h1>
        </div>
    );
};

export default Welcome;
