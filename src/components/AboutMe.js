import React from 'react';
import '../styles/About.css';
import profileImg from '../img/IMG_20220819_103812_383.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Typewriter from 'typewriter-effect';



const About = () => {
  return (
    <section id="About" className="about">
        <div className='aboutinfo'>
            <div className='imageadjust'>
                <img src={profileImg} alt="Govind Sharma" className="profile-img" />
            </div>
            <div className='Aboutme'>
                <h2>I'am Govind Sharma</h2>
                <div className='designation' >
                <Typewriter
            options={{
              strings: [
                "MERN Stack Developer",
                "Full Stack Developer",
                "Software Developer",
                "Freelancer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
            }}
          />
                </div>
                <p className='define'>
                A highly self-motivated Full Stack Developer, constantly driven by my passion for innovation and excellence in web development.                </p>
                <div className='social-media-icons'>
                    <a href="https://www.facebook.com/govindumeshsharma" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                    </a>
                    <a href="https://x.com/GovindSharma392?t=Y0_7Ur1fHjRRak3M2vxlmA&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/govind-sharma-b44300232/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/Govindsharma392" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                    </a>
                    <a href="https://github.com/GovindSharma-392" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} className="social-icon" />
                    </a>
                </div>
            </div>
            
        </div>
      
      
    </section>
  );
}

export default About;
