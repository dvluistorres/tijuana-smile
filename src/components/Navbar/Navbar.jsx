import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdArrowBackIos } from 'react-icons/md'

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return(
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.brandmark} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#WELCOME">WELCOME</a></li>
        <li className="p__opensans"><a href="#SERVICES">SERVICES</a></li>
        <li className="p__opensans"><a href="#ABOUT US">ABOUT US </a></li>
        <li className="p__opensans"><a href="#OUR WORK">OUR WORK</a></li>
        <li className="p__opensans"><a href="#CONTACT US">CONTACT US</a></li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">LOGIN/REGISTER</a>
        <div />
        <a href="/" className="p__opensans">BOOK</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center .slide-bottom" id='smallscreen_overlay' >
            <MdArrowBackIos fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          
            <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans"><a href="#WELCOME" onClick={() => setToggleMenu(false)}>WELCOME</a></li>
            <li className="p__opensans"><a href="#SERVICES" onClick={() => setToggleMenu(false)}>SERVICES</a></li>
            <li className="p__opensans"><a href="#ABOUT US" onClick={() => setToggleMenu(false)}>ABOUT US </a></li>
            <li className="p__opensans"><a href="#OUR WORK" onClick={() => setToggleMenu(false)}>OUR WORK</a></li>
            <li className="p__opensans"><a href="#CONTACT US" onClick={() => setToggleMenu(false)}>CONTACT US</a></li>
            </ul>
          </div>)}
      </div>
    </div>
  )
};

export default Navbar;
