import React from 'react';
import '../styles/ContactDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faGithub,faXTwitter } from '@fortawesome/free-brands-svg-icons';


const ContactDetails = () => {
  return (
    <section id="Links" className="contact-details">
      <h2>Contact Details</h2>
      <p>Email: <a href="mailto:govindumeshsharma@gmail.com">govindumeshsharma@gmail.com</a></p>
      <p>Linkdin: <a href="https://www.linkedin.com/in/govind-sharma-b44300232/">https://www.linkedin.com/in/govind-sharma-b44300232/</a></p>
      <p>Phone: <a href="tel:+91-9528246962">+91-9528246962</a></p>
      <div className='social-media-icons'>
                    <a href="https://www.facebook.com/govindumeshsharma" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                    </a>
                    <a href="https://x.com/GovindSharma392?t=deuYCtuYvclhQ35Br516aQ&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
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
                <div className='lastdiv'>
                    <h5 className='h5'>Developed By: Govind Sharma</h5>
                    </div>
    </section>
  );
}

export default ContactDetails;
