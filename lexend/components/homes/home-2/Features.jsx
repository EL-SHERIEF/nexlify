import { features } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div
      id="main_features"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 max-w-700px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
                 <span className="fw-medium d-flex align-items-center px-2 py-1 text-primary  rounded-pill blur gap-1 m-auto border-1 border border-black shadow-sm " style={{width:'fit-content'}}>
                   <svg  width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.45284 2.71266C7.8276 1.76244 9.1724 1.76245 9.54716 2.71267L10.7085 5.65732C10.8229 5.94743 11.0526 6.17707 11.3427 6.29148L14.2873 7.45284C15.2376 7.8276 15.2376 9.1724 14.2873 9.54716L11.3427 10.7085C11.0526 10.8229 10.8229 11.0526 10.7085 11.3427L9.54716 14.2873C9.1724 15.2376 7.8276 15.2376 7.45284 14.2873L6.29148 11.3427C6.17707 11.0526 5.94743 10.8229 5.65732 10.7085L2.71266 9.54716C1.76244 9.1724 1.76245 7.8276 2.71267 7.45284L5.65732 6.29148C5.94743 6.17707 6.17707 5.94743 6.29148 5.65732L7.45284 2.71266Z" fill="#1C274C"></path> <path opacity="0.5" d="M16.9245 13.3916C17.1305 12.8695 17.8695 12.8695 18.0755 13.3916L18.9761 15.6753C19.039 15.8348 19.1652 15.961 19.3247 16.0239L21.6084 16.9245C22.1305 17.1305 22.1305 17.8695 21.6084 18.0755L19.3247 18.9761C19.1652 19.039 19.039 19.1652 18.9761 19.3247L18.0755 21.6084C17.8695 22.1305 17.1305 22.1305 16.9245 21.6084L16.0239 19.3247C15.961 19.1652 15.8348 19.039 15.6753 18.9761L13.3916 18.0755C12.8695 17.8695 12.8695 17.1305 13.3916 16.9245L15.6753 16.0239C15.8348 15.961 15.961 15.8348 16.0239 15.6753L16.9245 13.3916Z" fill="#1C274C"></path> </g></svg>
                            Features
                    </span>
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Smart features for your business
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                We focus on helping you to make useful content more accessible
                with an utlimate goal for a good sharing profit as a content
                creator.
              </p>
            </div>
            <div className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2">
              {features.map((feature, index) => (
                <div key={index}>
                  <div
                    className="feature-item panel px-3  py-3 rounded-3 shadow-sm border-1 border border-black"
                    data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                  >
                    <div className="vstack gap-4 h-100">
                      <div className="panel w-100 rounded-2 overflow-hidden border-1 border-black border">
                        <Image
                          src={feature.imgSrc}
                          width={780}
                          height={728}
                          alt={feature.imgAlt}
                        />
                      </div>
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100">
                          <div>
                            <div className="panel vstack gap-2">
                              <h3 className="h4 m-0">{feature.title}</h3>
                              <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                {feature.description}
                              </p>
                              {feature.linkText && (
                                <a
                                  href={feature.linkHref}
                                  className="uc-link text-white py-1 px-3 shadow-sm bg-primary rounded-2 border border-1 border-black fw-bold d-inline-flex items-center gap-narrow mt-2"
                                  style={{width: "fit-content"}}
                                >
                                  <span>{feature.linkText}</span>
                                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
