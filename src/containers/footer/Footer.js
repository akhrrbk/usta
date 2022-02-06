import React from 'react';
import './styles.css'
import { BiHomeAlt, BiSearchAlt2, BiSearch } from 'react-icons/bi'
import { facebook, instagram, telegram, whitelogo } from '../../assets/imports';

const Footer = () => {
  return (
    <div className='usta__footer'>
      <div className='usta__footer-container'>
        <div className='usta__footer-container_row1'>
          <div className='usta__footer-container_row1_home'>Home</div>
          <div>About</div>
          <div>Partners</div>
          <div>License</div>
          <div>News</div>
          <div>Contact</div>
        </div>
        <div className='usta__footer-container_row2'>
          <div className='usta__footer-container_row2_column1'>
            <div>Variable is undefined</div>
            <div>Address ipsum dolor sit amet consectetur</div>
          </div>
          <div className='usta__footer-container_row2_column2'>
            <div>Variable is undefined</div>
            <div>+998 90 <span><b>123 45 67</b></span></div>
          </div>
        </div>
        <div className='usta__footer-container_row3'>
          <div className='usta__footer-container_row3_left'>
            <div><img src={whitelogo} alt="" /></div>
            <div>© 2022 © 2019 ZH Group “ЧП GIJDUVON MASHHURASI”</div>
          </div>
          <div className='usta__footer-container_row3_right'>
            <div><img src={facebook} alt="" /></div>
            <div><img src={instagram} alt="" /></div>
            <div><img src={telegram} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer