import React from 'react';
import './styles.css'
import {logo, imgone, blackwave, whitewave} from '../../assets/imports'
import {BiSearch} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='usta__header gradient_bg'>
      <img src={whitewave} className='whitewave' alt="" />
      <img src={blackwave} className='whitewave2' alt="" />
      <div className='usta__header-nav'>
        <div className='usta__header-nav_left'>
          <div><img src={logo} alt="" /></div>
          <div>
            <div>Variable is undefined</div>
            <div>+998 <b>90 123 45 67</b></div>
          </div>
        </div>
        <div className='usta__header-nav_right'>
          <div><input type="text" placeholder='variable is undefined' /></div>
          <div><BiSearch size={27} /></div>
        </div>
      </div>
      
      <div className='usta__header-container'>
        <div className='usta__header-container_left'>
          <h1>Variable is undefined</h1>
          <p>Variable is undefined</p>
        </div>
        <div className='usta__header-container_right'>
          <img src={imgone} alt="" />
        </div>
      </div>

    </div>
  ) 
}

export default Header