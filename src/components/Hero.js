import React from 'react';
import './Hero.scss';
import jennyPhoto from '../assets/jenny-photo.png';
import wave from '../assets/wave.svg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="subtitle">FULL STACK WEB DEVELOPER</p>
          <h1>Hello, my name is <span>Jenifer Gonçalves</span></h1>
          <p className="description">
            Short text with details about you, what you do or your professional career. 
            You can add more information on the about page.
          </p>
          <div className="hero-buttons">
            <a href="#projetos" className="btn btn-primary">Projects</a>
            <a href="https://linkedin.com" className="btn btn-secondary">LinkedIn</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={jennyPhoto} alt="Jenifer Gonçalves" />
          <img src={wave} alt="Wave background" className="wave" /> 
        </div>
      </div>
    </section>
  );
}

export default Hero;
