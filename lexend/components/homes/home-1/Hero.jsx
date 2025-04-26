"use client";
import Brands from "@/components/common/Brands";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel">
      <div className="section-outer panel py-6 xl:py-9 pt-9 lg:pt-10">
  
        <div className="container max-w-xl">
          <div className="section-inner panel py-4">
            <div className="d-block position-absolute w-100 h-100 opacity-10"
                                  style={{zIndex: 0,objectFit: "cover",zIndex: 0,left:-300,top:-100,pointerEvents: "none",mask: "radial-gradient(28% 50% at 50% 50%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)"}}>
                <Image
                      className="d-block position-absolute w-100 h-100"
                      alt="Main hero image"
                      src="/assets/images/landing/hero-bg-3.png"
                      width="1280"
                      height="941"
                    />
            </div>
        
            <div className="row child-cols justify-center lg:justify-between items-center gy-4 sm:gy-6 gx-0 position-relative px-2" style={{zIndex: 2}}>
              <div className="col-12 sm:col-10 lg:col-5">
                <div
                  className="vstack gap-2 mt-2 sm:mt-4 lg:mt-0 sm:text-center lg:text-start rtl:lg:text-end"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <span className="fw-medium d-flex align-items-center px-2 py-1 text-primary  rounded-pill blur gap-1 border-1 border border-black shadow-sm d-flex justify-center items-center gap-2 bg-white" style={{width:"fit-content"}}>
                   <div className="glowing-circle"></div> AI SAAS Future
                  </span>
                  <h1 className="h2 sm:display-6 lg:display-4 xl:display-4 mb-1 xl:mb-2">
                  AI Solutions for
                     <span className="text-wow"> Modern </span>
                     Businesses.
                  </h1>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                 Our AI-driven solutions empowers you to easily streamline processes, personalize experiences, and stay ahead in this digital age.
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="row child-cols g-1 mt-1 sm:mt-2"
                  >
                    <div>
                      <input
                        className="form-control h-48px lg:h-56px w-full rounded-2"
                        type="text"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <div className="col-12 sm:col-auto">
                      <Link
                        href={`/page-pricing`}
                        className="btn btn-md rounded-2 h-48px lg:h-56px w-100 sm:min btn-primary text-white"
                      >
                        Get Started
                      </Link>
                    </div>
                  </form>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70 gap-1 d-flex align-items-center">
                  <svg className="text-primary" width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2.32803 6.01511 2.09185 7.22882 2.02572 9.25H21.9743C21.9082 7.22882 21.672 6.01511 20.8284 5.17157C19.6569 4 17.7712 4 14 4Z" fill="currentColor"></path> <path d="M10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 11.5581 22 11.142 21.9981 10.75H2.00189C2 11.142 2 11.5581 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z" fill="currentColor"></path> <path fillRule="evenodd" clipRule="evenodd" d="M5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16Z" fill="white"></path> <path fillRule="evenodd" clipRule="evenodd" d="M11.75 16C11.75 15.5858 12.0858 15.25 12.5 15.25H14C14.4142 15.25 14.75 15.5858 14.75 16C14.75 16.4142 14.4142 16.75 14 16.75H12.5C12.0858 16.75 11.75 16.4142 11.75 16Z" fill="white"></path> </g></svg>
                  No credit card required.
                  </p>
                </div>
              </div>
              <div className="col-12 lg:col-5 xl:col-4">
                <div
                  className="hero-scene panel rtl:me-6 rtl:ms-n6"
                  data-anime="targets: >*; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
                >
                  <div className="panel overflow-hidden gap-2 d-flex flex-row justify-center items-center py-2">
                   <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                   <Image
                      className="d-block h-250px  shadow-md border-1 border border-black"
                      alt="Main hero image"
                      src="/assets/images/landing/Hero-1-2.png"
                      style={{objectFit: "cover",borderRadius:"60px",width:"140px" }}
                      width="1280"
                      height="941"
                    />
                      <Image
                      className="d-block h-150px  shadow-md border-1 border border-black"
                      alt="Main hero image"
                      src="/assets/images/landing/hero-bg-2.jpg"
                      style={{objectFit: "cover",borderRadius:"60px",width:"140px" }}
                      width="1280"
                      height="941"
                    />
                   </div>
                   <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                   <Image
                      
                       className="d-block h-150px shadow-md border-1 border border-black"
                      alt="Main hero image"
                      src="/assets/images/landing/Hero-1-6.png"
                      style={{objectFit: "cover",borderRadius:"60px",width:"140px" }}
                      width="1280"
                      height="941"
                    />
                      <Image
                     className="d-block h-250px  shadow-md border-1 border border-black"
                      alt="Main hero image"
                      src="/assets/images/landing/Hero-1-5.png"
                      style={{objectFit: "cover",borderRadius:"60px",width:"140px" }}
                      width="1280"
                      height="941"
                    />
                   </div>
                   <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                   <Image
                      className="d-block h-250px  shadow-md border-1 border border-black"
                      alt="Main hero image"
                      src="/assets/images/landing/Hero-1-3.png"
                      style={{objectFit: "cover",borderRadius:"60px",width:"140px" }}
                      width="1280"
                      height="941"
                    />
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="brands panel overflow-hidden mt-4 sm:mt-6 lg:mt-8 opacity-50">
              <div
                className="block-panel panel"
                data-anime="opacity: [0, 1]; duration: 450; delay: 750;"
              >
                <div className="element-brands text-gray-900 dark:text-white">
                  <Brands />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
