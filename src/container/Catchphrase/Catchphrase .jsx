import React from 'react';
import { images } from '../../constants'

import './Catchphase.css';

const Catchphase = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">Inovation and sense of excellence</h1>
      <p className="app__header-p p__opensans" style={{ margin: '2rem 0'}}>Our team of friendly doctors provide all the dental services you may need, including specialist treatment.</p>
      <button className="custom__button" type='button' onClick={() => window.open(" https://wa.me/525624803291?text=Hi, I'd like to know more about your services", '_blank')}>Contact us</button>
    </div>


  </div>
);

export default Catchphase;
