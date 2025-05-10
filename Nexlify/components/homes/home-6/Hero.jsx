"use client";

import Brands from "./Brands";
import Link from "next/link";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
export default function Hero() {
  const parallax = useParallax({
    translateY: [10, 30],
  });
  
  return (
    <>
    <div
      id="overview"
      className="overview section panel overflow-hidden scrollSpysection bg-section"
    >
      <div className="section-outer panel pt-9">
        <div className="container xl:max-w-xl pt-4">
          <div className="section-inner panel pt-3 ">
            <div className="row child-cols-12 justify-center items-center g-6 xl:g-8">
              <div>
                <div
                  className="panel vstack justify-center items-center gap-3 max-w-500px pt-4 mx-auto px-2 lg:px-0 text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
             
                  <h1 className="h1 sm:display-5 md:display-4 lg:display-4 xl:display-3 mb-1 text-white">
                  <span className="opacity-40">Turn data</span>{' '} 
                  <br/>
                  into decisions
                  </h1>
                  <p className="fs-5 fw-light text-white opacity-50">
                  Powerful analytics and reporting that empowers your team to make smarter business choices.
                  </p>
                  <Link
                    href={`/page-pricing`}
                    className="btn btn-md btn-secondary text-black min-w-150px px-narrow mt-narrow gap-0 items-center d-flex justify-center"
                  >
                    <span className="px-3-narrow">Book A Free Demo</span>
                     <div className=" bg-black text-white rounded-2  ltr:ms-narrow rtl:rotate-180 d-flex justify-center items-center"
                     style={{width:"50px",height:"40px"}}>
                     <i className="icon icon-narrow unicon-arrow-right fw-bold" />
                     </div>       
                   </Link>
                </div>
              </div>
            </div>
            <div className="panel prespective mt-6 pt-6" 
               data-anime="scale: [1.2, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 500;" >
                  <figure className="bg-blur-lg z-2 scroll-animation featured-image mt-8 mb-0 pb-0 px-1 rounded-2 lg:rounded-4  overflow-hidden  mx-auto position-relative"
                  style={{maxWidth: "1400px" }}
                >
                    <Image
                      className="w-full h-full position-relative opacity-70"
                      alt="nexlify"
                      src="/assets/images/landing/home-6-dashboard.png"
                      fill
                    />
                  </figure>
                  <figure className="scroll-animation featured-image m-0 mx-auto position-absolute mx-auto"
                   ref={parallax.ref}
                  style={{maxWidth: "1000px",top: "-100px",left: "50px" }}>
                    <Image
                      className="w-full h-full position-relative opacity-70"
                      alt="nexlify"
                      src="/assets/images/landing/home-6-chips.webp"
                      fill
                    />
                  </figure>
                </div>
          </div>
        </div>
      </div>
      <div className="gradient-black-spacer"/>
    </div>
</>
  );
}
