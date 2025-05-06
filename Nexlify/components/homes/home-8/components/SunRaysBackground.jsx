import React from 'react';
import './sunrays.css';

const SunRaysBackground = ({ opacity = 0.75, className = '' }) => {
  return (
    <div 
      className={`sun-rays-container ${className}`}
      style={{ opacity }}
    >
      <div className="sun-ray ray-1"></div>
      <div className="sun-ray ray-2"></div>
      <div className="sun-ray ray-3"></div>
      <div className="sun-ray ray-4"></div>
      <div className="sun-ray ray-5"></div>
    </div>
  );
};

export default SunRaysBackground;