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
                       placeholder="blur"
                      blurDataURL="/assets/images/landing/hero-bg-3.png"
                      priority
                      quality={20}
                      width="180"
                      height="141"
                    />
            </div>
        
            <div className="row child-cols justify-center lg:justify-between items-center gy-4 sm:gy-6 gx-0 position-relative px-2" style={{zIndex: 2}}>
              <div className="col-12 sm:col-10 lg:col-5">
                <div
                  className="vstack gap-2 mt-2 sm:mt-4 lg:mt-0 sm:text-center lg:text-start items-center sm:items-start d-flex justify-center lg:justify-start lg:justify-start lg:items-start"
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
                  <p className="fs-7 text-dark dark:text-white text-opacity-70 gap-1 d-flex align-items-center ">
                  <svg  className="text-primary" width={20} height={20} viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g> <path  d="M440.917,67.925H71.083C31.827,67.925,0,99.752,0,139.008v233.984c0,39.256,31.827,71.083,71.083,71.083 h369.834c39.255,0,71.083-31.827,71.083-71.083V139.008C512,99.752,480.172,67.925,440.917,67.925z M178.166,321.72l-99.54,84.92 c-7.021,5.992-17.576,5.159-23.567-1.869c-5.992-7.021-5.159-17.576,1.87-23.567l99.54-84.92c7.02-5.992,17.574-5.159,23.566,1.87 C186.027,305.174,185.194,315.729,178.166,321.72z M256,289.436c-13.314-0.033-26.22-4.457-36.31-13.183l0.008,0.008l-0.032-0.024 c0.008,0.008,0.017,0.008,0.024,0.016L66.962,143.694c-6.98-6.058-7.723-16.612-1.674-23.583c6.057-6.98,16.612-7.723,23.582-1.674 l152.771,132.592c3.265,2.906,8.645,5.004,14.359,4.971c5.706,0.017,10.995-2.024,14.44-5.028l0.074-0.065l152.615-132.469 c6.971-6.049,17.526-5.306,23.583,1.674c6.048,6.97,5.306,17.525-1.674,23.583l-152.77,132.599 C282.211,284.929,269.322,289.419,256,289.436z M456.948,404.771c-5.992,7.028-16.547,7.861-23.566,1.869l-99.54-84.92 c-7.028-5.992-7.861-16.546-1.869-23.566c5.991-7.029,16.546-7.861,23.566-1.87l99.54,84.92 C462.107,387.195,462.94,397.75,456.948,404.771z"></path> </g> </g></svg>
                    We don't share your email address
                  </p>
                </div>
              </div>
              <div className="col-12 lg:col-5 xl:col-4">
                <div
                  className="hero-scene panel rtl:me-6 rtl:ms-n6"
                >
                  <div className="panel overflow-hidden gap-2 d-flex flex-row justify-center items-center py-2">
                   <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                   <Image
                      className="d-block h-250px  shadow-md border-1 border border-black"
                      alt="Main hero image"
                      src="/assets/images/landing/Hero-1-6.webp"
                      style={{objectFit: "cover",borderRadius:"60px",width:"140px" }}
                       placeholder="blur"
                      blurDataURL="/assets/images/landing/hero-bg-3.png"
                      priority
                      quality={20}
                      width="100"
                      height="101"
                    />
                      <Image
                      className="d-block h-150px shadow-md border-1 border border-black"
                      alt="Main hero image"
                      src="/assets/images/landing/Hero-1-8.webp"
                      style={{objectFit: "cover",borderRadius:"60px",width:"140px" }}
                       placeholder="blur"
                      blurDataURL="/assets/images/landing/hero-bg-3.png"
                      priority
                      quality={20}
                      width="180"
                      height="141"
                    />
                   </div>
                   <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                   <Image
                      
                       className="d-block h-150px shadow-md border-1 border border-black"
                      alt="Main hero image"
                      src="/assets/images/landing/Hero-1-14.webp"
                      style={{objectFit: "cover",borderRadius:"60px",width:"140px" }}
                       placeholder="blur"
                      blurDataURL="/assets/images/landing/hero-bg-3.png"
                      priority
                      quality={80}
                      width="180"
                      height="141"
                    />
                      <Image
                     className="d-block h-250px  shadow-md border-1 border border-black"
                      alt="Main hero image"
                      src="/assets/images/landing/Hero-1-10.webp"
                      style={{objectFit: "cover",borderRadius:"60px",width:"140px" }}
                       placeholder="blur"
                      blurDataURL="/assets/images/landing/hero-bg-3.png"
                      priority
                      quality={20}
                      width="100"
                      height="100"
                    />
                   </div>
                   <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                   <Image
                      className="d-block h-250px  shadow-md border-1 border border-black"
                      alt="Main hero image"
                      src="/assets/images/landing/Hero-1-11.webp"
                      style={{objectFit: "cover",borderRadius:"60px",width:"140px" }}
                       placeholder="blur"
                      blurDataURL="/assets/images/landing/hero-bg-3.png"
                      priority
                      quality={20}
                      width="180"
                      height="100"
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
