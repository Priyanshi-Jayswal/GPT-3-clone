import React from 'react'
import'./footer.css';
import gpt3Logo from '../../assets/logo.svg';
const footer = () => {
  return (
    <div className="gpt3__footer section_padding">
      <div className="gpt3__footer-heading">
        <h1> className="gradient text> DO you want To step into future Before others</h1>
      </div>


      <div className="gpt3__Footer-btn">
        <p>Request early Access</p>
      </div>

      <div className="gpt3__links">
        <div className=" glpt3__footer-links">
          <img src={gpt3 Logo} alt="logo" />
          <p>Crechterwoord k12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4> Links </h4>
          <p> Overons </p>
          <p> Social Media</p>
          <p> Counters </p>
          <p> COntact </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & conditions</p>
          <p>Privacy Policy</p>
          <p>Contacts</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>GEt in touch</h4>
          <p>Crecthyterwood K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payne.net</p>
          </div>
      </div>

      <div className="gp[t3__footer-copyright">
        <p> 2021 GPT-3.All rights reserved. </p>
      </div>
    </div>
  )
}

export default footer
