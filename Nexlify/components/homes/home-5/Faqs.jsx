import Accordion from "@/components/common/Accordion";
import React from "react";

export default function Faqs() {
  return (
    <div id="faq" className="faq section panel mb-6 pb-5">
      <div className="section-outer panel">
        <div className="container lg:max-w-xl lg:rounded-3 rounded-2  bg-box text-gray-500 box-style py-10">
          <div
            className="section-inner panel"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="row child-cols-12 col-match g-4">
                <div className="vstack items-center text-center gap-2 mb-2">
                <span className="custom-tag-sm mb-2">Your Queries, Simplified</span>
                <h2 className="h1 fw-light m-0 text-inherit ls-1 text-dark">
                Questions? Answers!</h2>
                <p className="fs-6 fw-light">Find quick answers to the most common questions about our platform</p>
                          </div>
              <div>
                <div className="panel">
                  <ul
                    className="uc-accordion gap-1 max-w-md mx-auto"
                    data-uc-accordion="targets: > li; multiple: false;"
                  >
                    <Accordion parentClass="panel fw-light border-0 px-2 py-3 md:px-3 lg:px-4 bg-box box-style rounded-1-5" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
