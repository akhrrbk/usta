import React from 'react';
import './styles.css'
import {blackwave, bg2, yellowwave} from '../../assets/imports'
import {BiCctv} from 'react-icons/bi'

const Item = ({number}) => {
  return (
    <div className='usta__products-content_item1'>
      <BiCctv size={50} />
      <p>orem ipsum dolor sit fhui</p>
      <p className='big'>{number}</p>
    </div>
  )
}

const Products = () => {
  return (
      <div className='usta__products'> 
          <img className='blackwave' src={blackwave} alt="" />
          <img className='yellowwave' src={yellowwave} alt="" />
          <img className='bg2' src={bg2} alt="" />
          <img className='bg22' src={bg2} alt="" />
          <div className='usta__products-content'>
            <h1>Lorem, ipsum dolor</h1>
            <div className='usta__products-content_items'>
              <Item number='1' />
              <Item number='2' />
              <Item number='3' />
              <Item number='4' />
              <Item number='5' />
            </div>
          </div>
      </div>
  )
};

export default Products