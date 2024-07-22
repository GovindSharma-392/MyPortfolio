import React from 'react';
import '../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faHtml5, faCss3, faJs, faGithub, faNodeJs, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import Skillcard from './SkillCard';

const Skills = () => {
    
  return (
    <section id="Skills" className="Skills">
      <h2>Skills</h2>
      <p>Languages</p>
      <div className='Skillsbox'>
      <Skillcard logo={faJava} title="Java" />
      <Skillcard logo={faPython} title="Python" />      
    </div>
    <p>Back-end</p>
    <div className='Skillsbox'>
      <Skillcard logo={faJs} title="JavaScript" />
      <Skillcard logo={faNodeJs} title="Node.Js" />
      <Skillcard logo={faDatabase} title="MySQL" />
      <Skillcard logo={faDatabase} title="Mongodb" />
    </div>
    <p>Front-end</p>
    <div className='Skillsbox'>
      <Skillcard logo={faHtml5 } title="HTML" />
      <Skillcard logo={faCss3 } title="CSS" />
      <Skillcard logo={faReact} title="React.js" />
    </div>
    <p>Tools</p>
    <div className='Skillsbox'>
      <Skillcard logo={faGithub } title="Github" />
    </div>

    </section>
  );
}

export default Skills;
