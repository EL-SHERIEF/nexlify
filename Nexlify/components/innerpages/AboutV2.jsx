'use client'
import React from "react";
import Image from "next/image";
import bg from "@/public/assets/images/landing/hero-bg-2.webp";
import Link from "next/link";
import { useParallax } from "react-scroll-parallax";

export default function AboutV2() {
    const parallax = useParallax({
    translateY: [0, 30],
  });
  return (

    <div id="hero_header" className="hero-header section panel overflow-hidden">
 
      <div className="section-outer panel pt-9 lg:pt-8">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0 overflow-hidden rounded-1-5 lg:rounded-3"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
                  <div
                  className="panel vstack justify-center items-center gap-2 max-w-600px lg:max-w-750px mx-auto px-2 lg:px-0 text-center  bg-section my-6 pt-6 pb-2"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                     <div className="border border-1 text-white d-flex flex-row items-center gap-1 justify-center rounded-pill w-fit">
                <span className="fw-medium fs-7 bg-primary rounded-pill px-1 m-narrow">About</span>
                  <span className="fw-medium fs-7 pe-2">Nexlify</span>
             </div>
                  <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-3 m-0 text-white fw-medium">
                 <span className="opacity-40"> The story</span>
                    <br />
                  behind Nexlify
                  </h1>
                </div>
            <div className="panel row child-cols-12 col-match g-1 sm:g-2"
             ref={parallax.ref}>
              <div className="col-4">
                <figure className="featured-image m-0 rounded-3 ratio ratio-2x3 uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="About image"
                    src="/assets/images/template/hero-about-01.jpg"
                    width="1000"
                    height="1500"
                  />
                </figure>
      
              </div>
              <div className="col-8">
                <div className="h-100">
                  <figure className="panel h-100 m-0 rounded-3 overflow-hidden">
                    <canvas className="h-100 w-100" />
                    <Image
                      className="media-cover image"
                      alt="About image"
                      src="/assets/images/template/hero-about-02.jpg"
                      width="1000"
                      height="667"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
