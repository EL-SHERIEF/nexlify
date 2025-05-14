'use client'
import { features14 } from '@/data/features'
import React from 'react'
import Image from 'next/image'
import { useParallax } from 'react-scroll-parallax'
import Link from 'next/link'
export default function RowBentoGrid() {
  const parallax = useParallax({
    translateY: [0, 50],
  })
  return (
    <div
      id="main_features"
      className="key-features section panel overflow-hidden my-4 py-3 bg-section"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-narrow mb-4 sm:mb-8 xl:mb-9 max-w-700px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <span
                className="fw-medium9 fs-5 d-flex align-items-center text-primary"
                style={{ width: 'fit-content' }}
              >
                Features
              </span>
              <h2 className="h3 lg:h2 m-0 text-white fw-medium">
                Make data accessible and
                <br />
                <span className="opacity-40">
                  actionable for teams of all sizes.
                </span>{' '}
              </h2>
            </div>
            <div className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2">
              {features14.map((feature, index) => (
                <div key={index}>
                  <div
                    className={`feature-item panel px-4 py-4 box-home-6 ${
                      index === 1 ? 'diff' : ''
                    }`}
                    data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                  >
                    <div className="vstack gap-1 h-100 justify-between">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100">
                          <div>
                            <div className="panel vstack gap-2">
                              <h3 className="fs-6 m-0 text-white fw-light">
                                {feature.title}{' '}
                                <span className="opacity-60">
                                  {feature.description}
                                </span>
                              </h3>
                              {feature.linkText && (
                                <Link
                                  href={feature.linkHref}
                                  className="btn btn-md btn-primary text-black px-narrow mt-2 gap-0 items-center d-flex justify-between w-full"
                                >
                                  <span className="sm:px-1 px-3-narrow">
                                    {feature.linkText}
                                  </span>
                                  <div
                                    className=" bg-black text-white rounded-2  ltr:ms-narrow rtl:rotate-180 d-flex justify-center items-center"
                                    style={{ width: '50px', height: '40px' }}
                                  >
                                    <i className="icon icon-narrow unicon-arrow-right fw-bold" />
                                  </div>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="panel w-100 rounded-2 overflow-hidden img max-h-300px"
                        ref={parallax.ref}
                      >
                        <Image
                          src={feature.imgSrc}
                          width={780}
                          height={728}
                          alt={feature.imgAlt}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
