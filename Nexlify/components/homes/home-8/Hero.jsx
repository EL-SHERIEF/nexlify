import Image from "next/image";
import React from "react";
import SunRaysBackground from './components/SunRaysBackground';

export default function Hero() {
  return (
    <div
      id="hero_header"
      className="hero-header section panel overflow-hidden"
    >
       <SunRaysBackground opacity={.5} />
      <div className="section-outer panel py-8 lg:py-9 xl:py-10">
        <div className="container">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center items-center g-8">
              <div className="lg:col-10">
                <div className="panel vstack gap-4 lg:gap-8">
                  <div className="panel vstack justify-center items-center gap-2 px-2 pt-4 text-center">
                    <span
                      className="fs-8 fw-medium custom-tag"
                      data-anime="translateY: [10, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: 250;"
                    >
                      POWERING THE NEXT BIG THING
                    </span>
                    <h1
                      className="h2 md:h1 lg:display-4 m-0 my-2 text-gray-500 fw-light lh-lg"
                      data-anime="translateY: [10, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: 250;"
                    >
                     Automate. Engage. Convert. Powered by AI.
                    </h1>
                    <p className="fs-6 xl:fs-5 max-w-sm px-2 text-black text-opacity-60"
                      data-uc-splitext="types: 'words'"
                      data-anime="targets: > *; translateX: [5, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: anime.stagger(50, {start:650});"
                    >
                      Streamline your workflows, boost productivity, and drive
                      growth with our cutting-edge SaaS platform.
                    </p>
                    <div className="hstack md:vstack justify-center items-center gap-2 lg:gap-4 my-1 lg:my-3"
                      data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 750;"
                    >
                      <a href="#" className="btn btn-md btn-primary border px-3 w-auto">
                        <span>Get Started</span>
                      </a>
                      <div className="hstack justify-center gap-1">
                      <div className="hstack justify-center gap-0">
                        <Image
                          className="w-40px box-style rounded-1-5 ltr:ms-n2 rtl:me-n2 border border-2 border-white"
                          alt="Avatar image"
                          src="/assets/images/avatars/01.jpg"
                          width="150"
                          height="150"
                        />
                        <Image
                          className="w-40px box-style rounded-1-5 ltr:ms-n2 rtl:me-n2 border border-2 border-white"
                          alt="Avatar image"
                          src="/assets/images/avatars/02.jpg"
                          width="150"
                          height="150"
                        />
                        <Image
                          className="w-40px box-style rounded-1-5 ltr:ms-n2 rtl:me-n2 border border-2 border-white"
                          alt="Avatar image"
                          src="/assets/images/avatars/03.jpg"
                          width="150"
                          height="150"
                        />
                      </div>
                      <span className="fs-8 fw-medium opacity-60 text-start">
                      Trusted by 30,000+
                      <br/> worldwide users
                      </span>
                    </div>
                    </div>
                    
              
                  </div>
                  <div
                    className="panel border shadow-lg rounded-3 p-1 overflow-hidden"
                    data-anime="translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: 950;"
                  >
                    <Image
                    className="rounded-2"
                      alt="Dashboard nexlify "
                      src="/assets/images/landing/home-4.png"
                      width={1353}
                      height={978}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
