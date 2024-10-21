import './keyskills.css';
import React, { useState, useEffect } from 'react';

import debugging from '../../assets/debugging.png'
import timemanagement from '../../assets/timemanagement.png'
import teammanagement from '../../assets/teammanagement.png'
import githubKey from '../../assets/githubKey.png'

const images = [
    
    debugging,
    debugging,
    timemanagement,
    teammanagement,
    githubKey
  ];


const KeySkills = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);
    return (
        <section id='keyskills' className='keyskills'>
            <div className='keyskillsSection'>
                <h1 className='ksHeading'>Key Skills</h1>
                <h1 className='ksHeading2'>Key<span className='ksHeadingSkills'> Skills</span></h1>
            </div>

            <div className="slider-container">
            <div
                className="slider"
                style={{
                transform: `translateX(-${currentImageIndex * 100}%)`
                }}
            >
                {images.map((image, index) => (
                <img key={index} src={image} alt={`Slide ${index}`} className="slide" />
                ))}
            </div>
            </div>

        </section>
    )
}

export default KeySkills