import { features4 } from '@/data/features'
import React from 'react'
import Link from 'next/link'

export default function KeyFeaturesV2() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden bg-section"
    >
      <div className="section-outer panel py-6 xl:py-9 max-w-xl m-auto">
        <div className="container sm:max-w-md lg:max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4">
              <div
                className="panel vstack items-center gap-narrow mb-4 max-w-700px mx-auto text-center"
                data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <span
                  className="fw-medium9 fs-5 d-flex align-items-center text-primary"
                  style={{ width: 'fit-content' }}
                >
                  Key Features
                </span>
                <h2 className="h3 lg:h2 m-0 text-white fw-medium">
                  Make data accessible and
                  <br />
                  <span className="opacity-40">
                    actionable for teams of all sizes.
                  </span>{' '}
                </h2>
              </div>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {features4.map((feature, index) => (
                    <div key={index}>
                      <div className="feature-item panel p-3 rounded-2 text-white  hover:scale-105  box-home-6 duration-150 transition-all">
                        <div className="vstack panel min-h-250px">
                          <i className="position-absolute top-0 ltr:end-0 rtl:start-0 icon-2 unicon-arrow-up-right rtl:-rotate-90" />
                          <div className="vstack justify-between gap-2 h-100">
                            <div
                              className="box-home-6 rounded-3 h-fit text-primary p-2 flex-0"
                              style={{ width: 'fit-content' }}
                            >
                              <i className={`icon icon-4 ${feature.icon} `} />
                            </div>

                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0 text-inherit">
                                  {feature.title}
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                          <Link
                            href={`/page-features`}
                            className="position-cover"
                          ></Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
