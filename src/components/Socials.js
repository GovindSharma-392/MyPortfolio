import React from 'react';
import '../styles/Social.css';
import finalLogoImg from '../img/LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  return (
    <section id="Socials" className="socials">
      <h2>Socials</h2>
      <img src={finalLogoImg} alt="Social" className="social-img" />
      <p>Find me on various platforms for more updates!</p>
      
    </section>
  );
}

export default Socials;
