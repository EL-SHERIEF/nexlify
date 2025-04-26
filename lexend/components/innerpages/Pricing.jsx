"use client";
import { tiers3 } from "@/data/pricing";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/assets/images/landing/hero-bg-2.jpg";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel pt-8 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
          <div className="my-2 vstack items-center gap-2 lg:gap-4  mb-2 mx-auto text-center text-white py-4 sm:py-6 lg:py-8"
             style={{
              width: '100%',
              borderRadius: '20px',
              backgroundImage: `url(${bg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'start center',
              backgroundRepeat: 'no-repeat',
            }}
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
                   <span className="fw-medium d-flex align-items-center px-2 py-1 bg-white bg-opacity-10 rounded-pill blur gap-1 m-0" style={{border:'solid 1px rgba(255, 255, 255, 0.38)'}}>
                   <svg width={20} height={20} fill="#ffffff" viewBox="0 0 52.00 52.00"  xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.0005200000000000001"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M25,2.3l11.7.2a5.51,5.51,0,0,1,2.5,1h0l4.6,4.6,4.6,4.6a3.55,3.55,0,0,1,1,2.5h0L49.7,27a3.55,3.55,0,0,1-1,2.5h0L29.5,48.7a3.69,3.69,0,0,1-5,0h0L13.9,38.1,3.3,27.5a3.69,3.69,0,0,1,0-5h0L22.5,3.3a3.55,3.55,0,0,1,2.5-1ZM18.6,21l-1.9,1.8a.85.85,0,0,0,0,1.3L27.9,35.3a.85.85,0,0,0,1.3,0l1.9-1.9a.85.85,0,0,0,0-1.3L19.7,21A.65.65,0,0,0,18.6,21Zm5.3-5.4L22,17.5a.85.85,0,0,0,0,1.3L33.2,30a.85.85,0,0,0,1.3,0l1.9-1.9a.85.85,0,0,0,0-1.3L25.1,15.6A.91.91,0,0,0,23.9,15.6ZM42,10a3.69,3.69,0,0,0-5,0,3.69,3.69,0,0,0,0,5,3.69,3.69,0,0,0,5,0A3.69,3.69,0,0,0,42,10Z"></path> </g> </g></svg>
                                 Pricing
                    </span>
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0 text-inherit">
                Simple, scalable pricing.
              </h1>
              <p className="fs-6 xl:fs-5 text-opacity-70 text-inherit">
                Unlock Your Full Potential with Flexible Pricing
              </p>
              <ul
                className="uc-switcher-nav nav-x gap-0 p-narrow border bg-white rounded-2 fs-7 fw-medium"
                data-uc-switcher="connect: .pricing-switcher;"
              >
                <li className={!isYearly ? "uc-active text-white" : "text-black"}>
                  <a
                    onClick={() => setIsYearly(false)}
                    className="text-none w-128px cstack p-1"
                  >
                    Monthly
                  </a>
                </li>
                <li className={isYearly ? "uc-active text-white" : "text-black"}>
                  <a
                    onClick={() => setIsYearly(true)}
                    className="text-none w-128px cstack p-1"
                  >
                    Yearly
                  </a>
                </li>
              </ul>
            </div>
            <div className="uc-switcher pricing-switcher mt-4">
              <div className="uc-active">
                <div
                  className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-2"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});"
                >
                  {tiers3.map((tier, index) => (
                    <div key={index} className="tier-wrapper">
                      <div className="tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded lg:rounded-2 border border-1 border-black shadow-sm">
                        {tier.isPopular && (
                          <span className="position-absolute top-0 ltr:end-0 rtl:start-0 m-1 d-inline-flex py-narrow px-1 rounded-pill text-primary fs-7 fw-medium shadow-sm border border-1 bg-white border-primary">
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
                                    ? "btn-secondary"
                                    : "btn-primary"
                                } text-white`}
                              >
                                {tier.linkText}
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
                              {tier.title === "Essentials"
                                ? "Key features:"
                                : `Everything in ${
                                    tier.title === "Business"
                                      ? "Essentials"
                                      : "Business"
                                  }, plus:`}
                            </span>
                            {tier.features.map((feature, idx) => (
                              <div key={idx} className="hstack gap-1 fs-7">
                                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fw-bold" />
                                <span>{feature}</span>
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
            <p
              className="text-center text-gray-900 dark:text-white text-opacity-70 mt-4 sm:mt-6 xl:mt-8"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 0;"
            >
              Prices exclude any applicable taxes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
