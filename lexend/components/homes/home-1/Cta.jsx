import React from "react";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/assets/images/landing/hero-bg-2.webp";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel overflow-hidden">
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
              className="vstack items-start gap-2 px-8 mx-auto text-start"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
                <Image
                                 className="dark:d-none"
                                 alt="Nexlify"
                                 src="/assets/images/common/logo-dark.svg"
                                 width="130"
                                 height="60"
                               />
              <h2 className="h3 sm:h1 xl:display-6 m-0 text-inherit">
                Prevent costly mistakes
              </h2>
              <p className="fs-6 sm:fs-5 text-inherit text-opacity-70 ">
                Create pre-approved templates and lock all legal information.
              </p>
              <Link
                href={`/page-pricing`}
                className="btn btn-md h-48px lg:h-56px min-w-150px btn-secondary text-white mt-2"
              >
                <span>Try it now</span>
                <i className="icon icon-1 unicon-arrow-up-right" />
              </Link>
              <p className="fs-7 text-inherit text-opacity-70">
                14-day trial, no credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
