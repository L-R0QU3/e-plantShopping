import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="background-image"></div>
      <div className="overlay">
        <div className="content">
          <h1>Welcome to Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
          <Link to="/products">
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
        <AboutUs />
      </div>
    </div>
  );
};

export default Landing;