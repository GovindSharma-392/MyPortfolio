import React, { useEffect, useRef } from 'react';
import '../styles/Card.css';

const Card = ({ imgSrc, title, link, description, liveLink, githubLink }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
          } else {
            entry.target.classList.remove('card-visible');
          }
        });
      },
      { threshold: 0.1 } // Adjust this value if needed
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <img src={imgSrc} className="card-img" alt={title} />
      <div className="card-body">
        <div className='disc'><p>{description}</p></div>
        <h5 className="card-title">{title}</h5>
        <div className="card-buttons">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn">
              Live Link
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
