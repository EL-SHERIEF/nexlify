import { features5 } from "@/data/features";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function KeyFeatures() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden  scrollSpysection pt-3 mt-5"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10">
        <div className="container xl:max-w-lg">
          <div className="section-inner panel vstack gap-4 lg:gap-6 xl:gap-8">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 text-center"
              data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
                <div className="grad-tag">
                  <span>Key Features</span>
              </div>
              <p className="fs-4 lg:fs-3 xl:fs-2 max-w-lg mx-auto m-0 text-white">
                <b>Easy-to-use</b> and powerful page builder, your gateway to
                <b>intuitive tools</b> and
                <b>expansive customization</b> options that transform how you
                <b>build websites</b>.
              </p>
            </div>
            <div
              className="panel"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <div
                className="features-items row child-cols-6 lg:child-cols-3 g-2 col-match"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
              >
                {features5.map((feature, index) => (
                  <div key={index}>
                    <div className="features-item vstack justify-between gap-4 p-2 md:p-4  custom-element hover:scale-105 transition-all duration-150 rounded-1-5 md:min-h-250px">
                      <div className="icon icon-box w-40px md:w-48px h-40px md:h-48px rounded-circle cstack">
                        <Image
                          className="w-20px xl:w-24px"
                          src={feature.iconSrc}
                          width={24}
                          height={24}
                          alt={feature.alt}
                          data-uc-svg=""
                        />
                      </div>
                      <h3 className="title h6 md:h5 m-0 text-white">{feature.title}</h3>
                      <a href="#" className="position-cover"></a>
                    </div>
                  </div>
                ))}
                <div>
                  <div className="features-item-more cstack gap-1 md:gap-2 flex-column">
                    <Link
                      href={`/page-features`}
                      className="uc-link w-40px md:w-48px lg:w-80px h-40px md:h-48px lg:h-80px rounded-circle cstack custom-element text-primary justify-center items-center"
                    >
                      <i className="icon icon-narrow icon-3 unicon-arrow-up-right fw-bold rtl:-rotate-90" />
                    </Link>
                    <span className="fs-7 fs-6 fw-medium text-white opacity-75">
                      View all features
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
