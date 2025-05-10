'use client'
import { featuresHome6 } from "@/data/features";
import React from "react";
import Image from "next/image";

import { useParallax } from "react-scroll-parallax";
import Link from "next/link";
export default function Features2() {

  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel pt-4 lg:pt-8 pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
            <div className="sticky-scene panel vstack gap-3">
            {featuresHome6.map((feature) => (
  <div
    key={feature.id}
    className="feature-item panel py-4"
    data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
  >
    <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
      <div className={`order-0 ${feature.id % 2 === 1 ? 'lg:order-0' : 'lg:order-1'}`}>
        <div className="panel w-100 min-h-450px rounded-2 lg:rounded-3 overflow-hidden box-home-6  d-flex justify-end items-end">
                      <Image
         ref={useParallax({ translateY: [20, -10],translateX: [5, 5] }).ref}
          style={{width:"92%", height:"92%",objectFit:"cover",background:"none"}}
          className="box-home-6 rounded-1-5 mt-5  shadow-lg"
            src={feature.imgSrc}
            width={780}
            height={728}
            alt={feature.imgAlt}
          />
        </div>
      </div>
      <div className={`order-1 ${feature.id % 2 === 1 ? 'lg:order-1' : 'lg:order-0'} col-12 sm:col-6`}>
        <div className="panel vstack justify-center gap-4 h-100">
          <div>
            <div className="panel vstack gap-2">
            {feature.tag && (
             <div className="border border-1 text-white d-flex flex-row items-center gap-1 justify-center rounded-pill w-fit">
                <span className="fw-medium fs-7 bg-primary rounded-pill px-1 m-narrow">{feature.tag.pre}</span>
                  <span className="fw-medium fs-7 pe-3">{feature.tag.text}</span>
             </div>
            )}
              <h3 className="h4 lg:h2 fw-light m-0 text-white">{feature.title}</h3>
              <p className="fs-6 lg:fs-5 opacity-60 text-white">
                {feature.description}
              </p>
              {feature.link && (
                  <Link
                  href={feature.link.href}
                  className="btn btn-md btn-secondary text-black min-w-150px px-narrow mt-2 gap-0 items-center d-flex justify-center w-fit"
                >
                  <span className="px-3-narrow">{feature.link.text}</span>
                   <div className=" bg-black text-white rounded-2  ltr:ms-narrow rtl:rotate-180 d-flex justify-center items-center"
                   style={{width:"50px",height:"40px"}}>
                   <i className="icon icon-narrow unicon-arrow-right fw-bold" />
                   </div>       
                 </Link>
              )}
            </div>
          </div>
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
  );
}
