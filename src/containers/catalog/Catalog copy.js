import React from 'react';
import './styles.css'
import {imgtwo, imgone, imgthree, imgfour, imgfive} from '../../assets/imports'

const Catalogs = () => {
  return (
      <div className='usta__catalog'>
          <div className='usta__catalog-rowone'>
            <div className='usta__catalog-rowone_itemone'>
              <img src={imgone} alt="caatalog plug" />
              <div className='usta__catalog-rowone_itemone_content'>
                <h2>Lorem ipsum dolor</h2>
                <h2>VESTA Electric</h2>
                <p>Vaiable is undefined</p>
                <p><a href="">Vaiable is undefined</a></p>
              </div>
            </div>
            <div className='usta__catalog-rowone_itemtwo'>
              <div className='usta__catalog-rowone_itemtwo_img'>
                <img src={imgtwo} alt="" />
              </div>
              <div className='usta__catalog-rowone_itemone_content'>
                <div>usta__catalog-rowtwo_itemone</div>
                <div>Vaiable is undefined big</div>
              </div>
            </div>
          </div>
          <div className='usta__catalog-rowtwo'>
            <div className='usta__catalog-rowtwo_itemone'>
              <img src={imgthree} alt="" />
              <h1>usta__catalog-rowtwo_itemone</h1>
              <p>usta__catalog-rowtwo_itemone</p>
              <p><a href="">usta__catalog-rowtwo_itemone</a></p>
            </div>
            <div className='usta__catalog-rowtwo_itemtwo'>
              <div>
                <div>
                  <img src={imgfour} alt="" />
                  <h1>Vaiable is undefined</h1>
                  <p>usta__catalog-rowtwo_itemone</p>
                  <p><a href="">usta__catalog-rowtwo_itemone</a></p>
                </div>
              </div>
              <div>
                <div>
                  <img src={imgfive} alt="" />
                  <h1>Vaiable is undefined</h1>
                  <p>usta__catalog-rowtwo_itemone</p>
                  <p><a href="">usta__catalog-rowtwo_itemone</a></p>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
};

export default Catalogs