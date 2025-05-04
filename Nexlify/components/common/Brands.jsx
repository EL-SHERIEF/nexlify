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
        delay: 0, 
        disableOnInteraction: false,
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
    className="brand-item swiper-slide text-center btn-close-white-filter opacity-100"
    key={index}
  >
          <Image
            className="h-40px opacity-100"
            style={{objectFit:"contain",width:"100%",height:"100%"}}
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
