import React from 'react';
import './styles.css'
import plugin from '../../assets/plugin.png'

const Header = () => {
  return (
      <div className='usta__header gradient_bg'>
          <div className='usta__header-content'>
            <h1>Vaiable is undefined</h1>
            <p>Vaiable is undefined <a href="">Vaiable is undefined</a></p>
          </div>
          <div className='usta__header-img'>
            <img src={plugin} alt="plugin" />
          </div>
      </div>
  )
};

export default Header