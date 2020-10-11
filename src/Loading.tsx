import React from 'react';
import './Loading.css';

const Loading: React.FC = () => {
    return (
        <div className='Loading'>
            <div id='loader-wrapper'>
                <div id='loader'></div>

                <div className='loader-section section-left'></div>
                <div className='loader-section section-right'></div>
            </div>
        </div>
    );
};

export default Loading;
