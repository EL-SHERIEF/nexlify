'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { brandsDark } from '@/data/brands'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'

export default function BrandsV2() {
  return (
    <div className="max-w-xl position-relative overflow-hidden mx-auto marquee-wrapper-home-6">
      <p className="fs-7 lh-md opacity-60 text-white flex">
        Our product is featured on
      </p>
      <Swiper
        className="black-shadow-marquee-without-scale"
        slidesPerView={5}
        spaceBetween={16}
        loop={true}
        speed={9000}
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 80,
          },
        }}
      >
        {brandsDark.map((brand, index) => (
          <SwiperSlide className="brand-item swiper-slide" key={index}>
            <Image
              className="brand-item-image image-filter"
              style={{
                objectFit: 'contain',
              }}
              src={brand.src}
              width={250}
              height={120}
              alt={brand.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
