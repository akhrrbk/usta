import React from 'react';
import './styles.css'
import { blackwave, bg2, yellowwave } from '../../assets/imports';

const News = () => {
  return (
      <div className='usta__news'>
        <img className='bg22' style={{position: 'absolute', bottom: '-3.5rem'}} src={bg2} alt="" />
        <img className='blackwave' style={{position: 'absolute'}} src={blackwave} alt="" />
        <div className='usta__news-content'>
          <div className='usta__news-content_news'>News</div>
          <div className='usta__news-content_button'><button>button</button></div>
        </div>
      </div>
  )
};

export default News