import React from 'react';
import './styles.css'
import { BiHomeAlt } from 'react-icons/bi'
import {facebook, instagram, telegram} from '../../assets/imports'

const Navbar = () => {

  return (
      <div className='usta__navbar'>
          <div className='usta__navbar-container'>
            <div className='usta__navbar-container_items'>
              <p><BiHomeAlt size={27} color='#fff' /></p>
              <p>About the Company</p>
              <p>Partners</p>
              <p>Products</p>
              <p>News</p>
              <p><a href="#Contact">Contact</a></p>
            </div>
            <div className='usta__navbar-container_social'>
              <div><img src={facebook} alt="facebook link" /></div>
              <div><img src={instagram} alt="instagram link" /></div>
              <div><img src={telegram} alt="telegram link" /></div>
            </div>
            <div className='usta__navbar-container_lang'>
              languages options
            </div>
            <div>
              +998 90 123 45 67
            </div>
          </div>
      </div>
  )
};

export default Navbar