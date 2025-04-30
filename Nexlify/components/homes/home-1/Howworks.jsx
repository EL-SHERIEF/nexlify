import React from "react";
import Image from "next/image";
import Accordion2 from "@/components/common/Accordion2";
import Link from "next/link";

export default function Howworks() {
  return (
    <div
      id="how_it_works"
      className="how-it-works section panel overflow-hidden px-4"
    >
      <div className="section-outer panel">
        <div className="container container-full">
          <div className="section-inner panel">
            <div className="row child-cols-12 col-match gap-5">
              <div>
                <div className="panel">
                  <div className="child-cols-12 lg:child-cols-5 col-match items-center gap-5 mx-auto d-flex flex-row justify-center py-8 flex-sm-column">
                    <div data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;">
                    <figure
        className="m-0 rounded overflow-hidden rounded-3 position-relative shadow-sm border-1 border border-black"
        style={{ width: "100%", aspectRatio: "1200 / 1200" }} 
      >
        <Image
          className="media-cover image w-100 h-100"
          alt="image title"
          src="/assets/images/template/dashboard-04.png"
          width={1200}
          height={1200}
          style={{ objectFit: "cover", objectPosition: "top" }} 
        />
                      </figure>
                    </div>
                    <div className="mx-3" data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;">
                      <div
                        className="panel vstack items-start gap-2 lg:gap-3 my-2 lg:my-0"
                        data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                      >
                           <span className="fw-medium d-flex align-items-center px-2 py-1 text-primary  rounded-pill blur gap-1 border-1 border border-black shadow-sm d-flex justify-center items-center gap-2 bg-white" style={{width:"fit-content"}}>
                   <div className="glowing-circle"></div> Benefits
                  </span>
                        <h3 className="h3 lg:h2 m-0">
                        Simplify intricate business operations with AI
                        </h3>
                        <p className="fs-6 lg:fs-5 mb-2">
                        Easily envisage forthcoming results. Enthrall clientele and enhance their trust. Simplify intricate corporate measures with AI. Facilitate quicker, more educated choices.
                        </p>
                        <div className="panel w-100 mt-2 lg:mt-4">
                          <ul
                            className="uc-accordion-divider uc-accordion-chevron gap-5 uc-accordion"
                            data-uc-accordion="collapsible: false"
                            style={{ "--divider-gap": "40px" }}
                          >
                            <Accordion2 />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
              <div className="panel">
  <div className="child-cols-12 lg:child-cols-5 col-match items-center gap-5 mx-auto d-flex flex-row justify-center py-8 flex-sm-column flex-md-column">
    <div
      className="lg:order-2"
      data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
    >
      <figure
        className="m-0 rounded overflow-hidden rounded-3 position-relative shadow-sm border-1 border border-black"
        style={{ width: "100%", aspectRatio: "1200 / 1200" }} 
      >
        <Image
          className="media-cover image w-100 h-100"
          alt="image title"
          src="/assets/images/template/dashboard-01.png"
          width={1200}
          height={1200}
          style={{ objectFit: "cover", objectPosition: "top" }} 
        />
                      </figure>
                    </div>
                    <div
                      className="order-1 m-4"
                      data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 400;"
                    >
                      <div
                        className="panel vstack items-start gap-2 lg:gap-3 my-2 lg:my-0"
                        data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                      >
                        
                        <h3 className="h3 lg:h2 m-0">
                        Streamline Operations with Intelligent Automation
                        </h3>
                        <p className="fs-6 lg:fs-5">
                        We provide top-of-the-line software as a service (SaaS) solutions tailored to meet the unique needs of your business
                        </p>
                        <div className="panel mt-2 lg:mt-4">
                          <div className="row child-cols-12 lg:child-cols-6 gap-2 ">
                            <div  className="m-0 p-0 w-full">
                              <div className="panel vstack items-start gap-2 border-1 border-black border rounded-3 p-4">
                                <div className="cstack min-w-48px min-h-48px bg-primary rounded-circle">
                                  <Image
                                    className="icon icon-1 text-white image-filter-white"
                                    alt="feature-icon"
                                    data-uc-svg=""
                                    src="/assets/images/common/icons/database.svg"
                                    width="24"
                                    height="24"
                                  />
                                </div>
                                <div className="vstack gap-1 lg:gap-2">
                                  <h5 className="h5 lg:h4 m-0">
                                    Use Data &amp; AI responsibly
                                  </h5>
                                  <p className="fs-6">
                                    Offers a unified platform that fosters
                                    innovation.
                                  </p>
                            
                                </div>
                              </div>
                            </div>
                            <div className="m-0 p-0 w-full">
                              <div className="panel vstack items-start gap-2 border-1 border-black border rounded-3 p-4">
                                <div className="cstack min-w-48px min-h-48px bg-primary rounded-circle">
                                  <Image
                                    className="icon icon-1 text-white image-filter-white"
                                    alt="feature-icon"
                                    data-uc-svg=""
                                    src="/assets/images/common/icons/line-chart.svg"
                                    width="24"
                                    height="24"
                                  />
                                </div>
                                <div className="vstack gap-1 lg:gap-2">
                                  <h5 className="h5 lg:h4 m-0">
                                    Track progress effortlessly
                                  </h5>
                                  <p className="fs-6">
                                    Providing end-to-end data management today’s
                                    challenges.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-start items-center mt-6 gap-3 w-full">
                        <Link
                        href={`/page-pricing`}
                        className="btn btn-md rounded-2 h-48px lg:h-56px w-fit sm:min btn-primary text-white"
                      >
                        Get Started
                      </Link>
                                           <div className="hstack justify-center gap-1 bg-white rounded-pill px-3-narrow py-narrow  border border-1 border-black w-fit">
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
                                  </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
