import React from 'react';
import './styles.css'
import {imgtwo, imgone, imgthree, imgfour, imgfive, down, bg2, blackwave} from '../../assets/imports'

const Catalog = () => {

  const Card = ({imgsource}) => {
    return (
      <div className='usta__catalog-container_left_item1'>
        <div><img src={imgsource} alt="" /></div>
        <div>
          <h2>Variable is undefined</h2>
          <p>Variable is undefined</p>
          <p>Variable is undefined</p>
        </div>
      </div>
    )
  }
  return (
    <div className='usta__catalog'>
      <div><h1>Products</h1></div>
      <div className='usta__catalog-container'>
        <div className='usta__catalog-container_left'>
          {/* item1 */}
          <div className='usta__catalog-container_left_item1'>
            <div><img src={imgone} alt="" /></div>
            <div>
              <h2>Variable is undefined</h2>
              <p>Variable is undefined</p>
              <p>Variable is undefined</p>
            </div>
          </div>

          {/* item2 */}
          <div className='usta__catalog-container_left_item2'>
            <div><img src={imgtwo} alt="" /></div>
            <div>
              <p>Variable is undefined</p>
              <p>Variable is undefined</p>
            </div>
          </div>
        </div>
        <div className='usta__catalog-container_right'>
          <div className='usta__catalog-container_right_row1'>
            <div><img src={imgthree} alt="" /></div>
            <div className='usta__catalog-container_right_row1_content'>
              <h2>Variable is undefined</h2>
              <p>Variable is undefined</p>
              <p>Variable is undefined</p>
            </div>
          </div>
          <div className='usta__catalog-container_right_row2'>
            <div className='usta__catalog-container_right_row2_item4'>
              <div><img src={imgfour} alt="" /></div>
              <div>
                <h2>Variable is undefined</h2>
                <p>Variable is undefined</p>
                <p>Variable is undefined</p>
              </div>
            </div>
            <div className='usta__catalog-container_right_row2_item4'>
              <div><img src={imgfive} alt="" /></div>
              <div>
                <h2>Variable is undefined</h2>
                <p>Variable is undefined</p>
                <p>Variable is undefined</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog