"use client";

import Brands from "@/components/common/Brands";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/assets/images/landing/home-4-bg.png";
import { useParallax } from "react-scroll-parallax";
export default function Hero() {
  const parallax = useParallax({
    translateY: [-10, 20],
    scale: [.8,1],
    rotateX: [20, -10],
  });
  return (
    <>
    <div
      id="overview"
      className="overview section panel overflow-hidden scrollSpysection"
      style={{
        backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="section-outer panel pt-9  xl:pt-10">
        <div className="container xl:max-w-xl pt-4">
          <div className="section-inner panel pt-0 lg:pt-4 xl:pt-0 ">
            <div className="row child-cols-12 justify-center items-center g-6 xl:g-8">
              <div>
                <div
                  className="panel vstack justify-center items-center gap-3 max-w-600px lg:max-w-750px mx-auto px-2 lg:px-0 text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <div className="cstack gap-2 py-1 px-1 pe-3 bg-white bg-opacity-10 rounded-pill fs-7 text-white">
                    <span className="rounded-pill bg-primary px-2 lh-0 py-narrow ">NEW</span>
                    <span className="">
                      Theme 4 Now Available!
                    </span>
                  </div>
                  <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-3 m-0 text-white">
                    Build Your
                    <br />
                   AI Employees
                  </h1>
                  <p className="fs-5 xl:fs-4 text-white opacity-50 lh-sm">
                  Boost your efficiency and streamline tasks effortlessly
                  </p>
                  <Link
                    href={`/page-pricing`}
                    className="btn btn-md lg:btn-lg btn-secondary text-primary min-w-150px mt-2"
                  >
                    <span>Book A Free Demo</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel mb-6 pb-6 prespective" 
               data-anime="scale: [1.2, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 500;" >
                  <figure className=" scroll-animation featured-image m-0 rounded-2 lg:rounded-4  overflow-hidden border border-2 border-gray-10 mx-auto position-relative"
                   ref={parallax.ref}
                  style={{ maxHeight: "600px",maxWidth: "1000px" }}>
                    <div className="glow-div"/>
                    <Image
                      className="w-full h-full position-relative"
                      alt="nexlify"
                      src="/assets/images/landing/hero-4.jpg"
                      width="1280"
                      height="719"
                    />
                  </figure>
                </div>
          </div>
        </div>
      </div>
    </div>
    <div className="brands panel overflow-hidden mt-4 sm:mt-6 xl:mt-8 opacity-50">
                <div
                  className="block-panel panel"
                  data-anime="onview: -100; opacity: [0, 1]; duration: 450; delay: 200;"
                >
                  <div className="element-brands text-gray-900 dark:text-white">
                    <Brands />
                  </div>
                </div>
              </div></>
  );
}
