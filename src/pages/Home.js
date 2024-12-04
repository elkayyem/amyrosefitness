import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import getImagePath from '../utils/imagePaths';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Unlock your <span className="italic">potential</span>,<br />
            <span className="italic">push</span> your limits,<br />
            <span className="italic">transform</span> your life.
          </h1>
          <Link to="/services" className="get-started-btn">
            Get started
          </Link>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-overlay"></div>
          <img src={getImagePath('hero-image.jpg')} alt="Fitness training" className="hero-image" />
        </div>
      </div>
      
      <div className="social-links">
        <a href="https://www.instagram.com/amyrosefitness__" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Home;
