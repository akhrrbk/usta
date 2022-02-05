import React from 'react';
import './styles.css'
import { BiHomeAlt, BiSearchAlt2, BiSearch } from 'react-icons/bi'
import { facebook, instagram, telegram, whitelogo } from '../../assets/imports';

const Footer = () => {
  return (
    <div className='usta__footer'>
      <div className='usta__footer-container'>
        <div className='usta__footer-container_links'>
          <div><BiHomeAlt /></div>
          <div>About the Company</div>
          <div>Partners</div>
          <div>License/Certificates</div>
          <div>News/Articles</div>
          <div>Contacts</div>
        </div>
        <div className='usta__footer-container_middle'>
          <div className='usta__footer-container_middle_left'>
            <div>oorem, ipsum dolor</div>
            <div>oorem, ipsum dolor ipsum dolor ipsum dolor ipsum hfhfh</div>
            <div className='usta__footer-container_middle_left_searchbar'>
              <div><input className='inputarea' placeholder='search...' type="text" /></div>
              <div className='searchicon' style={{marginLeft: '3rem', marginTop: '0.5rem'}}><BiSearch size={27} /></div>
            </div>
          </div>
          <div className='usta__footer-container_middle_right'>
            <div>borem ipsum dolor sit</div>
            <div>+998 90 <span>123 45 67</span></div>
          </div>
        </div>
        <div className='usta__footer-container_bottom'>
          <div className='usta__footer-container_bottom_left'>
            <div><img src={whitelogo} alt="" /></div>
            <div>© 2022 © 2019 ZH Group “ЧП GIJDUVON MASHHURASI”</div>
          </div>
          <div className='usta__footer-container_bottom_right'>
            <div><img src={facebook} alt="facebook" /></div>
            <div><img src={instagram} alt="instagram" /></div>
            <div><img src={telegram} alt="telegram" /></div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer