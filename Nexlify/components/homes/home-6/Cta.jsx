import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel overflow-hidden mt-5">
      <div
        className="section-outer panel"
        data-anime="onview: -100; translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
      >
        <div className="w-100">
          <div
            className="section-inner panel overflow-hidden sm:px-0 text-white cta-home-6"
            
          >
            <div className="container">
              <div className="row align-items-center">
                {/* Text Section */}
                <div
                  className="col-12 col-md-6 vstack items-start gap-2 py-4 px-4 lg:px-6 text-start"
                  data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h3 sm:h2 fw-light m-0 text-inherit">
                    Ready to make better decisions with your data?
                  </h2>
                  <p className="fs-6 sm:fs-5 text-inherit opacity-60">
                    Try Feature free for 14 days. No credit card needed.
                  </p>
                   <Link
                     href={`/page-pricing`}
                    className="btn btn-md btn-secondary text-black px-narrow mt-2 gap-0 items-center d-flex justify-center">
                    <span className="sm:px-1 px-3-narrow">Try it now</span>
                     <div className=" bg-black text-white rounded-2  ltr:ms-narrow rtl:rotate-180 d-flex justify-center items-center"
                     style={{width:"50px",height:"40px"}}>
                     <i className="icon icon-narrow unicon-arrow-right fw-bold" />
                     </div>       
                   </Link>
                </div>
                {/* Video Section */}
                <div className="col-12 col-md-6 py-4 px-4 lg:px-6"
                style={{    mask: "radial-gradient(50% 50% at 50% 50%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%"}}>
                  <div className="ratio ratio-3x2">
                    <video
                      className="w-100 h-100 object-fit-cover rounded"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source
                        src="https://framerusercontent.com/assets/LRzQafNZ8r3f0PGbI1Sps0dwcnk.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
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