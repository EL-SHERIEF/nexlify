import { pricingTiers } from "@/data/pricing";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/assets/images/landing/hero-bg-2.jpg";

export default function Pricing() {
  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div className="heading panel vstack items-center gap-2 xl:gap-3 text-center">
              <span className="fw-medium d-flex align-items-center px-2 py-1 text-primary  rounded-pill blur gap-1 m-auto border-1 border border-black shadow-sm " style={{width:'fit-content'}}>
              <svg width={20} height={20} fill="#ffffff" viewBox="0 0 52.00 52.00"  xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.0005200000000000001"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M25,2.3l11.7.2a5.51,5.51,0,0,1,2.5,1h0l4.6,4.6,4.6,4.6a3.55,3.55,0,0,1,1,2.5h0L49.7,27a3.55,3.55,0,0,1-1,2.5h0L29.5,48.7a3.69,3.69,0,0,1-5,0h0L13.9,38.1,3.3,27.5a3.69,3.69,0,0,1,0-5h0L22.5,3.3a3.55,3.55,0,0,1,2.5-1ZM18.6,21l-1.9,1.8a.85.85,0,0,0,0,1.3L27.9,35.3a.85.85,0,0,0,1.3,0l1.9-1.9a.85.85,0,0,0,0-1.3L19.7,21A.65.65,0,0,0,18.6,21Zm5.3-5.4L22,17.5a.85.85,0,0,0,0,1.3L33.2,30a.85.85,0,0,0,1.3,0l1.9-1.9a.85.85,0,0,0,0-1.3L25.1,15.6A.91.91,0,0,0,23.9,15.6ZM42,10a3.69,3.69,0,0,0-5,0,3.69,3.69,0,0,0,0,5,3.69,3.69,0,0,0,5,0A3.69,3.69,0,0,0,42,10Z"></path> </g> </g></svg>
                  Pricing
                    </span>
                <h2 className="title h3 lg:h2 xl:h1 m-0">
                  Price plans as per your needs
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  No extra charges. No hidden fees.
                </p>
              </div>
              <div className="panel w-100 lg:max-w-900px border rounded-3 overflow-hidden"
               style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'start start',
                backgroundRepeat: 'no-repeat',
              }}
>
                <div className="row child-cols-12 sm:child-cols-6 col-match justify-between g-0">
                  {pricingTiers.map((tier, index) => (
                    <div key={index}>
                      <div
                        className={`tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded-0 ${
                          tier.popular ? "bg-primary bg-opacity-40 text-white" : "bg-white"
                        }`}
                      >
                        {tier.popular && (
                          <span className="position-absolute top-0 ltr:end-0 rtl:start-0 m-1 d-inline-flex py-narrow px-1 rounded-pill text-primary fs-7 fw-medium shadow-sm border border-1 bg-white border-primary">
                            Popular
                          </span>
                        )}
                        <div className="panel">
                          <h3 className="title h5 sm:h4 text-inherit">
                            {tier.title}
                          </h3>
                          <p className="desc opacity-70 dark:opacity-80 text-inherit">
                            {tier.description}
                          </p>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-narrow">
                            <h5 className="title h3 sm:h2 m-0 text-inherit">
                              {tier.price}
                            </h5>
                            <span className="fs-7 opacity-70">
                              {tier.priceInfo}
                            </span>
                            <div className="vstack gap-1 justify-center text-center mt-3">
                              <Link
                                href={"/sign-up"}
                                className="btn btn-md sm:btn-sm lg:btn-md btn-primary text-white"
                              >
                                {tier.buttonLabel}
                              </Link>
                              <span className="fs-7 opacity-70 min-h-24px">
                                No credit card required
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-2">
                            <span className="fs-6 fw-bold dark:text-white">
                              {tier.popular
                                ? "Everything in Essentials, plus:"
                                : "Key features:"}
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
              <Link
                href={`/page-pricing`}
                className="uc-link text-white py-1 px-3 shadow-sm bg-primary rounded-2 border border-1 border-black fw-bold d-inline-flex items-center gap-narrow"
                style={{
                  transform: "translateY(0.0097341px)",
                  opacity: "0.999797",
                }}
              >
                <span>More detailed pricing</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
