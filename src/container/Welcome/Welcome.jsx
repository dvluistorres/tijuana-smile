import React from 'react';
import { images } from '../../constants'

import './Welcome.css';

const Welcome = () => (
  <div className="app__welcome app__wrapper section__padding" id="WELCOME">
    <div className="app__wrapper_info" style={{ backgroundImage: `url(${images.welcome2})` }}>
      
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Smile,</p>
        </div>
        <p className="p__opensans">the world is looking at you</p>
        <p className="p__opensans">___________________________</p>
      </div>

      <div className="app__chef-sign">
        <img src={images.sign} alt='sign' />
        <p className="p__opensans">Designer dentist</p>
      </div>
    </div>

    <div className="app__wrapper_info">
      <h1 className="app__welcome-h1">Welcome to Our Practice</h1>
      <p className="app__welcome-p p__opensans" style={{ margin: '0.5rem 0'}}>Our team of friendly doctors provide all the dental services you may need, including specialist treatment.</p>
      <p className="app__welcome-p p__opensans" style={{ margin: '0.5rem 0'}}>They are highly trained and experienced in their respective fields of dentistry and continue to stay up to date on the latest developments with regular continuing education courses.</p>
      <p className="app__welcome-p p__opensans" style={{ margin: '0.5rem 0'}}>Our doctors are very personable and will treat you like members of their family. They take a personal interest in  helping you achieve your oral health and smile goals. Our practice is all about making sure our patients get the dental work they need in the most affordable and comfortable way possible. We are open late during the week and also Saturdays for your convenience.</p>      
      <button className="custom__button" type='button' onClick={() => window.open(" https://wa.me/525624803291?text=Hi, I'd like to know more about your services", '_blank')}>Contact us</button>
    </div>

  </div>
);

export default Welcome;
