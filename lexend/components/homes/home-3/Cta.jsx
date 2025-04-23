"use client";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel overflow-hidden">
      <div className="section-outer panel py-4 sm:py-6 xl:py-9 ">
      <div className="w-100 h-250px position-absolute"
                      style={{bottom:"8vh",left:0,width:'100%',height:"100%",zIndex:0}}>
                      <Image
                          className="w-100"
                          alt="icon-trophy"
                          src="/assets/images/landing/ground-item-bg.svg"
                          width="600"
                          height="600"
                        />
                      </div>
                      
        <div className="container max-w-xl">
           <div className="position-absolute overflow-hidden d-flex lg:d-flex sm:d-block flex-row" style={{maxWidth:"100vw",width:"100vw",height:"100vh",minHeight:"100vh",left:0,top:0}}>
              <div className="blend-lighten-overlay w-100">
                      <Image
                      className="w-100 h-100 blend-lighten"
                      alt="icon-trophy"
                      src="/assets/images/landing/hero-bg-left.webp"
                      width="1000"
                      height="1000"
                      />
                </div>
                <div className="blend-lighten-overlay">
                      <Image
                      className="w-100 h-100 blend-lighten"
                      alt="icon-trophy"
                      src="/assets/images/landing/hero-bg-right.webp"
                      width="1000"
                      height="1000"
                      />
                </div>
               
              </div>
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-2 sm:max-w-600px lg:max-w-650px mx-auto text-center position-relative z-1"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
                  <Image
              className="w-64px  pb-2"
              width={169}
              height={195}
              alt="logo"
              data-uc-svg=""
              src="/assets/images/common/logo-mark.png"
            />
              <h2 className="h3 sm:h1 xl:display-6 m-0">
                Manage your Corp fully with{" "}
                <span className="text-primary text-wow"> Nexlify AI</span>
              </h2>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">
                Ready to take the AI journey to the next level?
              </p>
              <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 lg:mt-2 flex-sm-column fdr">
                <Link
                  href={`/page-pricing`}
                  className="btn btn-md lg:btn-lg btn-primary text-white rounded-pill"
                >
                  Try nexlify today
                </Link>
                <a
                  onClick={openContactModal}
                  className="btn btn-md lg:btn-lg rounded-pill bg-white"
                  data-uc-toggle=""
                >
                  Contact sales
                </a>
              </div>
              <p className="fs-7 text-dark dark:text-white text-opacity-70">
                14-day trial, no credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
