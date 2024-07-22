import React from 'react';
import '../styles/Skillcard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skillcard = ({ logo, title }) => {
  return (
    <div className="Skillcard">
      <FontAwesomeIcon icon={logo} className="skill-icon" />
      <div className="Skillcard-body">
        <h5 className="Skillcard-title">{title}</h5>
      </div>
    </div>
  );
}

export default Skillcard;
