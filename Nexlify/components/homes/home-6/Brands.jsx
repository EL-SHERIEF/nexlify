"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { brandsDark } from "@/data/brands";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function Brands() {
  return (
    <Swiper
    className=" black-shadow-marquee"
      slidesPerView={5}
      centeredSlides={true}
      centeredSlidesBounds={true}
      loop={true}
      speed={5000}
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
      {brandsDark.map((brand, index) => (
        <SwiperSlide
          className="brand-item swiper-slide"
          key={index}
          style={{height:"fit-content",width:"fit-content"}}
        >
          <Image
            className="brand-item-image image-filter"
            style={{objectFit:'contain',height:"150px",width:"250px"}}
            src={brand.src}
            width={250}
            height={120}
            alt={brand.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
