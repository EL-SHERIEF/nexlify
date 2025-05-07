import React from 'react';
import Image from 'next/image';
import './sunrays.css';

const SunRaysBackground = ({ opacity = 0.75, className = '' }) => {
  return (
    <div 
      style={{ opacity }}
    >
      <div className="cloud-wrapper">
      <Image
      src={"/assets/images/landing/cloudy.png"}
      alt="clouds"
      layout="fill"
      objectFit="cover"
      className="clouds "
      />
      </div>
    <div 
      className={`sun-rays-container ${className}`}
    >
      <div className="sun-ray ray-1"></div>
      <div className="sun-ray ray-2"></div>
      <div className="sun-ray ray-3"></div>
      <div className="sun-ray ray-4"></div>
      <div className="sun-ray ray-5"></div>
    </div>
    </div>
  );
};

export default SunRaysBackground;