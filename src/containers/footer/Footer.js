import React from 'react';
import './styles.css'
import { BiHomeAlt, BiSearchAlt2 } from 'react-icons/bi'
import { whitelogo } from '../../assets/imports';

const Footer = () => {
  return (
    <div className='usta__footer'>
      <div className='usta__footer-container'>
        <div className='usta__footer-container_header'>
          <p><a href="#home"><BiHomeAlt size={27} color='black' /></a></p>
          <p><a href="">About the Company</a></p>
          <p><a href="">Partners</a></p>
          <p><a href="">Certificates</a></p>
          <p><a href="">News</a></p>
          <p><a href="">Contact</a></p>
        </div>

        <div className='usta__footer-container_adress'>
          <div className='usta__footer-container_adress_first'>
            <p>Lorem, ipsum dolor.</p>
            <p>address: Lorem ipsum dolor sit amet.</p>
            <div className='usta__footer-container_adress_input'>
              <input type="text" />
              <div><BiSearchAlt2 size={20} /></div>
            </div>
          </div>
          <div className='usta__footer-container_adress_second'>
            <p>Lorem, ipsum dolor.</p>
            <p>+998 90 123 45 67</p>
          </div>
        </div>

        <div className='usta__footer-container_bottom'>
          <div className='usta__footer-container_bottom_one'>
            <img src={whitelogo} alt="" />
          </div>
          <div>
            <h2>Lorem ipsum, dolor sit ame</h2>
          </div>
          <div className='mama'>
            social media
          </div>
        </div>

      </div>
    </div>
  )
};

export default Footer