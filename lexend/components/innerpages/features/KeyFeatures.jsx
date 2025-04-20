import { features4 } from "@/data/features";
import React from "react";
import Link from "next/link";

export default function KeyFeatures() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 max-w-xl m-auto">
        <div className="container sm:max-w-md lg:max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4">
            <span className="fw-medium d-flex align-items-center px-2 py-1 text-primary  rounded-pill blur gap-1 m-auto border-1 border border-black shadow-sm " style={{width:'fit-content'}}>
            <svg width={20} height={20} viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4115 0.0996094L22.9317 3.08541V3.68891L14.3827 15.9815H13.7603L9.24012 12.9957V12.3922L13.7276 5.94411V3.78421L5.24412 15.9815H4.62172L0.101562 12.9957V12.3922L8.65062 0.0996094H9.27292L13.7603 3.05361H15.7256L17.7892 0.0996094H18.4115Z" fill="#3C77E2"/>
</svg>
                  Nexlify
                    </span>
              <h2
                className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto pb-4"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                Review quickly and confidently using
                <span className="text-primary"> nexlify.</span>
              </h2>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {features4.map((feature, index) => (
                    <div key={index}>
                      <div className="feature-item panel p-4 border rounded-2 hover:bg-white border-1 border border-black hover:shadow:xl shadow-sm hover:text-primary text-white  bg-primary hover:scale-105  duration-150 transition-all">
                        <div className="vstack panel min-h-250px">
                          <i className="position-absolute top-0 ltr:end-0 rtl:start-0 icon-2 unicon-arrow-up-right rtl:-rotate-90" />
                          <div className="vstack justify-between gap-2 h-100">
                            <div className="bg-white rounded-2 text-primary p-1" style={{width:"fit-content"}}>
                              <i className={`icon icon-4 ${feature.icon} `} />
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
                          <Link
                            href={`/page-features`}
                            className="position-cover"
                          ></Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
