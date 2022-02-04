import React from 'react';
import './styles.css'
import { BiHomeAlt } from 'react-icons/bi'
import {facebook, instagram, telegram, en} from '../../assets/imports'

const Navbar = () => {

  return (
      <div className='usta__navbar'>
        <div className='usta__navbar-container'>
          <div className='usta__navbar-container_left'>
            <div><BiHomeAlt size={17} /></div>
            <div className='usta__navbar-container__links'>
              <div>About the Company</div>
              <div>Partners</div>
              <div>License/Certificate</div>
              <div>News/Articles</div>
              <div>Contacts</div>
            </div>
          </div>
          <div className='usta__navbar-container_right'>
            <div className='usta__navbar-container_right_social'>
              <div><img src={facebook} alt="facebook" /></div>
              <div><img src={instagram} alt="instagram" /></div>
              <div><img src={telegram} alt="telegram" /></div>
            </div>
            <div><img src={en} alt="" /> en</div>
          </div>
        </div>
      </div>
  )
};

export default Navbar