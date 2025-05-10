import Accordion from "@/components/common/Accordion";
import React from "react";
import Link from "next/link";
export default function Faq() {
  return (
    <div id="faq" className="section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-7 ">
        <div className="container w-full">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div
              className="panel items-center justify-center "
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <h2 className="h4 sm:h3 lg:h2 m-0 text-center fw-light text-white">
               Any questions?
              </h2>
                 <p className="fs-5 xl:fs-4 fw-light text-white text-center mt-3">
                  <span className="opacity-50">See the info below or drop me a line via the </span>
                  <Link href={`/page-contact`}>contact</Link>
                   <span className="opacity-50"> form </span>
                  </p>
              <div className="panel mt-3 p-3 lg:max-w-900px xl:w-auto m-auto">
                <ul
                  className="gap-2 uc-accordion"
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
