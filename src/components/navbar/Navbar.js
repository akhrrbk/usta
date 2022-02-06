import React, {useState} from 'react';
import './styles.css'
import { BiHomeAlt } from 'react-icons/bi'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import {facebook, instagram, telegram, en} from '../../assets/imports'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='usta__navbar'>
      
      <div className='usta__navbar-left'>
        <div className='usta__navbar-left_home'>Vesta</div>
        <div className='usta__navbar-left_links'>
          <div>About</div>
          <div>Partners</div>
          <div>License</div>
          <div>News</div>
          <div>Contact</div>
        </div>
      </div>
      
      <div className='usta__navbar-right'>
        <div className='usta__navbar-right_social'>
          <div><img src={facebook} alt="" /></div>
          <div><img src={instagram} alt="" /></div>
          <div><img src={telegram} alt="" /></div>
        </div>
        <div className='usta__navbar-right_lang'>
          <div><img src={en} alt="" /></div>
          <div>en</div>
        </div>
        <div className='usta__navbar-right_menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className='usta__navbar-right_menu_container'>
              <div className='usta__navbar-right_menu_container_links'>
                <div>About</div>
                <div>Partners</div>
                <div>License</div>
                <div>News</div>
                <div>Contact</div>
              </div>
              <div>
              <div className='usta__navbar-right_social'>
                <div><img src={facebook} alt="" /></div>
                <div><img src={instagram} alt="" /></div>
                <div><img src={telegram} alt="" /></div>
              </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Navbar