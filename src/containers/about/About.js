import React from 'react';
import './styles.css'
import {plugin, blackwave, bg2} from '../../assets/imports'

const About = () => {
  return (
      <div className='usta__about'>
        <div className='backgroundyello gradient_bg'></div>
          <div className='usta__about-heading'>
            <h1>Variable is undefined</h1>
            <p>Variable is undefined</p>
          </div>
          <div className='usta__about-container'>
            <img src={plugin} alt="" />
            <div className='usta__about-container_yt'>
              <iframe width="640" height="400" src="https://www.youtube.com/embed/oYllMKd2sIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
      </div>
  ) 
};

export default About