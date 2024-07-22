import React,{ useEffect, useRef } from 'react';
import '../styles/Card.css';

const Card = ({ imgSrc, title, link, discription }) => {
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
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="card" ref={cardRef}>
          <img src={imgSrc} className="card-img" alt={title} />
          <div className="card-body">
            <p>{discription}</p>
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </a>
    );
  }
export default Card;
