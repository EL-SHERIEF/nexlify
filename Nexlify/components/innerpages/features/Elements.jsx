"use client";
import { slideData, slideData2, slides } from "@/data/elements";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Elements() {
  return (
    <div
      id="builder_elements"
      className="builder-elements section panel  scrollSpysection max-w-xl mx-auto px-4 py-4"
    >
      <div className="section-outer panel pb-6 lg:pb-8 xl:pb-10 text-white">
              <Swiper
                className="swiper mask-x"
                slidesPerView={7}
                spaceBetween={16}
                centeredSlides={true}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                  disableOnInteraction: true,
                  reverseDirection: true,
                }}
                speed={4000}
                allowTouchMove={false}
                     breakpoints={{
                  768: {
                    slidesPerView: 5,
                    spaceBetween: 16,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 16,
                  },
                }}
              >
          {slides.flatMap((slide, index) => 

    <SwiperSlide key={index}>
      <div className="cstack justify-between  p-2-narrow rounded-pill border-none bg-white bg-opacity-5">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
              fill="#ffffff"
            />
          </g>
        </svg>
        <span className="fs-7 md:fs-6 lg:fs-5 fw-medium mx-auto">{slide.label}</span>
      </div>
    </SwiperSlide>
  
)}

              </Swiper>
        
        </div>
    </div>
  );
}
