import { features9 } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Features2() {
  return (
    <div
      id="key_features"
      className="key-features section panel mt-6"
    >
      <div className="panel lg:rounded-3 rounded-2 bg-box text-gray-500 text-opacity-70 box-style-sm max-w-xl px-3 mx-auto py-6 sm:py-8 xl:py-9">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
               <span className="custom-tag-sm mb-2">
               Solutions
              </span>
              <h2 className="h1 fw-light m-0 text-inherit ls-1 text-dark">
                End-to-End data management Solutions
              </h2>
              <p className="fs-6 fw-light">
                Offers a unified platform that fosters innovation while
                providing end-to-end data management.
              </p>
            </div>
            <div
              className="features-items row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-4 col-match"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {features9.map((feature, index) => (
                <div key={index} className={feature.order}>
                  <div className="features-item vstack items-start justify-start text-start gap-3 bg-box box-style p-4 rounded-2">
                    <div className="icon-box cstack w-48px h-48px bg-box box-style-sm rounded">
                      <Image
                        className="w-24px xl:w-32px"
                        alt="feature-icon"
                        src={feature.icon}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="panel">
                      <div className="vstack gap-3 pb-2">
                        <h3 className="title h6 lg:h4 fw-light m-0">{feature.title}</h3>
                        <p className="desc fs-6 opacity-80 me-1">
                          Whether you have a team of 2 or 200, our shared team
                          inboxes keep everyone on the same page and in the
                          loop.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="pre-cta vstack items-center gap-1 max-w-400px lg:max-w-750px mx-auto text-center mt-6 sm:mt-8 lg:mt-10"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="mb-2 lg:mb-3">
                <Link
                  href={`/page-pricing-2`}
                  className="btn btn-md xl:btn-lg btn-primary border px-3 lg:px-5 w-auto"
                >
                  <span>Start your free trial</span>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
