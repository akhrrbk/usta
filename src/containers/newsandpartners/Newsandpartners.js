import React from 'react';
import './styles.css'
import {google, slack, atlassian, dropbox, shopify, blackwave, yellowwave} from '../../assets/imports'

const Newsandpartners = () => {
  return (
    <div className='usta__np'>
        <div className='usta__np-news'>
            <img src={blackwave} className='blackwave' alt="" />
            <img src={yellowwave} className='yellowwave' alt="" />
            <h1>News & Articles</h1>
            <button>READ ALL NEWS</button>
        </div>
        <div className='usta__np-partners'>
            <div><img src={google} alt="google" /></div>
            <div><img src={slack} alt="slack" /></div>
            <div><img src={atlassian} alt="atlassian" /></div>
            <div><img src={dropbox} alt="dropbox" /></div>
            <div><img src={shopify} alt="shopify" /></div>
        </div>
    </div>
  ) 
}

export default Newsandpartners