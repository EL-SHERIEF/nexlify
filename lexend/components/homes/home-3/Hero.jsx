"use client";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";
import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";
export default function Hero() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-absolute top-0 start-0 end-0 h-600px z-0 " />
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden"
        data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;"
      >
         <div className="w-100 h-250px position-absolute"
        style={{bottom:"30vh",left:-30}}>
        <Image
            className="w-100"
            alt="icon-trophy"
            src="/assets/images/landing/ground-item-bg.svg"
            width="700"
            height="700"
          />
        </div>
    <div className="position-absolute overflow-hidden d-flex lg:d-flex sm:d-block flex-row" style={{maxWidth:"100vw",width:"100vw",height:"100vh",minHeight:"100vh",left:0}}>
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
        {/* START BOXES */}
        <div
          className="position-absolute translate-middle-y rotate-12"
          style={{ top: "10%", left: -30 }}
        >
          <Image
            className="w-250px cards-home-3"
            alt="icon-trophy"
            src="/assets/images/landing/g1.svg"
            width="700"
            height="700"
          />
        </div>
        <div
          className="position-absolute translate-middle-y -rotate-12 me-n3"
          style={{ top: "43%", left: -30 }}
        >
          <Image
            className="w-250px cards-home-3"
            alt="icon-chat"
            src="/assets/images/landing/g2.svg"
            width="700"
            height="700"
          />
        </div>
        <div
          className="position-absolute translate-middle-y rotate-12"
          style={{ top: "70%", left: "0%" }}
        >
          <Image
            className="w-250px cards-home-3"
            alt="icon-globe"
            src="/assets/images/landing/g3.svg"
            width="700"
            height="700"
          />
        </div>
      </div>
      <div className="section-outer panel pb-10 pt-9 lg:py-10">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-2 lg:gap-3 mt-2 sm:mt-4 lg:mt-0 mb-5 max-w-750px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
                  <div className="hstack justify-center gap-1 mt-1 sm:mt-2 bg-white rounded-pill px-3-narrow py-narrow w-fit mx-auto border border-1 border-black">
                                    <div className="hstack justify-center gap-0">
                                      <div className="rounded-circle ltr:ms-n2 rtl:me-n2 border border-2 border-white overflow-hidden">
                                      <Image
                                        className="object-fit-cover h-full"
                                        alt="Avatar image"
                                        src="/assets/images/avatars/01.jpg"
                                        width="32"
                                        height="32"
                                      />
                                      </div>
                                      <div className="rounded-circle ltr:ms-n2 rtl:me-n2 border border-2 border-white overflow-hidden">
                                      <Image
                                        className="object-fit-cover h-100"
                                        alt="Avatar image"
                                        src="/assets/images/avatars/02.jpg"
                                        width="32"
                                        height="32"
                                      />
                                      </div>
                                      <div className="rounded-circle ltr:ms-n2 rtl:me-n2 border border-2 border-white overflow-hidden">
                                      <Image
                                        className="object-fit-cover h-full"
                                        alt="Avatar image"
                                        src="/assets/images/avatars/03.jpg"
                                        width="32"
                                        height="32"
                                      />
                                      </div>
                                    </div>
                                    <span className="fs-7 sm:fs-2 text-black">
                                    4,600 Pro users
                                    </span>
                                  </div>
              <h1 className="h2 sm:h1 lg:display-6 xl:display-4 m-0">
              The AI-powered <span className="text-wow"> Customer Service</span> Platform
              
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
              AI-powered customer service platform for teams who know great CX drives revenue.
              <br className="d-none sm:d-block" />
Unlock exceptional support that creates customers for life.
              </p>
              <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 sm:mt-2 flex-sm-column fdr">
                <Link
                  href={`/page-pricing`}
                  className="btn btn-md lg:btn-lg btn-primary text-white py-3 rounded-pill"
                >
                  Start free 14-day trial
                </Link>
              </div>
              <p className="text-dark dark:text-white text-opacity-70 sm:mt-1 lg:mt-0 ">
               ⊛ No credit card required.
              </p>
            </div>
                 <div className="panel m-auto"
                         style={{width:'80%'}}
                         data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
                         data-uc-lightbox="video-autoplay: true;"
                       >
                         <figure className="featured-image m-0 rounded-3 ratio ratio-16x9 overflow-hidden shadow-lg">
                           <Image
                             className="media-cover image"
                             alt="nexlify"
                             src="/assets/images/template/home-01-hero-cover.webp"
                             width="1280"
                             height="719"
                           />
                         </figure>
                         <a
                           className="cstack text-none position-absolute top-50 start-50 translate-middle bg-white text-primary w-56px h-56px sm:w-56px sm:h-56px rounded-circle shadow-md"
                           onClick={() => setOpen(true)}
                           data-caption="Easy project managment of any complexity."
                           data-attrs="width: 640; height: 480;"
                         >
                           <i className="icon icon-2 sm:icon-3 unicon-play-filled-alt" />
                         </a>
                       </div>
          </div>
        </div>
      </div>
      <ModalVideo
        isOpen={isOpen}
        src="/assets/images/media/vid1.mp4"
        setIsOpen={() => setOpen(false)}
      />
    </div>
  );
}
