import React from 'react';
import '../styles/Experience.css';
import Mern_certificate  from '../img/mern certificate.pdf'

const Experience = () => {
  return (
    <section id="Experience" className="Experience">
      <div className='maindivEx'>
      <h2 className='textmargin'>Experience</h2>
      <h4 className='textmargin'>AppSquadz Software Pvt Ltd | MERN stack Intern</h4>
      <p>
      As a MERN Stack Intern, I gained hands-on experience in full-stack development by working extensively with MongoDB, Express.js, React.js, and Node.js. I contributed to the design and implementation of dynamic web applications, focusing on optimizing performance and ensuring seamless user experiences. My role involved collaborating with cross-functional teams, troubleshooting complex issues, and enhancing my skills in creating scalable, high-quality code. This internship was pivotal in deepening my understanding of modern web technologies and best practices, setting a strong foundation for my career in software development.      </p>
      <a href={Mern_certificate} target="_blank" rel="noopener noreferrer">
        <button className="aboutbtn">
          Certificate &rarr;
        </button>
      </a>
      </div>

    </section>
  );
}

export default Experience;
