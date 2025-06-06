import { features4 } from "@/data/features";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function KeyFeatures() {
  return (
    <div
    id="key_features"
    className="key-features section panel overflow-hidden border-top border-bottom border-1 border-black"
  >
    <div className="section-outer panel py-6 xl:py-9">
      <div className="container sm:max-w-lg xl:max-w-lg">
        <div className="section-inner panel">
          <div
            className="panel vstack items-center gap-4"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
                    <span className="fw-medium d-flex align-items-center pe-3 gap-2 d-flex flex-row items-center justify-center text-gray-800 rounded-pill m-auto border-1 border border-black-50 fw-medium " style={{width:'fit-content'}}>
                     <svg className="bg-primary bg-opacity-10 rounded-circle p-1 text-white" width={40} height={40}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.58 4.77604C12.2747 3.00516 12.6221 2.11971 13.3486 2.01056C14.075 1.90141 14.6994 2.64083 15.9483 4.11967L16.2714 4.50226C16.6263 4.9225 16.8037 5.13263 17.045 5.25261C17.2863 5.37259 17.564 5.38884 18.1196 5.42135L18.6254 5.45095C20.5803 5.56537 21.5578 5.62258 21.897 6.26168C22.2362 6.90079 21.7125 7.69853 20.6651 9.29403L20.3941 9.7068C20.0965 10.1602 19.9477 10.3869 19.9075 10.6457C19.8673 10.9045 19.9402 11.1662 20.0862 11.6895L20.219 12.166C20.7325 14.0076 20.9893 14.9284 20.4725 15.4325C19.9557 15.9367 19.0076 15.6903 17.1114 15.1975L16.6208 15.07C16.082 14.93 15.8125 14.86 15.5464 14.8999C15.2803 14.9399 15.0476 15.0854 14.5823 15.3763L14.1586 15.6412C12.521 16.6649 11.7022 17.1768 11.0436 16.8493C10.385 16.5217 10.3227 15.5717 10.1982 13.6717L10.166 13.1801C10.1306 12.6402 10.1129 12.3702 9.98865 12.1361C9.86439 11.902 9.64763 11.7302 9.2141 11.3867L8.81941 11.0739C7.2938 9.86506 6.531 9.26062 6.64075 8.55405C6.75051 7.84748 7.66013 7.50672 9.47939 6.8252L9.95005 6.64888C10.467 6.45522 10.7255 6.35839 10.9148 6.17371C11.1041 5.98903 11.2029 5.73742 11.4003 5.23419L11.58 4.77604Z" fill="#1C274C"></path> <path d="M5.31003 9.59277C2.87292 11.9213 1.27501 15.8058 2.33125 22.0002C3.27403 19.3966 5.85726 17.2407 8.91219 15.9528C8.80559 15.3601 8.7583 14.6364 8.70844 13.8733L8.66945 13.2782C8.66038 13.1397 8.65346 13.0347 8.64607 12.9443C8.643 12.9068 8.64012 12.8754 8.63743 12.8489C8.61421 12.829 8.58591 12.8053 8.55117 12.7769C8.47874 12.7177 8.39377 12.6503 8.28278 12.5623L7.80759 12.1858C7.11448 11.6368 6.46884 11.1254 6.02493 10.6538C5.77182 10.385 5.48876 10.0304 5.31003 9.59277Z" fill="#1C274C"></path> <path d="M10.3466 15.4231C10.3415 15.3857 10.3365 15.3475 10.3316 15.3086L10.3877 15.41C10.374 15.4144 10.3603 15.4187 10.3466 15.4231Z" fill="#1C274C"></path> </g></svg>
                            Key Features
                    </span>
            <h2 className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto mb-4">
            Drive <span className="text-wow">Business Growth </span> With AI
            </h2>
            <div className="panel">
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-5 xl:child-cols-4 items-center justify-center g-3"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {features4.map((feature, index) => (
                  <div key={index}>
                    <div
                      className={`feature-item panel p-4 rounded-3 bg-white overflow-hidden hover:bg-primary hover:text-white hover:scale-105 duration-150 transition-all card-home-3 ${feature.backgroundColor}`}
                    >
                      
                           <div className="blend-lighten-overlay position-absolute"  style={{width:'101%',height:"100%",left:0,top:0}}>
                           <Image
                                  style={{width:'100%',height:"100%",objectFit:"cover"}}
                                  alt=""
                                  src="/assets/images/template/cards.svg"
                                  width="800"
                                  className="blend-lighten"
                                  height="800"
                                />
                           </div>

                      <div className="vstack panel min-h-250px">
                        <div className="vstack items-center text-center justify-between gap-2 h-100">
                          <div className="cstack w-96px h-96px rounded-circle mt-2 bg-primary icon-home-3">
                            <i className={`icon icon-4 ${feature.icon} text-white`} />
                          </div>
                          <div className="panel">
                            <div className="vstack gap-1">
                              <h3 className="title h5 m-0 text-inherit">
                                {feature.title}
                              </h3>
                              <p className="desc fs-6 opacity-70">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href={`/page-features`}
              className="uc-link text-white py-1 px-3 shadow-sm bg-primary rounded-pill border border-1 border-black fw-bold d-inline-flex items-center gap-narrow mt-2"
              style={{
                transform: "translateY(0.0097341px)",
                opacity: "0.999797",
              }}
            >
              <span>Discover more</span>
              <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
