import React from 'react';
import './styles.css'
import {logo, imgone, blackwave, whitewave} from '../../assets/imports'
import {BiSearch} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='usta__header gradient_bg'>
      <img className='whitewave' src={whitewave} alt="" />
      <img className='whitewave2' src={blackwave} alt="" />

      <div className='usta__header-all'>
        <div className='usta__header-nav'>
          <div className='usta__header-nav_left'>
            <div><img src={logo} alt="" /></div>
            <div><input className='usta__header-nav_left_inputone' placeholder='lorem...' type="text" /></div>
            <div className='usta__header-nav_left_search'>
              <div><input className='usta__header-nav_left_inputtwo' type="text" /></div>
              <div><BiSearch size={20} /></div>
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
      

    </div>
  ) 
};

export default Header