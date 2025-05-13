import React from "react";
import Image from "next/image";
import bg from "@/public/assets/images/landing/home-4-bg.png";

export default function Cta() {
  return (
    <div className="lg:mx-2 lg:px-2 px-0 sm:mx-1">
      <div className="d-flex items-center position-relative  border border-2 border-gray-10 justify-center py-4 sm:py-6 xl:py-8 text-white uc-dark rounded-2 lg:rounded-4 mx-2 "
         style={{
              backgroundImage: `url(${bg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}>
                    <div className="glow-div"/>
            <div
              className="vstack items-center justify-center gap-2 max-w-md px-4 lg:px-0 tex-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
               <div className="grad-tag w-fit">
               <span>We've Released New Feature</span>
              </div>
              <h2 className="h2 xl:display-5 text-center">
                Unleash your creativity with nexlify.
              </h2>
              <p className="fs-5 my-0 text-center">
                Start your 14-days free trial. Cancel anytime.
              </p>
              <a
                href="https://themeforest.net/user/elite-themes24"
                className="btn btn-md btn-primary min-w-150px px-3 mt-4"
              >
                <span>Get started</span>
                <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
              </a>
            </div>
            <div className="shadow-lg-primary-box z-0 bottom-0 opacity-50"/>
      </div>
      
    </div>
  );
}
