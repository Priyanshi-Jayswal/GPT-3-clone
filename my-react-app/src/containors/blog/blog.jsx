import React from 'react'
import { Article } from '../../components';
import {blog01,blog02,blog03,blog04,blog05} from './imports';
const blog = () => {
  return (
    <div className="gpt3__blog section__padding" id= "blog">
      <div className="gpt3__blog-heading"> 
        <h1 className="gradient text">A lot is Happening ,we are blogging abouut it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-groupA">
        </div>
        <Article imgUrl={blog01} date="Sep 26,2021" title= GPT-3and open AI is the future . Let us explore how it is ? />
         </div>
         <div className="gpt3__blog-container-groupB">
          <Article imgUrl={blog02} date="Sep 26, 2021" title= GPT-3and open AI is the future . Let us explore how it is />
          <Article imgUrl={blog03} date="Sep 26, 2021" title= GPT-3and open AI is the future . Let us explore how it is />
          <Article imgUrl={blog04} date="Sep 26, 2021" title= GPT-3and open AI is the future . Let us explore how it is />
          <Article imgUrl={blog05} date="Sep 26 , 2021" title= GPT-3and open AI is the future . Let us explore how it is />
         </div>
    </div>
  )
}

export default blog
