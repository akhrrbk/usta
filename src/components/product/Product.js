import React from 'react';
import './styles.css'
import { imgtwo } from '../../assets/imports'

const Product = ({text}) => {
  return (
      <div className='usta__product'>
          <img src={imgtwo} alt="" />
          <p>{text}</p>
      </div>
  )
};

export default Product