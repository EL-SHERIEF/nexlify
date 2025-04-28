import React from "react";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/assets/images/landing/hero-bg-2.jpg";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel overflow-hidden mt-5">
      <div
        className="section-outer panel"
        data-anime="onview: -100; translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
      >
        <div className="container max-w-xl">
          <div className="section-inner panel overflow-hidden rounded xl:rounded-2 px-2 sm:px-0 py-4 sm:py-6 xl:py-9 text-white"
            style={{
              borderRadius: '20px',
              backgroundImage: `url(${bg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'start center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="vstack items-start gap-2 px-3 lg:px-4 xl:px-6 mx-auto text-start"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
                <Image
                                 className="dark:d-none"
                                 alt="Nexlify"
                                 src="/assets/images/common/logo-dark.png"
                                 width="130"
                                 height="60"
                               />
              <h2 className="h3 sm:h1 xl:display-6 m-0 text-inherit">
                Start Today & Get 30% Off Your Yearly Subscription
              </h2>
              <p className="fs-6 sm:fs-5 text-inherit text-opacity-70 ">
                Create AI applications with AIInnovate and unlock the full potential of AI.
              </p>
              <Link
                href={`/page-pricing`}
                className="btn btn-md h-48px lg:h-56px min-w-150px btn-secondary text-white mt-2"
              >
                <span>Try it now</span>
                <i className="icon icon-1 unicon-arrow-up-right" />
              </Link>
              <p className="fs-7 text-inherit text-opacity-70">
                No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
