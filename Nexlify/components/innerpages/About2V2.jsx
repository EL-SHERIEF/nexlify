'use client';
import React from "react";
import { useParallax } from "react-scroll-parallax";

export default function About2V2() {
      const parallax = useParallax({
      translateY: [5, -40],
    });
  return (
    <div
      id="about_us"
      className="about-us section panel overflow-hidden z-99"
      ref={parallax.ref}
      data-anime="onview: -100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
    >
      <div className="section-outer panel py-6  bg-black rounded-1-5 lg:rounded-3 max-w-md px-3 m-auto">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack text-start  pb-2"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 mb-4 text-white fw-light" >Nexlify Power</h2>
              <p className="fs-5 xl:fs-4 text-white opacity-50 fw-light">
              Teams leverage Nexlify to enhance AI-driven workflows, gain insights, and accelerate processes while delivering exceptional client experiences. Businesses rely on Nexlify’s comprehensive AI automation platform to streamline data analysis, predictive modeling, and decision-making. With robust AI tools and workflow capabilities, teams can offer clients a more professional, efficient, and engaging experience.
              </p>
              <p className="fs-5 xl:fs-4 text-white opacity-50 fw-light">
              In 2020, Sarah Thompson reclaimed valuable time, allowing us to focus on strategies that truly drive our company forward instead of scattering efforts aimlessly. Thus, Nexlify was born. Today, Nexlify enables teams to seamlessly connect with clients through tailored AI solutions crafted in minutes, fostering impactful relationships. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
