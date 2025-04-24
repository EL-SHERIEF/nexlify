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
                       <svg className="bg-primary bg-opacity-10 rounded-circle p-1 text-primary" width={40} height={40}  fill="#ffffff" viewBox="0 0 52.00 52.00"  xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.0005200000000000001"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M25,2.3l11.7.2a5.51,5.51,0,0,1,2.5,1h0l4.6,4.6,4.6,4.6a3.55,3.55,0,0,1,1,2.5h0L49.7,27a3.55,3.55,0,0,1-1,2.5h0L29.5,48.7a3.69,3.69,0,0,1-5,0h0L13.9,38.1,3.3,27.5a3.69,3.69,0,0,1,0-5h0L22.5,3.3a3.55,3.55,0,0,1,2.5-1ZM18.6,21l-1.9,1.8a.85.85,0,0,0,0,1.3L27.9,35.3a.85.85,0,0,0,1.3,0l1.9-1.9a.85.85,0,0,0,0-1.3L19.7,21A.65.65,0,0,0,18.6,21Zm5.3-5.4L22,17.5a.85.85,0,0,0,0,1.3L33.2,30a.85.85,0,0,0,1.3,0l1.9-1.9a.85.85,0,0,0,0-1.3L25.1,15.6A.91.91,0,0,0,23.9,15.6ZM42,10a3.69,3.69,0,0,0-5,0,3.69,3.69,0,0,0,0,5,3.69,3.69,0,0,0,5,0A3.69,3.69,0,0,0,42,10Z"></path> </g> </g></svg>
                           Pricing
                    </span>
            <h2 className="h4 sm:h3 lg:h2 m-0 text-center">
              Testimonials
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
