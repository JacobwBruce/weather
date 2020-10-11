import React from 'react';

interface Props {
    errorMessage: string;
}

const Error: React.FC<Props> = ({ errorMessage }) => {
    return <div className='Error'>{errorMessage.toString()}</div>;
};

export default Error;
