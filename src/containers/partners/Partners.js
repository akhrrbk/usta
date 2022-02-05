import React from 'react';
import './styles.css'
import {google, slack, atlassian, dropbox, shopify, yellowwave} from '../../assets/imports'

const Partners = () => {
  return (
      <div className='usta__partners'>
        <img className='yellowwave' style={{position: 'absolute', right: '-30rem'}} src={yellowwave} alt="" />
         <div className='usta__partners-images'>
            <div><img src={google} alt="google" /></div>
            <div><img src={slack} alt="slack" /></div>
            <div><img src={atlassian} alt="atlassian" /></div>
            <div><img src={dropbox} alt="dropbox" /></div>
            <div><img src={shopify} alt="shopify" /></div>
         </div>
      </div>
  )
};

export default Partners