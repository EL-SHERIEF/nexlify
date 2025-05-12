import { brands } from "@/data/brands";
import Image from "next/image";
import React from "react";

export default function Brands() {
  return (
    <div
      id="companies_sponsores"
      className="companies-sponsores section panel overflow-hidden"
    >
      <div className="section-outer panel">
        <div className="container sm:max-w-md">
          <div className="section-inner panel">
            <div
              className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
              data-anime="onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <div className="panel hstack gap-3 text-center items-center justify-center">
                <div className="custom-v-skyline"></div>
                <h5 className="h6 fw-medium m-0">
              Adopted by renowned, trusted, and leading enterprises
              </h5>
              <div className="custom-v-skyline"></div>

              </div>
              <div className="panel ">
                <div className="flex-row d-flex items-center text-center flex-wrap justify-center gap-5">
                {brands.slice(0, 5).map((brand, index) => (
                    <div key={index}>
                        <Image
                          className="object-contain opacity-60"
                          style={{filter: "brightness(0)",objectFit: "contain", maxWidth: "150px", height: "40px"}}
                          alt="brand"
                          src={brand.src}
                          width={110}
                          height={40}
                        />
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
