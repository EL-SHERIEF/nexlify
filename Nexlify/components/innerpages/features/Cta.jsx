import React from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/assets/images/landing/hero-bg-2.webp";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel overflow-hidden">
      <div className="section-outer panel py-4 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel p-4 sm:p-6 xl:p-8 rounded-2 overflow-hidden text-white"
           style={{
                        borderRadius: '20px',
                        backgroundImage: `url(${bg.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'start center',
                        backgroundRepeat: 'no-repeat',
                      }}>
            <div className="vstack gap-2 max-w-550px items-center lg:items-start m-auto lg:m-0 text-center lg:text-start rtl:lg:text-end">
              <h2 className="h3 sm:h1 m-0 text-inherit">
                Boost your creativity and productivity with nexlify
              </h2>
              <div className="vstack sm:hstack justify-center lg:justify-start gap-1 lg:gap-2 mt-1 lg:mt-2">
                <Link
                  href={`/page-pricing`}
                  className="btn btn-md lg:btn-lg btn-secondary text-white"
                >
                  Try nexlify today
                </Link>
              </div>
              <p className="fs-7 text-inherit text-opacity-70">
                30-day trial, no credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
