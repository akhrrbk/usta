import React from 'react';
import './styles.css'
import {plugin} from '../../assets/imports'

const About = () => {
  return (
      <div className='usta__about'>
          <div className='usta__about-heading'>
            <h1>Heading Variable is undefined</h1>
            <p>Variable is undefined</p>
          </div>
          <div className='usta__about-container'>
            <img src={plugin} alt="" />
            <div>
              youtube embed
            </div>
          </div>
      </div>
  )
};

export default About