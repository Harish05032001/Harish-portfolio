import './keyskills.css';
import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import debugging from '../../assets/debugging.png'
import timemanagement from '../../assets/timemanagement.png'
import teammanagement from '../../assets/teammanagement.png'
import githubKey from '../../assets/githubKey.png'

const images = [
    
    debugging,
    timemanagement,
    teammanagement,
    githubKey
  ];


const KeySkills = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle clicking the next button
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    return (
        <section id='keyskills' className='keyskills'>
            <div className='keyskillsSection'>
                <h1 className='ksHeading'>Key Skills</h1>
                <h1 className='ksHeading2'>Key<span className='ksHeadingSkills'> Skills</span></h1>
            </div>

            <div className="carousel-container">
                {/* Image carousel */}
                <div className="carousel">
                    <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="carousel-image"
                    />
                </div>

                {/* Swipe button */}
                <button className="swipe-button" onClick={handleNext}>
                    Swipe →
                </button>

                {/* Indicator circles */}
                <div className="carousel-indicators">
                    {images.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${currentIndex === index ? 'active' : ''}`}
                    ></div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default KeySkills