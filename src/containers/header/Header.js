import React from 'react';
import './styles.css'
import {logo, imgone, blackwave, whitewave} from '../../assets/imports'
import {BiSearch} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='usta__header gradient_bg'>
      <div className='usta__header-nav'>
        <div className='usta__header-nav_left'>
          <div><img src={logo} alt="" /></div>
          <div><input placeholder='lorem...' type="text" /></div>
          <div className='usta__header-nav_left_search'>
            <div><input type="text" /></div>
            <div><BiSearch size={18} /></div>
          </div>
        </div>
        <div className='usta__header-nav_right'>
          <div>Lorem, ipsum dolor.</div>
          <div>+123 45 678</div>
        </div>
      </div>

      <div className='usta__header-container'>
        <div className='usta__header-container_left'>
          <div>Lorem, ipsum dolor.</div>
          <div>Lorem, ipsum dolor Lorem, ipsum.</div>
        </div>
        <div><img src={imgone} alt="" /></div>
      </div>
    </div>
  ) 
};

export default Header