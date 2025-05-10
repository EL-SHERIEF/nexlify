"use client";
import { tiers3 } from "@/data/pricing";
import { useState } from "react";
import React from "react";
import Link from "next/link";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div
      id="pricing"
      className="pricing section panel overflow-hidden uc-dark  scrollSpysection mx-2"
    >
      <div className="section-outer panel py-4 overflow-hidden md:py-6 xl:py-10 mx-2  text-white bg-opacity-10  bg-section">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack items-center panel max-w-550px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
            <h2 className="h4 sm:h3 lg:h2 m-0 text-center fw-light text-white">
               What will it cost?
              </h2>
                 <p className="fs-5 xl:fs-4 fw-light text-white text-center mt-3 opacity-50">
                  Flexible monthly plans, cancel at any time.
                  </p>
                <ul
                className="uc-switcher-nav nav-x gap-0 p-narrow mt-5  rounded-pill fs-7 fw-medium"
                style={{background: "#1c1c1c"}}
                data-uc-switcher="connect: .pricing-switcher;"
              >
                <li className={!isYearly ? " text-white bg-black rounded-pill py-narrow" : "text-white opacity-60"}>
                  <a
                    onClick={() => setIsYearly(false)}
                    className="text-none w-128px cstack p-1 text-white"
                  >
                    Monthly
                  </a>
                </li>
                <li className={isYearly ? " text-white bg-black rounded-pill py-narrow" : "text-white opacity-60"}>
                  <a
                    onClick={() => setIsYearly(true)}
                    className="text-none w-128px cstack p-1 text-white"
                  >
                    Yearly
                  </a>
                </li>
              </ul>
              </div>
              <div className="content panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-2"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                >
                  {tiers3.map((tier, index) => (
                    <div key={index} className="tier-wrapper">
                      <div className="tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 pricing-card-home-6">
                        {tier.isPopular && (
                          <span className="position-absolute top-0 ltr:end-0 rtl:start-0 m-2 d-inline-flex py-1 px-2  rounded-pill text-white fs-7 fw-medium bg-black">
                            Popular
                          </span>
                        )}
                        <div className="panel">
                          <h3 className="title h5 sm:h4 dark:text-white">
                            {tier.title}
                          </h3>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-narrow">
                            <h5 className="title h3 sm:h2 m-0 dark:text-white">
                              {isYearly ? tier.yearlyPrice : tier.price}
                            </h5>
                            <span className="fs-7 opacity-70">
                              {tier.priceDetails}
                            </span>
                            <div className="vstack gap-1 justify-center text-center mt-3">
                                <Link
                   href={`/sign-up`}
                    className={`btn btn-md text-black px-narrow mt-2 gap-0 items-center d-flex justify-between ${ 
                       tier.title === "Enterprise"
                                    ? "btn-primary"
                                    : "btn-secondary"
                    } `}
                              >
                    <span className="sm:px-1 px-3-narrow"> {tier.linkText}</span>
                     <div className=" bg-black text-white rounded-2  ltr:ms-narrow rtl:rotate-180 d-flex justify-center items-center"
                     style={{width:"50px",height:"40px"}}>
                     <i className="icon icon-narrow unicon-arrow-right fw-bold" />
                     </div>       
                   </Link>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-2">
                            {tier.features.map((feature, idx) => (
                              <div key={idx} className="hstack gap-1 fs-7">
                                 <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>                                <span>{feature}</span>
                              </div>
                            ))}
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
      </div>
    </div>
  );
}
