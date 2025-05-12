"use client";
import { slideData } from "@/data/elements";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Elements() {
  return (
    <div
      id="builder_elements"
      className="builder-elements section panel  scrollSpysection py-4 my-1"
    >
      <div className="section-outer panel">
        <div className="container xl:max-w-xl">
            <div
            className="section-inner panel text-center max-w-100"
            data-anime="onview: -100; targets: >*; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);"
          >
            <div className="panel w-100">
            <Swiper
                className="swiper mask-x pb-2"
                slidesPerView={4}
                slidesPerGroup={3}
                spaceBetween={16}
                initialSlide={slideData.length - 3}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                  disableOnInteraction: true,
                  reverseDirection: true,
                waitForTransition: false,
                }}
                delay={0}
                transition={'linear'}
                speed={2000}
                allowTouchMove={true}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                }}
                       >
                {slideData.map((slide, index) => (
                  <SwiperSlide key={index}>
                  <div className="cstack box-style-sm py-1 rounded-1-5 bg-box">
                    <span className="fs-7 md:fs-6 lg:fs-5 fw-medium">
                      {slide.label}
                    </span>
                  </div>
                </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                className="swiper mask-x pb-4"
                slidesPerView={4}
                slidesPerGroup={3}
                spaceBetween={16}
                initialSlide={slideData.length - 3}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                  disableOnInteraction: true,
                  reverseDirection: false,
                waitForTransition: false,
                }}
                delay={0}
                transition={'linear'}
                speed={2000}
                allowTouchMove={true}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                }}
                       >
                {slideData.map((slide, index) => (
                  <SwiperSlide key={index}>
                  <div className="cstack box-style-sm py-1 rounded-1-5 bg-box">
                    <span className="fs-7 md:fs-6 lg:fs-5 fw-medium">
                      {slide.label}
                    </span>
                  </div>
                </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
