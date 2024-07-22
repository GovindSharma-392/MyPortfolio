import React from 'react';
import '../styles/Hobbies.css';
import musicImg from '../img/music.jpeg';
import writingImg from '../img/writing.jpeg';
import Card from './Cards';

const Hobbies = () => {
  return (
    <section id="Hobbies" className="hobbies">
      <h2>Hobbies</h2>
      <div className="hobbies-container">
      <Card imgSrc={musicImg} title={"Music"}/>
      <Card imgSrc={writingImg} title={"Writing"}/>
      </div>
      
      {/* 
        <div className="hobby">
          <img src={musicImg} alt="Music" className="hobby-img" />
          <h5>Music</h5>
        </div>
        <div className="hobby">
          <img src={writingImg} alt="Writing" className="hobby-img" />
          <h5>Writing</h5>
        </div>
      </div> */}
    </section>
  );
}

export default Hobbies;
