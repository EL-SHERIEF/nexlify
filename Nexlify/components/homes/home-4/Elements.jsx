"use client";
import { slideData, slideData2, slides } from "@/data/elements";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Elements() {
  return (
    <div
      id="builder_elements"
      className="builder-elements section panel  scrollSpysection"
    >
      <div className="section-outer panel pb-6 lg:pb-8 xl:pb-10">
        <div className="container xl:max-w-xl  p-4 md:p-6 lg:p-8  bg-dark  border border-2 border-gray-10 text-white rounded-2 lg:rounded-4">
        <div className="position-cover bg-gradient-to-t from-primary via-transparent to-primary" />
        <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light" />          <div
            className="section-inner panel vstack items-center gap-3 xl:gap-4 text-center max-w-100"
            data-anime="onview: -100; targets: >*; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);"
          >
            <h4 className="h5 fw-medium m-0 text-white pb-3">Enhance your SaaS or startup site with powerful features using Nexlify</h4>
            <div className="panel w-100">
              <Swiper
                className="swiper mask-x"
                slidesPerView={2.5}
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
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                }}
              >
                {slides.map((slide, index) => (
         <SwiperSlide key={index}>
         <div className="cstack gap-2 md:gap-3 p-1 md:p-2 custom-element">
           <Image
             className="icon icon-1 md:icon-3 lg:icon-4 text-white"
             src={slide.src}
             width={32}
             height={32}
             alt={slide.alt}
             data-uc-svg=""
           />
           <span className="fs-7 md:fs-6 lg:fs-5 fw-medium">
             {slide.label}
           </span>
         </div>
       </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                style={{ transform: "rotate(180deg) !importent" }}
                className="swiper mask-x my-2 md:my-3"
                slidesPerView={2.5}
                slidesPerGroup={1}
                spaceBetween={16}
                // initialSlide={slideData.length - 3}
                // loop={true}
                modules={[Autoplay]}
                autoplay={{
                  disableOnInteraction: true,
                  // reverseDirection: true,
                  // waitForTransition: false,
                }}
                speed={4000}
                allowTouchMove={false}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                }}
              >
                {slideData.map((slide, index) => (
                  <SwiperSlide key={index}>
                  <div className="cstack gap-2 md:gap-3 p-1 md:p-2 custom-element">
                    <Image
                      className="icon icon-1 md:icon-3 lg:icon-4 text-white"
                      src={slide.src}
                      width={32}
                      height={32}
                      alt={slide.alt}
                      data-uc-svg=""
                    />
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
