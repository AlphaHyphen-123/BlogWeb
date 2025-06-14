import React from 'react';
import img from '../assets/img.jpeg'; // Make sure the path is correct
//import './HeroSection.css'; // Optional for extra styles

function HeroSection() {
  return (
    <section
      className="hero d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh'
      }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold">Welcome to Blogify</h1>
        <p className="lead">Share your stories. Inspire the world.</p>
        <a href="#get-started" className="btn btn-warning btn-lg mt-3">Get Started</a>
      </div>
    </section>
  );
}

export default HeroSection;
