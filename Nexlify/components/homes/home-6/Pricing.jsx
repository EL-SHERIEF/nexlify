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
      <div className="section-outer panel py-4 overflow-hidden md:py-6 xl:py-10 mx-2 rounded-2 lg:rounded-3 bg-primary text-white bg-opacity-10">
        <div
          className="position-cover opacity-70 bg-contain"
          style={{ backgroundPosition: "50% 85%" }}
          data-src="/assets/images/template/pricing-06-bg-masked.png"
          data-uc-img=""
        />
        <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack items-center gap-2 panel max-w-550px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <div className="grad-tag">
                  <span>Pricing</span>
              </div>
                <h2 className="title h3 lg:h2 xl:h1 m-0 px-2">
                Find your perfect plan
                </h2>
                <p className="fs-6 xl:fs-5 text-opacity-70">
                  Unlock Your Full Potential with Flexible Pricing
                </p>
                <ul
                className="uc-switcher-nav nav-x gap-0 p-narrow grad-tag rounded-pill fs-7 fw-medium"
                data-uc-switcher="connect: .pricing-switcher;"
              >
                <li className={!isYearly ? " text-white inside-gard-tag" : "text-white border-transparent"}>
                  <a
                    onClick={() => setIsYearly(false)}
                    className="text-none w-128px cstack p-1 text-white"
                  >
                    Monthly
                  </a>
                </li>
                <li className={isYearly ? "inside-gard-tag text-white" : "text-white border-transparent"}>
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
                      <div className="tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded-2 lg:rounded-4 grad-box">
                        {tier.isPopular && (
                          <span className="position-absolute top-0 ltr:end-0 rtl:start-0 m-2 d-inline-flex py-1 px-2  rounded-2 text-white fs-7 fw-medium custom-element">
                            Popular
                          </span>
                        )}
                        <div className="panel">
                          <h3 className="title h5 sm:h4 dark:text-white">
                            {tier.title}
                          </h3>
                          <p className="desc dark:text-white opacity-70 dark:opacity-80">
                            {tier.description}
                          </p>
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
                                className={`btn btn-md sm:btn-sm lg:btn-md ${
                                  tier.title === "Enterprise"
                                    ? "btn-secondary text-black"
                                    : "border-primary text-white shadow-none"
                                } `}
                              >
                                {tier.linkText}
                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                              </Link>
                              <span className="fs-7 opacity-70 min-h-24px">
                                {tier.linkSubtext}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-2">
                            <span className="fs-6 fw-bold dark:text-white">
                            Including:
                            </span>
                            {tier.features.map((feature, idx) => (
                              <div key={idx} className="hstack gap-1 fs-7">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p
                className="text-center dark:text-white"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
              >
                All prices are free of taxes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
