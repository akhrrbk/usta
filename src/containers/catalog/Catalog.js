import React from 'react';
import './styles.css'
import {imgtwo, imgone, imgthree, imgfour, imgfive, down, bg2, blackwave} from '../../assets/imports'

const Catalog = () => {
  return (
      <div className='usta__calatog'>
        <div><h1>Lorem ipsum dolor sit.</h1></div>
        <div className='usta__catalog-container'>
          <div className='usta__catalog-container_left'>
            <div className='usta__catalog-container_left_cardone'>
              <div><img src={imgone} alt="" /></div>
              <div className='usta__catalog-container_left_cardone_content'>
                <h1>Lorem, ipsum dolor</h1>
                <p>Lorem ipsum dolor sit</p>
                <p>Lorem ipsum dolor sit</p>
              </div>
            </div>  
            <div className='usta__catalog-container_left_cardtwo'>
              {/* <img className='cardtwo_img' src={down} alt="" /> */}
              <div><img src={imgtwo} alt="" /></div>
              <div>
                <div><p>Lorem ipsum dolor sit.</p></div>
                <div><p>Lorem ipsum dolor sit.</p></div>
              </div>
            </div>
          </div>
          <div className='usta__catalog-container_right'>
            <div className='usta__catalog-container_right_top'>
              <div><img src={imgthree} alt="" /></div>
              <div className='usta__catalog-container_left_cardone_content'>
                <h1>Lorem, ipsum dolor</h1>
                <p>Lorem ipsum dolor sit</p>
                <p>Lorem ipsum dolor sit</p>
              </div>
            </div>
            <div className='usta__catalog-container_right_bottom'>
              <div className='usta__catalog-container_right_bottom_left'>
                <div><img src={imgfour} alt="" /></div>
                <div className='usta__catalog-container_left_cardone_content'>
                  <h1>Lorem, ipsum dolor</h1>
                  <p>Lorem ipsum dolor sit</p>
                  <p>Lorem ipsum dolor sit</p>
                </div>
              </div>
              <div className='usta__catalog-container_right_bottom_right'>
                <div><img src={imgfive} alt="" /></div>
                <div className='usta__catalog-container_left_cardone_content'>
                  <h1>Lorem, ipsum dolor</h1>
                  <p>Lorem ipsum dolor sit</p>
                  <p>Lorem ipsum dolor sit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default Catalog