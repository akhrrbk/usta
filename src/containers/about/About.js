import React from 'react';
import './styles.css'
import {plugin} from '../../assets/imports'

const About = () => {
  return (
      <div className='usta__about'>
        <div className='gradient__bg gradient_bg'></div>
        <img src={plugin} className='plugin' alt="" />
        <div className='usta__about-head'>
          <h1>Variable is undefined</h1>
          <p>Variable is undefined</p>
        </div>
        <div className='usta__about-container'>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oYllMKd2sIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
  ) 
};

export default About