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
      <div className="container sm:max-w-lg xl:max-w-xl">
        <div className="section-inner panel">
          <div
            className="panel vstack items-center gap-4"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
                    <span className="fw-medium d-flex align-items-center px-2 py-1 text-primary  rounded-pill blur gap-1 m-auto border-1 border border-black shadow-sm " style={{width:'fit-content'}}>
                   <svg width={20} height={20} fill="#000000" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.906 20.75c1.313 0.719 2.063 2 1.969 3.281-0.063 0.781-0.094 0.813-1.094 0.938-0.625 0.094-4.563 0.125-8.625 0.125-4.594 0-9.406-0.094-9.75-0.188-1.375-0.344-0.625-2.844 1.188-4.031 1.406-0.906 4.281-2.281 5.063-2.438 1.063-0.219 1.188-0.875 0-3-0.281-0.469-0.594-1.906-0.625-3.406-0.031-2.438 0.438-4.094 2.563-4.906 0.438-0.156 0.875-0.219 1.281-0.219 1.406 0 2.719 0.781 3.25 1.938 0.781 1.531 0.469 5.625-0.344 7.094-0.938 1.656-0.844 2.188 0.188 2.469 0.688 0.188 2.813 1.188 4.938 2.344zM3.906 19.813c-0.5 0.344-0.969 0.781-1.344 1.219-1.188 0-2.094-0.031-2.188-0.063-0.781-0.188-0.344-1.625 0.688-2.25 0.781-0.5 2.375-1.281 2.813-1.375 0.563-0.125 0.688-0.469 0-1.656-0.156-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.25-2.313 1.438-2.719 1-0.375 2.125 0.094 2.531 0.938 0.406 0.875 0.188 3.125-0.25 3.938-0.5 0.969-0.406 1.219 0.156 1.375 0.125 0.031 0.375 0.156 0.719 0.313-1.375 0.563-3.25 1.594-4.219 2.188zM24.469 18.625c0.75 0.406 1.156 1.094 1.094 1.813-0.031 0.438-0.031 0.469-0.594 0.531-0.156 0.031-0.875 0.063-1.813 0.063-0.406-0.531-0.969-1.031-1.656-1.375-1.281-0.75-2.844-1.563-4-2.063 0.313-0.125 0.594-0.219 0.719-0.25 0.594-0.125 0.688-0.469 0-1.656-0.125-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.219-2.313 1.406-2.719 1.031-0.375 2.156 0.094 2.531 0.938 0.406 0.875 0.25 3.125-0.188 3.938-0.5 0.969-0.438 1.219 0.094 1.375 0.375 0.125 1.563 0.688 2.75 1.313z"></path> </g></svg>
                            Testimonials
                    </span>
            <h2 className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto mb-4">
              Prevent costly mistakes
            </h2>
            <div className="panel">
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 xl:child-cols-3 items-center justify-center col-match g-3"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {features4.map((feature, index) => (
                  <div key={index}>
                    <div
                      className={`feature-item panel p-4 rounded-3 overflow-hidden hover:bg-primary hover:text-white hover:scale-105 duration-150 transition-all card-home-3 ${feature.backgroundColor}`}
                    >
                      
                           <div className="blend-lighten-overlay position-absolute"  style={{width:'101%',height:"100%",left:0,top:0}}>
                           <Image
                                  style={{width:'100%',height:"100%"}}
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
              <span>Discover all features</span>
              <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
