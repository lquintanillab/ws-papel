import React from 'react';

import './LoadingIndicator.css'



const LoadingIndicator = () => {
    return (
        <div className={`sk-chase`}>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    );
}

export default LoadingIndicator;
