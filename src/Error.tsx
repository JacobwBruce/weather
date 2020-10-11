import React from 'react';
import './Error.css';

interface Props {
    errorMessage: string;
}

const Error: React.FC<Props> = ({ errorMessage }) => {
    return (
        <div className='Error'>
            <h4>
                Oops! There was a problem, perhaps you miss-spelled the location or it is not a
                valid location in the{' '}
                <a target='_blank' href='https://openweathermap.org/api'>
                    API
                </a>
            </h4>
            <h4 className='Error-message'>{errorMessage.toString()}</h4>
        </div>
    );
};

export default Error;
