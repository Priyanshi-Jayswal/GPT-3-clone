import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <div>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#feature">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </div>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3_navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="gpt3_navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>

      {toggleMenu ? (
        <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
      ) : (
        <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
      )}

      {toggleMenu && (
        <div className="gpt3__navbar-menu_containor scapl-up-center">
          <Menu />
          <div className="gpt3__navbar-menu_containor-links-sign"></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
