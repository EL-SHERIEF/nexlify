"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Features() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel pb-6 xl:pb-9 pt-9">
        <div className="container max-w-xl lg:max-w-lg">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
          >
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-700px mx-auto text-center">
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Smart AI Features
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                We improve your workflow with our smart AI features, so you can focus on bigger scale work Easily and without any hassles. 
              </p>
            </div>
            <div className="panel vstack gap-4 xl:gap-6">
              <div className="panel rounded-pill" style={{
                borderRadius: '12px',
                boxShadow: 'rgba(0, 0, 0, 0.1) 2px 2px 20px 1px',
                border:'solid 1px #e5e7eb'
              }}>
                <ul
                  className="main-features-nav hstack text-center overflow-auto"
                  data-uc-switcher="connect: .main-features-switcher; active: 1; animation: uc-animation-fade;"
                  role="tablist"
                >
                  <li
                    className={`${activeTab == 1 ? "border border-2 border-primary m-1 rounded-pill text-primary py-2" : ""}`}
                    onClick={() => setActiveTab(1)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">Content</a>
                  </li>
                  <li
                    onClick={() => setActiveTab(2)}
                    className={`${activeTab == 2 ? "border border-2 border-primary m-1 rounded-pill text-primary py-2" : ""}`}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">Social Media</a>
                  </li>
                  <li
                    className={`${activeTab == 3 ? "border border-2 border-primary m-1 rounded-pill text-primary py-2" : ""}`}
                    onClick={() => setActiveTab(3)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">
                    Monitoring
                    </a>
                  </li>
                  <li
                    className={`${activeTab == 4 ? "border border-2 border-primary m-1 rounded-pill text-primary py-2" : ""}`}
                    onClick={() => setActiveTab(4)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">Analytics</a>
                  </li>
                </ul>
              </div>
              <div
                className="main-features-switcher uc-switcher overflow-hidden"
                role="presentation"
                style={{ touchAction: "pan-y pinch-zoom" }}
              >
                {activeTab == 1 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 shadow-sm border-1 border rounded-3 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="Share tools quickly and confidently in minutes"
                              src="/assets/images/template/feature-image-02.jpg"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    Share tools quickly and confidently in
                                    minutes
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    This powerfull tool eliminates the need to
                                    leave Salesforce to get things done as I can
                                    create a custom proposal with dynamic
                                    pricing tables. You can also customize your
                                    own dynamic versions.
                                  </p>
                                 <Link
                                    href="/page-features"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2 text-white py-1 px-3 shadow-sm bg-primary rounded-2 border border-1 border-black fw-bold"
                                    style={{
                                      width: "fit-content",
                                    }}
                                  >
                                    <span>Let's find out</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 2 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 shadow-sm border-1 border rounded-3 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="Connect every part of your entire business"
                              src="/assets/images/template/feature-image-03.jpg"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    Connect every part of your entire business
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    Keep data consistent, with native CRM
                                    integrations that streamline your entire
                                    Tool workflow.
                                  </p>
                                  <a
                                    href="#"
                                        className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2 text-white py-1 px-3 shadow-sm bg-primary rounded-2 border border-1 border-black fw-bold"
                                    style={{
                                      width: "fit-content",
                                    }}
                                  >
                                    <span>See all integrations</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 3 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1  shadow-sm border-1 border rounded-3 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="Maintain compliance and control your apps"
                              src="/assets/images/template/feature-image-01.jpg"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    Maintain compliance and control your apps
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    Improve security and trust with built-in
                                    legally binding e-Signatures. Create
                                    pre-approved templates, content blocks and
                                    lock all legal information to prevent costly
                                    mistakes.
                                  </p>
                                <Link
                                    href="/page-features"
                                        className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2 text-white py-1 px-3 shadow-sm bg-primary rounded-2 border border-1 border-black fw-bold"
                                    style={{
                                      width: "fit-content",
                                    }}
                                  >
                                    <span>Let's find out</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 4 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 shadow-sm border-1 border rounded-3 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="Do more work at less time "
                              src="/assets/images/template/feature-image-04.jpg"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    Do more work at less time using AI
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    Get real-time access to approvals, comments
                                    and version tracking. Smart features like
                                    variables and conditional logic help you
                                    eliminate Tool errors.
                                  </p>
                                  <Link
                                    href="/page-features"
                                        className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2 text-white py-1 px-3 shadow-sm bg-primary rounded-2 border border-1 border-black fw-bold"
                                    style={{
                                      width: "fit-content",
                                    }}
                                  >
                                    <span>Let's find out</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  