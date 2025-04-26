import Accordion from "@/components/common/Accordion";
import { accordionItems } from "@/data/faq";
import React from "react";

export default function Faq() {
  return (
    <div id="faq" className="section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div
              className="panel"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
                   <span className="fw-medium d-flex align-items-center px-2 py-1 text-primary  rounded-pill blur gap-1 m-auto mb-4 border-1 border border-black shadow-sm " style={{width:'fit-content'}}>
                   <svg width={20} height={20} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M5.5 5.5C5.5 4.11929 6.61929 3 8 3C9.38071 3 10.5 4.11929 10.5 5.5C10.5 6.88071 9.38071 8 8 8H7V11H8C11.0376 11 13.5 8.53757 13.5 5.5C13.5 2.46243 11.0376 0 8 0C4.96243 0 2.5 2.46243 2.5 5.5H5.5Z" fill="#000000"></path> <path d="M10 13H7V16H10V13Z" fill="#000000"></path> </g></svg>
                            FAQ
                    </span>
              <h2 className="h4 sm:h3 lg:h2 m-0 text-center">
                Got Questions? We've 
Got Answers!
              </h2>
              <div className="panel mt-4 sm:mt-6 lg:mt-8 p-3 lg:max-w-750px xl:w-auto m-auto">
                <ul
                  className="gap-1 uc-accordion"
                  data-uc-accordion="targets: > li;"
                >
                  <Accordion />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
