import React from 'react';

import './Banner.css'

const Banner = ({bannerImg, alt}) => {
    return (
        <div>
        <img className="banner" src={bannerImg} alt={alt}/>
    </div>
    );
}

export default Banner;
