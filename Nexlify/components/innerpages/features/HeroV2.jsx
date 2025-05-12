"use client";
import { useParallax } from "react-scroll-parallax";
import React from "react";
import Image from "next/image";

export default function HeroV2() {
    const parallax = useParallax({
   translateY: [-60, 120],
    scale: [0.99,1],
    rotateX: [20, 0],
    rotateY: [-20, -20],
  });
  
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel pt-3">
        <div className="container max-w-xl">
                       <div
                  className="panel vstack justify-center items-center gap-2 max-w-600px lg:max-w-750px mx-auto px-2 lg:px-0 text-center  bg-section my-6 pt-6 pb-2"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                     <div className="border border-1 text-white d-flex flex-row items-center gap-1 justify-center rounded-pill w-fit">
                <span className="fw-medium fs-7 bg-primary rounded-pill px-1 m-narrow">Nexlify</span>
                  <span className="fw-medium fs-7 pe-2">Features</span>
             </div>
                  <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-3 m-0 text-white fw-medium">
                 <span className="opacity-40">The end of </span>
                    <br />
                scattered reports
                  </h1>
                </div>
        </div>
                 <div className="panel prespective pt-6" 
               data-anime="scale: [1.2, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 500;" >
                  <figure className="bg-blur-lg z-2 scroll-animation featured-image mt-8 mb-0 pb-0 px-1 rounded-2 lg:rounded-4  overflow-hidden  mx-auto position-relative"
                  style={{maxWidth: "1000px" }}
                  ref={parallax.ref}
                >
                    <Image
                      className="w-full h-full position-relative opacity-70"
                      alt="nexlify"
                      src="/assets/images/landing/home-6-dashboard.png"
                      fill
                    />
                  </figure>
                  
                </div>
                      <div className="gradient-black-spacer-lg"/>
      </div>
    </div>
  );
}
