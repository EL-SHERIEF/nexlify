import { features15 } from '@/data/features'
import Image from 'next/image'
import React from 'react'

export default function Features() {
  return (
    <div
      id="main_features"
      className="main-features section panel  pt-8 lg:pt-0"
    >
      <div className="section-outer panel pt-6 md:pt-8 xl:pt-10">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 mb-2 sm:mb-5 lg:mb-5 max-w-650px mx-auto text-center text-gray-500"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="custom-tag-sm mb-2">Live Oversight</span>
              <h2 className="h1 fw-light m-0 text-inherit ls-1">
                Comprehensive Features
              </h2>
              <p className="fs-6 fw-light">
                Track every campaign and customer interaction to refine
                engagement strategies
              </p>
            </div>
            <div
              className="row child-cols-12 md:child-cols-6 lg:child-cols-4 col-match g-3"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {features15.map((feature, index) => (
                <div key={index}>
                  <div className="panel overflow-hidden text-gray-900 rounded-2 box-style bg-box justify-between d-flex flex-column">
                    <div className="panel vstack items-start gap-2 p-3 lg:p-4 pb-0">
                      <h4 className="h4 m-0 text-inherit fw-light ls-1">
                        {feature.title}
                      </h4>
                      <p className="fs-6 opacity-50">{feature.description}</p>
                      {feature.link && (
                        <a
                          href={feature.link.href}
                          className="btn btn-sm btn-primary border px-2 mt-2"
                        >
                          <span> {feature.link.text}</span>
                          <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                        </a>
                      )}
                    </div>
                    <div className="panel p-1 box-style-sm m-2 rounded-2 bg-box">
                      <Image
                        className="rounded-1-5"
                        style={{
                          width: '100%',
                          height: '300px',
                          objectFit: 'cover',
                        }}
                        alt=""
                        src={feature.imgSrc}
                        width={680}
                        height={680}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="md:col-6">
                <div className="panel overflow-hidden bg-primary box-style text-white rounded-2  pt-4 lg:pt-0">
                  <div className="panel vstack items-center text-center gap-2 p-3 lg:p-4 xl:p-6">
                    <h4 className="h2 fw-light m-0 text-inherit">
                      Scalable plans to fit any business size
                    </h4>
                    <p className="fs-6 m-0">
                      Maximize your productivity by connecting our SaaS solution
                      to the other business apps you rely on, creating a
                      frictionless workflow.
                    </p>
                  </div>
                  <div className="panel px-3 lg:px-4 xl:px-6 mb-2 lg:mb-5">
                    <Image
                      alt="builder-tools"
                      src="/assets/images/template/home-06-builder-tools.webp"
                      width={1280}
                      height={800}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div className="panel vstack justify-content-between overflow-hidden min-h-600px bg-box box-style text-gray-500 rounded-2 pt-4 lg:pt-0">
                  <div className="panel vstack items-center text-center gap-2 p-3 lg:p-4 xl:p-6">
                    <h4 className="h2 fw-light m-0 text-inherit">
                      Dedicated customer support
                    </h4>
                    <p className="fs-6 m-0">
                      Rely on our knowledgeable support team to help you get the
                      most out of our platform. We're available to answer
                      questions and provide guidance.
                    </p>
                    <a
                      href="#"
                      className="btn btn-sm btn-primary border px-2 mt-2"
                    >
                      <span>Contact us</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                  <div className="panel  position-relative">
                    <div className="panel p-1 box-style-sm m-2 rounded-2 bg-box">
                      <Image
                        className="rounded-1-5 max-h-400px lg:max-h-450px"
                        style={{ objectFit: 'cover', objectPosition: 'start' }}
                        alt=""
                        src="/assets/images/landing/Hero-1-11.webp"
                        width={680}
                        height={680}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
