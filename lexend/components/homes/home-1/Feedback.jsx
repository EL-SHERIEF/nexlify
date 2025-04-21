import { testimonials2 } from "@/data/testimonials";
import React from "react";
import Image from "next/image";

export default function Feedback() {
  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden my-4"
    >
      <div className="section-outer panel pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
                   <span className="fw-medium d-flex align-items-center px-2 py-1 text-primary  rounded-pill blur gap-1 m-auto border-1 border border-black shadow-sm " style={{width:'fit-content'}}>
                   <svg width={20} height={20} fill="#000000" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.906 20.75c1.313 0.719 2.063 2 1.969 3.281-0.063 0.781-0.094 0.813-1.094 0.938-0.625 0.094-4.563 0.125-8.625 0.125-4.594 0-9.406-0.094-9.75-0.188-1.375-0.344-0.625-2.844 1.188-4.031 1.406-0.906 4.281-2.281 5.063-2.438 1.063-0.219 1.188-0.875 0-3-0.281-0.469-0.594-1.906-0.625-3.406-0.031-2.438 0.438-4.094 2.563-4.906 0.438-0.156 0.875-0.219 1.281-0.219 1.406 0 2.719 0.781 3.25 1.938 0.781 1.531 0.469 5.625-0.344 7.094-0.938 1.656-0.844 2.188 0.188 2.469 0.688 0.188 2.813 1.188 4.938 2.344zM3.906 19.813c-0.5 0.344-0.969 0.781-1.344 1.219-1.188 0-2.094-0.031-2.188-0.063-0.781-0.188-0.344-1.625 0.688-2.25 0.781-0.5 2.375-1.281 2.813-1.375 0.563-0.125 0.688-0.469 0-1.656-0.156-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.25-2.313 1.438-2.719 1-0.375 2.125 0.094 2.531 0.938 0.406 0.875 0.188 3.125-0.25 3.938-0.5 0.969-0.406 1.219 0.156 1.375 0.125 0.031 0.375 0.156 0.719 0.313-1.375 0.563-3.25 1.594-4.219 2.188zM24.469 18.625c0.75 0.406 1.156 1.094 1.094 1.813-0.031 0.438-0.031 0.469-0.594 0.531-0.156 0.031-0.875 0.063-1.813 0.063-0.406-0.531-0.969-1.031-1.656-1.375-1.281-0.75-2.844-1.563-4-2.063 0.313-0.125 0.594-0.219 0.719-0.25 0.594-0.125 0.688-0.469 0-1.656-0.125-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.219-2.313 1.406-2.719 1.031-0.375 2.156 0.094 2.531 0.938 0.406 0.875 0.25 3.125-0.188 3.938-0.5 0.969-0.438 1.219 0.094 1.375 0.375 0.125 1.563 0.688 2.75 1.313z"></path> </g></svg>
                            Testimonials
                    </span>
              <h2 className="h4 sm:h3 lg:h2 m-0 text-center  mb-2 sm:mb-0 ">
                Don’t just take our words
              </h2>
              <div
                className="row child-cols-12 sm:child-cols-6 col-match g-2 lg:g-3 uc-grid"
                data-uc-grid=""
              >
                {testimonials2.map((item, index) => (
                  <div key={index} className="uc-grid-margin my-1 px-1 uc-first-column">
                    <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border shadow-sm">
                      <div className="panel vstack items-start gap-2">
                        <div className="panel">
                          <div className="hstack h-48px">
                            <Image
                              className="w-128px text-gray-900 dark:text-white image-filter"
                              src={item.brandImg}
                              alt="Brand"
                              width={170}
                              height={48}
                              data-uc-svg=""
                            />
                          </div>
                        </div>
                        <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                          {item.testimonial}
                        </p>
                      </div>
                      <div className="panel hstack gap-2 mt-2 lg:mt-4">
                        <Image
                          className="w-40px h-40px rounded-circle"
                          src={item.authorImg}
                          alt={item.authorName}
                          width={150}
                          height={150}
                        />
                        <div className="panel vstack items-start gap-0">
                          <h6 className="h6 m-0">{item.authorName}</h6>
                          <span className="fs-7 opacity-70">
                            {item.authorRole}
                          </span>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="uc-link text-white py-1 px-3 shadow-sm bg-primary rounded-2 border border-1 border-black fw-bold d-inline-flex items-center gap-narrow mt-2"
                style={{
                  transform: "translateY(0.0097341px)",
                  opacity: "0.999797",
                }}
              >
                <span>See all feedbacks</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
