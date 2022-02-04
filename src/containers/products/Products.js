import React from 'react';
import './styles.css'
import Product from '../../components/product/Product'

const Products = () => {
  return (
      <div className='usta__products'> 
          <Product text='variable is undefined' />
          <Product text='variable is undefined' />
          <Product text='variable is undefined' />
          <Product text='variable is undefined' />
          <Product text='variable is undefined' />
      </div>
  )
};

export default Products