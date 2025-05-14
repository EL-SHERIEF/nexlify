'use client'
import { slideData } from '@/data/elements'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

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
                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={16}
                loop={true}
                speed={5000}
                modules={[Autoplay]}
                autoplay={{
                  reverseDirection: true,
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
              >
                {slideData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="cstack box-style-sm py-1 rounded-1-5 bg-box ">
                      <span
                        className="fs-7 md:fs-6 lg:fs-5 fw-medium"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        {slide.label}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                className="swiper mask-x pb-4"
                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={16}
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
                  },
                  768: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                  },
                }}
              >
                {slideData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="cstack box-style-sm py-1 rounded-1-5 bg-box">
                      <span
                        className="fs-7 md:fs-6 lg:fs-5 fw-medium"
                        style={{ whiteSpace: 'nowrap' }}
                      >
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
  )
}
