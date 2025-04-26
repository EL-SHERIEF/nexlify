"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { brands } from "@/data/brands";
import Image from "next/image";

export default function Brands() {
  return (
    <Swiper
      slidesPerView={2}
      centeredSlides={true}
      centeredSlidesBounds={true}
      loop={true}
      speed={10000}
      modules={[Autoplay]}
      autoplay={{
        delay: 0, // Negative delay is not valid, setting to 0 for continuous autoplay
        disableOnInteraction: true,
        pauseOnMouseEnter: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 4,
          centeredSlides: false,
          centeredSlidesBounds: false,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 80,
        },
      }}
      
    >
      {brands.map((brand, index) => (
    <SwiperSlide
    className="brand-item swiper-slide text-center btn-close-white-filter"
    key={index}
  >
          <Image
            className="brand-item-image h-40px"
            style={{objectFit:"contain"}}
            src={brand.src}
            width={300}
            height={100}
            alt={brand.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
