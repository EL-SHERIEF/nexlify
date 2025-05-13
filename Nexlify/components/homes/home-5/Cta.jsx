import Image from 'next/image'
import React from 'react'

export default function Cta() {
  return (
    <div
      id="uc_cta"
      className="uc-cta panel overflow-hidden z-1 p-2"
      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;"
    >
      <div className="section-outer py-6 rounded-3 box-style bg-box max-w-xl mx-auto">
        <div className="container">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 text-center px-4 lg:px-6 py-3 lg:py-6">
              <span className="custom-tag mb-2">
                SolutionsTrusted by 10k + businesses
              </span>
              <h2 className="h1 fw-light m-0 text-inherit ls-1 text-dark">
                Build AI-Powered Marketing Now!
              </h2>
              <p className="fs-6 fw-light">
                Automate lead generation and customer engagement in diverse and
                dynamic real-world settings
              </p>
              <div
                className="panel d-flex flex-column flex-wrap items-center justify-center gap-1"
                data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <a
                  href="#"
                  className="btn btn-md btn-primary border px-3 lg:px-5 w-auto"
                >
                  <span>Start your free trial</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
