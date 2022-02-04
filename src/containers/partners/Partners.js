import React from 'react';
import './styles.css'
import {google, slack, atlassian, dropbox, shopify} from '../../assets/imports'

const Partners = () => {
  return (
      <div className='usta__partners'>
          <div>
            <img src={google} alt="google" />
          </div>
          <div>
            <img src={slack} alt="slack" />
          </div>
          <div>
            <img src={atlassian} alt="atlassian" />
          </div>
          <div>
            <img src={dropbox} alt="dropbox" />
          </div>
          <div>
            <img src={shopify} alt="shopify" />
          </div>
      </div>
  )
};

export default Partners