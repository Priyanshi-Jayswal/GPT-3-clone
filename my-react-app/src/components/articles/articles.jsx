import React from 'react';
import {Article , Brand , CTA} from './Components ';
import { blog01, blog02, blog03, blog04, blog05 } from'./brand/imports';

const article = ({ imgUrl}) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt="blog image"/>
        <div classname="gpt3__blog-container_article-content">
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
          </div>
          <p> Read full article</p>
        </div>
      </div>
    </div>
  )
}

export default article