"use client";

import { testimonials4 } from "@/data/testimonials";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div className="section-header vstack items-center gap-2">.
                <span className="custom-tag-sm mb-2">Trusted by Innovators Worldwide</span>
                <h2 className="h1 fw-light m-0 text-inherit ls-1 text-dark text-center">
                What Our Users Say</h2>
                <p className="fs-6 fw-light text-center">Hear from businesses who’ve transformed their workflows with our solutions</p>
              </div>
              <div className="panel w-100">
                <Swiper
                  spaceBetween={16}
                  slidesPerView={1.25}
                  className="swiper overflow-unset swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
                  loop={true}
                modules={[Autoplay]}
                autoplay={{
                  disableOnInteraction: false,
                  reverseDirection: false,
                waitForTransition: false,
                }}
                delay={0}
                speed={3000}
                allowTouchMove={true}
                  breakpoints={{
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 24,
                      centeredSlides: false,
                    },
                  }}
                  initialSlide={2}
                >
                  {testimonials4.map((testimonial, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 bg-box box-style">
                        <div className="panel vstack items-start gap-2">
                          <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                            “{testimonial.text}”
                          </p>
                        </div>
                        <div className="panel hstack gap-2 mt-2">
                          <Image
                            className="w-40px h-40px rounded-1-5 box-style"
                            alt={testimonial.name}
                            src={testimonial.imgSrc}
                            width={150}
                            height={150}
                          />
                          <div className="panel vstack justify-center gap-narrow">
                            <ul className="nav-x gap-0 text-warning">
                              {Array(5)
                                .fill()
                                .map((_, starIndex) => (
                                  <li key={starIndex}>
                                    <i className="icon icon-narrow unicon-star-filled" />
                                  </li>
                                ))}
                            </ul>
                            <span className="fw-light ft-secondary m-0">
                              {testimonial.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
