import React from 'react';
import '../styles/About.css';
import profileImg from '../img/IMG_20220819_103812_383.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';


const About = () => {
  return (
    <section id="About" className="about">
        <div className='aboutinfo'>
            <div className='imageadjust'>
                <img src={profileImg} alt="Govind Sharma" className="profile-img" />
            </div>
            <div className='Aboutme'>
                <h2>I'am Govind Sharma</h2>
                <p>
                A highly self-motivated Full Stack Developer, constantly driven by my passion for innovation and excellence in web development.                </p>
                <div className='social-media-icons'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                    </a>
                    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} className="social-icon" />
                    </a>
                </div>
            </div>
            
        </div>
      
      
    </section>
  );
}

export default About;
