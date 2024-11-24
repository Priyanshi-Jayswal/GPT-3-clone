import React from 'react'
import'./feature.css';

const feature = ({title,text}) => {
  return (
    <div className="gpt3__features section__padding">
      <div className="gpt3__featurs-heading">
        <h1> className="gradient-text" The Future is Now and You Just Need To Realize It.Step into Future Today & Make it Happen.</h1>
      <p>Request early Access to Get Xtarted </p>
      </div>
      <div className ="gpt3__features-containor">
       <p>{text}</p>
       <Feature title={item.title} text={item.text} key={`${item.title}${index}`} />
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default feature
