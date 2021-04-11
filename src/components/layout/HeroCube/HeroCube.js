import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

import hero1 from '../../../assets/hero1.jpg';
import hero6 from '../../../assets/hero6.jpg';
import hero3 from '../../../assets/hero4.jpg';
import hero5 from '../../../assets/hero5.jpg';

const HeroCube = () => {
    return (
        <AwesomeSlider 
            animation="cubeAnimation" 
            bullets={false}
        >
            <div data-src={hero1} />
            <div data-src={hero6} />
            <div data-src={hero3} />
            <div data-src={hero5}/>
        </AwesomeSlider>
    );
}

export default HeroCube;
