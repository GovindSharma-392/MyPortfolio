import React from 'react';
import '../styles/Education.css';
import Resume from '../img/Govind_Resume.pdf'

const Education = () => {
  return (
    <section id="Education" className="education">
      <div className='maindiv' > 
      <h2>Vision And Goals</h2>
      <p>
        As a dedicated Full-Stack Developer, my ambition is to leverage technology to craft innovative and impactful digital solutions. I envision a future where my expertise in both front-end and back-end development bridges gaps between user needs and cutting-edge technologies, creating seamless and intuitive experiences. I strive to be at the forefront of technological advancements, continuously learning and adapting to new challenges. My goal is to build scalable, efficient, and elegant systems that not only meet current demands but also anticipate future needs, driving progress and transformation in the tech industry. Through collaboration, creativity, and a relentless pursuit of excellence, I aim to contribute to projects that push boundaries and make a meaningful difference in the world.
      </p>
      <a href={Resume} target="_blank" rel="noopener noreferrer">
        <button className="aboutbtn">
          My Resume &rarr;
        </button>
      </a>
      </div>
    </section>
  );
}

export default Education;
