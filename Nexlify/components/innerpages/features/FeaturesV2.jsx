'use client';
import React from "react";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
export default function FeaturesV2() {
      const parallax = useParallax({
   translateY: [-5, 20],
  });
       const parallax2 = useParallax({
           translateY: [20, -20],
        scale: [1, 1.1],
  });
  return (
    <div id="features" className="features section panel scrollSpysection bg-section">
      <div className="section-outer panel py-2 ">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
               <div
                  className="panel vstack justify-center gap-1 items-center max-w-600px lg:max-w-750px mx-auto px-2 lg:px-0 text-center pb-6" data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
               <h2 className="h4 sm:h3 lg:h2 m-0 text-center fw-light text-white">
              Beyond standard analytics
              </h2>
                 <p className="fs-5 xl:fs-4 fw-light text-white text-center  opacity-50 py-narrow">
                  We make data accessible and actionable for teams of all sizes.
                  </p>
                </div>
            <div className="row child-cols-12 lg:child-cols-5 col-match g-4">
              <div className="lg:col-7">
                <div
                  className="panel overflow-hidden bg-primary prespective  justify-between d-flex flex-column text-white rounded-1-5 lg:rounded-3 position-relative"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 0;"
                >
                  <div
                    className="panel vstack items-start gap-2 p-2 lg:p-3 xl:p-4"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                 <div className="border border-1 text-white d-flex flex-row items-center gap-1 justify-center rounded-pill w-fit bg-black">
                <span className="fw-medium fs-7 bg-primary rounded-pill px-1 m-narrow">Nexlify</span>
                  <span className="fw-medium fs-7 pe-2">Features</span>
             </div>
                    <h2 className="fs-6 md:fs-5 lg:fs-3 m-0 fw-light text-opacity-70">
                      Real-time data processing
                    </h2>
                    <p className="fs-7 md:fs-6 lg:fs-5 m-0  text-opacity-70">
                      Intuitive interface Drag-and-Drop for building pages by
                      dragging and dropping elements.
                    </p>
                  </div>
                  <div className="panel ltr:ps-3 ltr:lg:ps-4 ltr:xl:ps-6 rtl:pe-3 rtl:lg:pe-4 rtl:xl:pe-6" ref={parallax.ref}>
                    <Image
                      className="ltr:rounded-top-start-1-5 rtl:rounded-top-end-1-5"
                      style={{ objectFit: "cover" }}
                      alt="dashboard"
                      src="/assets/images/landing/home-6-dashboard.png"
                      width="1280"
                      height="837"
                    />
                  </div>
                </div>
              </div>
                     <div
                  className="panel overflow-hidden box-home-6 prespective justify-between d-flex flex-column text-white rounded-0 lg:rounded-3 position-relative"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 0;"
                >
                  <div
                    className="panel vstack items-start gap-2 p-2 lg:p-3 xl:p-4"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                 <div className="border border-1 text-white d-flex flex-row items-center gap-1 justify-center rounded-pill w-fit bg-black">
                <span className="fw-medium fs-7 bg-primary rounded-pill px-1 m-narrow">Nexlify</span>
                  <span className="fw-medium fs-7 pe-2">Features</span>
             </div>
                    <h2 className="fs-6 md:fs-5 lg:fs-3 m-0 fw-light text-opacity-70">
                      Real-time data processing
                    </h2>
                    <p className="fs-7 md:fs-6 lg:fs-5 m-0  text-opacity-70">
                      Intuitive interface Drag-and-Drop for building pages by
                      dragging and dropping elements.
                    </p>
                  </div>
                  <div className="panel ltr:ps-3 ltr:lg:ps-4 ltr:xl:ps-6 rtl:pe-3 rtl:lg:pe-4 rtl:xl:pe-6 mt-4" ref={parallax2.ref}>
                    <Image
                      className="ltr:rounded-top-start-1-5 rtl:rounded-top-end-1-5"
                      style={{ objectFit: "cover" }}
                      alt="dashboard"
                      src="/assets/images/landing/home-6-dashboard.png"
                      width="1280"
                      height="837"
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
