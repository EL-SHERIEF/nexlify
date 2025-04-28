import { integrations } from "@/data/integrations";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/assets/images/landing/hero-bg-2.jpg";

export default function Integrations() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel pt-9 lg:pt-8 pb-4 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
                <div className="my-2 vstack items-center gap-2 lg:gap-4  mb-2 mx-auto text-center text-white py-4 sm:py-6 lg:py-8"
                                                         style={{
                                                          width: '100%',
                                                          borderRadius: '20px',
                                                          backgroundImage: `url(${bg.src})`,
                                                          backgroundSize: 'cover',
                                                          backgroundPosition: 'start center',
                                                          backgroundRepeat: 'no-repeat',
                                                        }}>
                                                               <span className="fw-medium d-flex align-items-center px-2 py-1 bg-white bg-opacity-10 rounded-pill blur gap-1 m-0" style={{border:'solid 1px rgba(255, 255, 255, 0.38)'}}>
                                                               <svg width={20} height={20}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C10.4003 22 8.88837 21.6244 7.54753 20.9565C7.19121 20.7791 6.78393 20.72 6.39939 20.8229L4.17335 21.4185C3.20701 21.677 2.32295 20.793 2.58151 19.8267L3.17712 17.6006C3.28001 17.2161 3.22094 16.8088 3.04346 16.4525C2.37562 15.1116 2 13.5997 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7.5 11.1084C7.5 12.4768 8.81884 13.9126 10.0286 14.9417C10.8524 15.6426 11.2644 15.9931 12 15.9931C12.7356 15.9931 13.1476 15.6426 13.9714 14.9417C15.1812 13.9126 16.5 12.4768 16.5 11.1084C16.5 8.43124 14.0249 7.43172 12 9.4998C9.97507 7.43172 7.5 8.43124 7.5 11.1084Z" fill="#1C274C"></path> </g></svg>
                                             Integrations
                                </span>
                          <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0 text-inherit">
                          Our Integrations 
                          </h1>
                          <p className="fs-6 md:fs-5 text-inherit text-opacity-70 max-w-lg pb-4 px-4">
                          Boost your efficiency with integrations that will simplify your workflow.                          </p>
                        </div>
            <div className="panel">
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {integrations.map((integration, index) => (
                  <div key={index}>
                    <div className="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border">
                      <div className="vstack gap-3">
                        <div className="hstack justify-between items-center">
                          <div className="vstack">
                            <h5 className="h5 m-0 text-dark">
                              {integration.name}
                            </h5>
                            <span className="fs-7 opacity-70 dark:opacity-80">
                              {integration.category}
                            </span>
                          </div>
                          <Image
                            className="w-32px lg:w-40px"
                            src={integration.imageUrl}
                            width={40}
                            height={40}
                            alt={integration.imageAlt}
                          />
                        </div>
                        <p className="fs-6 opacity-70 dark:opacity-80">
                          {integration.description}
                        </p>
                      </div>
                      <Link
                        href={`/page-integrations`}
                        className="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow"
                      >
                        <span>Learn more</span>
                        <i className="icon icon-narrow unicon-arrow-right rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
