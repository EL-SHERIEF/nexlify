"use client";
import Link from "next/link";
import Image from "next/image";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel overflow-hidden">
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
      <div className="section-outer panel">
        <div className="container max-w-xl">
          <div className="section-inner panel rounded xl:rounded-2 py-4 sm:py-6 xl:py-9">

            <div
              className="vstack items-center gap-2 max-w-400px lg:max-w-600px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 sm:h1 xl:display-6 m-0">
                Get started with <br />
                nexlify today
              </h2>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">
                With native CRM integrations that streamline your entire Tool
                workflow.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="row child-cols g-1 w-100 lg:w-5/6 mt-1 lg:mt-2"
              >
                <div>
                  <input
                    className="form-control h-48px lg:h-56px rounded-2"
                    type="text"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div className="col-12 sm:col-auto">
                  <Link
                    href={`/page-pricing`}
                    className="btn btn-md h-48px lg:h-56px w-100 sm:min-w-150px btn-primary text-white rounded-2"
                  >
                    Start free trial
                  </Link>
                </div>
              </form>
              <p className="fs-7 text-dark dark:text-white text-opacity-70 gap-1 d-flex align-items-center">
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2.32803 6.01511 2.09185 7.22882 2.02572 9.25H21.9743C21.9082 7.22882 21.672 6.01511 20.8284 5.17157C19.6569 4 17.7712 4 14 4Z" fill="#1C274C"></path> <path d="M10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 11.5581 22 11.142 21.9981 10.75H2.00189C2 11.142 2 11.5581 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z" fill="#1C274C"></path> <path fillRule="evenodd" clipRule="evenodd" d="M5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16Z" fill="white"></path> <path fillRule="evenodd" clipRule="evenodd" d="M11.75 16C11.75 15.5858 12.0858 15.25 12.5 15.25H14C14.4142 15.25 14.75 15.5858 14.75 16C14.75 16.4142 14.4142 16.75 14 16.75H12.5C12.0858 16.75 11.75 16.4142 11.75 16Z" fill="white"></path> </g></svg>
                  No credit card required.
                  </p>
            </div>
          </div>
          <hr className="w-100 m-0" />
        </div>
      </div>
    </div>
  );
}
