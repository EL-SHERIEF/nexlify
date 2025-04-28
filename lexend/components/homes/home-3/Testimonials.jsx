"use client";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, EffectFade, Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";

const swiperThumbOptions = {
  slidesPerView: 1,
  spaceBetween: 11,
  loop: true,
  effect: "fade",
  modules: [EffectFade, Thumbs],
  slideToClickedSlide: true,
};
const swiperOptions2 = {
  slidesPerView: 1,
  loop: true,

  modules: [Thumbs, Autoplay, Pagination],
  loopedslides: 4,
};
export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div
      id="clients_feedback"
      className="clients-feedback section panel overflow-hidden"
    >
      <div className="section-outer panel">
        <div className="container max-w-xl">
          <div
            className="section-inner panel swiper-parent"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
                     <span className="fw-medium d-flex align-items-center pe-3 gap-2 d-flex flex-row items-center justify-center text-gray-800 rounded-pill m-auto border-1 border border-black-50 fw-medium mb-4" style={{width:'fit-content'}}>
                     <svg className="bg-primary bg-opacity-10 rounded-circle p-1 text-primary"  width={40} height={40}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z" fill="#1C274C"></path> <path d="M18 16.5C18 18.433 15.3137 20 12 20C8.68629 20 6 18.433 6 16.5C6 14.567 8.68629 13 12 13C15.3137 13 18 14.567 18 16.5Z" fill="#1C274C"></path> <path d="M7.12205 5C7.29951 5 7.47276 5.01741 7.64005 5.05056C7.23249 5.77446 7 6.61008 7 7.5C7 8.36825 7.22131 9.18482 7.61059 9.89636C7.45245 9.92583 7.28912 9.94126 7.12205 9.94126C5.70763 9.94126 4.56102 8.83512 4.56102 7.47063C4.56102 6.10614 5.70763 5 7.12205 5Z" fill="#1C274C"></path> <path d="M5.44734 18.986C4.87942 18.3071 4.5 17.474 4.5 16.5C4.5 15.5558 4.85657 14.744 5.39578 14.0767C3.4911 14.2245 2 15.2662 2 16.5294C2 17.8044 3.5173 18.8538 5.44734 18.986Z" fill="#1C274C"></path> <path d="M16.9999 7.5C16.9999 8.36825 16.7786 9.18482 16.3893 9.89636C16.5475 9.92583 16.7108 9.94126 16.8779 9.94126C18.2923 9.94126 19.4389 8.83512 19.4389 7.47063C19.4389 6.10614 18.2923 5 16.8779 5C16.7004 5 16.5272 5.01741 16.3599 5.05056C16.7674 5.77446 16.9999 6.61008 16.9999 7.5Z" fill="#1C274C"></path> <path d="M18.5526 18.986C20.4826 18.8538 21.9999 17.8044 21.9999 16.5294C21.9999 15.2662 20.5088 14.2245 18.6041 14.0767C19.1433 14.744 19.4999 15.5558 19.4999 16.5C19.4999 17.474 19.1205 18.3071 18.5526 18.986Z" fill="#1C274C"></path> </g></svg>
                     Testimonials
                    </span>
            <h2 className="h4 sm:h3 lg:h2 m-0 text-center">
              What Our Clients Say
            </h2>
            <div className="panel p-3 lg:p-6 rounded-3 mt-4"
            >
              <div className="row child-cols-12 sm:child-cols-6 col-match g-2 lg:g-4">
                <div>
                  <div className="panel rounded-2 overflow-hidden">
                    <Swiper
                      allowTouchMove={false}
                      onSwiper={setThumbsSwiper}
                      {...swiperThumbOptions}
                      className="swiper connect-image"
                    >
                      {testimonials.map((elm, i) => (
                        <SwiperSlide key={i} className="swiper-slide">
                          <figure className="featured-image m-0 rounded-3 ratio ratio-3x4 uc-transition-toggle overflow-hidden cards-home-3-box">
                            <Image
                              className="media-cover image uc-transition-scale-up uc-transition-opaque"
                              src={elm.imgSrc}
                              width={1000}
                              height={667}
                              alt="Mark Zellers"
                            />
                          </figure>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div>
                  <div className="panel p-3 cards-home-3-box rounded-3">
                    <Swiper
                      thumbs={{ swiper: thumbsSwiper }}
                      {...swiperOptions2}
                      pagination={{
                        clickable:true,
                        el: ".spb1",
                      }}
                      className="swiper h-100 swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
                    >
                      {testimonials.map((testimonial, index) => (
                        <SwiperSlide
                          className="swiper-slide h-100 pb-6"
                          key={index}
                        >
                          <div className="panel vstack justify-between items-center gap-6 lg:gap-3 h-100 text-center">
                            <div className="panel">
                            <svg width={60} height={60} className="text-primary sm:py-3 py-3" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1200 1200" enableBackground="new 0 0 1200 1200" fill="currentColor"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M600,0C268.629,0,0,268.629,0,600s268.629,600,600,600 s600-268.629,600-600S931.371,0,600,0z M554.077,282.422l25.781,118.727c-75.541,16.721-145.005,38.468-139.38,122.826h88.77 v315.968H261.841V544.629C261.936,309.938,434.242,290.843,554.077,282.422z M912.305,282.422l25.854,118.727 c-75.541,16.721-145.005,38.468-139.38,122.826h88.77v315.968H620.142V544.629C620.236,309.938,792.47,290.843,912.305,282.422z"></path> </g></svg>
                              <p className="fs-6 sm:fs-5 lg:fs-3 fw-bold mt-1 sm:mt-4 dark:text-white">
                                {testimonial.quote}
                              </p>
                            </div>
                            <div className="panel pt-0">
                              <div className="panel vstack items-center gap-narrow">
                                <h6 className="h5 m-0">{testimonial.name}</h6>
                                <span className="fs-6 opacity-70">
                                  {testimonial.position}
                                </span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                      <div className="panel pt-0">
                        <div className=" spb1 swiper-pagination text-primary m-0 justify-center swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal" />
                      </div>
                    </Swiper>
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
