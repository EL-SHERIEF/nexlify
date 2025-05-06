"use client";
import { pricingPlans3 } from "@/data/pricing";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [showFullFeatures, setShowFullFeatures] = useState(false);
  return (
    <div id="pricing" className="pricing section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9 lg:mx-2 mt-2">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="pricing-tables panel vstack justify-center items-center gap-4"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="section-header vstack items-center gap-2"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
        <span className="custom-tag-sm mb-2"> Transparent Pricing, No Surprises</span>
               <h2 className="h1 fw-light m-0 text-inherit ls-1 text-dark">
               Flexible Plans for All
                </h2>
                <p className="fs-6 fw-light">Choose a plan that fits your goals and scale as you grow</p>
              </div>
              <div
                className="panel w-100"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <ul
                  className="box-style bg-little-elements uc-subnav uc-subnav-pill gap-1 uc-child-width-expand rounded-1-5 p-narrow max-w-xs mx-auto"
                  data-uc-switcher="swiping: false;"
                  role="tablist"
                >
                  <li
                    className={!isYearly ? "style-box bg-box-600 rounded-1-5" : ""}
                    onClick={() => setIsYearly(false)}
                  >
                    <a className="d-flex justify-center text-dark">
                      Monthly
                    </a>
                  </li>
                  <li
                    className={isYearly ? "style-box bg-box-600 rounded-1-5" : ""}
                    onClick={() => setIsYearly(true)}
                  >
                    <a className="d-flex justify-center text-dark">
                      Yearly
                    </a>
                  </li>
                </ul>
                <div className="uc-switcher mt-4 lg:mt-6">
                  <li
                    className="uc-active"
                    id="uc-switcher-24"
                    role="tabpanel"
                    aria-labelledby="uc-switcher-23"
                  >
                    <Swiper
                      spaceBetween={24}
                      slidesPerView={1.1}
                      breakpoints={{
                        0: {
                          slidesPerView: 1.1,
                        },
                        640: { slidesPerView: 2.1, spaceBetween: 16 },
                        768: { slidesPerView: 3, spaceBetween: 16 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                      }}
                      observeSlideChildren
                      className="swiper overflow-unset swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
                    >
                      {pricingPlans3.map((plan, index) => (
                        <SwiperSlide key={index}>
                          <div className="pricing-box box-style-sm panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 text-dark bg-box">
                            <span className="pricing-box-title fs-5 fw-bold py-narrow">
                              {plan.title}
                            </span>
                            <p className="pricing-box-desc opacity-70">
                              {plan.description}
                            </p>
                            <div className="pricing-box-price hstack gap-narrow items-end mt-2">
                              <h4 className="price h1 lg:display-5 m-0 text-inherit">
                                ${isYearly ? plan.price * 10 : plan.price}
                              </h4>
                              <span className="duration fs-7 opacity-70">
                                / {isYearly ? "year" : "month"}
                              </span>
                            </div>
                            <p className="pricing-box-bill fs-7 opacity-70">
                              Billed once {isYearly ? "yearly" : "monthly"}
                            </p>
                            <Link
                                href={plan.link}
                                className={`btn btn-md ${plan.buttonClass} border w-full mt-3`}
                              >
                                {plan.title === "Business"
                                  ? "Get in touch"
                                  : "Try for free"}
                              </Link>
                            <hr />
                            <ul className="nav-y gap-1 fs-6">
                              <li className="mb-1">
                                <b>Standout features</b>
                              </li>
                              {plan.features.map((feature, i) => (
                                <li key={i}>
                                  <Image 
                                    src="/assets/images/template/CheckMark.svg"
                                    width={20}
                                    height={20}
                                    alt="checkmark"
                                    />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <div className="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                           
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </li>
                </div>
                
                <p className="text-center mt-4 lg:mt-6 bg-little-elements w-fit mx-auto px-3 py-2 rounded-1 gap-1 d-flex">
                <svg width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path fillRule="evenodd" clipRule="evenodd" d="M10.7286 3.75C11.359 3.75 11.9344 3.98129 12.3718 4.36223L12.375 4.35908L12.3782 4.36224C12.8156 3.98129 13.391 3.75 14.0214 3.75C15.3903 3.75 16.5 4.84077 16.5 6.18631C16.5 6.8059 16.2647 7.37147 15.8771 7.80139L15.7766 7.90653L12.375 11.25L8.86966 7.80454C8.4821 7.37462 8.25 6.8059 8.25 6.18631C8.25 4.84077 9.35973 3.75 10.7286 3.75ZM12.4334 6.40502L12.375 6.35418L12.3167 6.40494L11.4089 5.51279L11.3866 5.49337C11.2141 5.34311 10.9861 5.25 10.7286 5.25C10.1637 5.25 9.75 5.69346 9.75 6.18631C9.75 6.41252 9.82894 6.61584 9.96114 6.7741L12.375 9.14672L14.7086 6.85302L14.7743 6.78426C14.9182 6.61889 15 6.41187 15 6.18631C15 5.69346 14.5863 5.25 14.0214 5.25C13.7639 5.25 13.5359 5.34311 13.3634 5.49337L13.3411 5.51273L12.4334 6.40502ZM3.75 12H7.5V12.75H12C13.2426 12.75 14.25 13.7574 14.25 15C14.25 16.2426 13.2426 17.25 12 17.25H9.75V15.75H12C12.4142 15.75 12.75 15.4142 12.75 15C12.75 14.5858 12.4142 14.25 12 14.25H7.5V18H8.56066L9.00618 18.4455C9.17136 18.6107 9.40408 18.6895 9.63563 18.6586L18.7627 17.4417C19.1848 17.3854 19.5 17.0254 19.5 16.5996C19.5 16.1304 19.1196 15.75 18.6504 15.75H15V14.25H18.6504C19.9481 14.25 21 15.3019 21 16.5996C21 17.7772 20.1282 18.7729 18.961 18.9285L9.83388 20.1455C9.13922 20.2381 8.44107 20.0017 7.94552 19.5062L7.93934 19.5H7.5V20.25H3.75L3 19.5V12.75L3.75 12ZM6 18.75V13.5H4.5V18.75H6Z" fill="#000000"></path> </g></svg>
                We donate 2% of your membership to pediatric wellbeing
                </p>
              </div>
              <a
                onClick={() => setShowFullFeatures((pre) => !pre)}
                className="btn-primary btn"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <span>
                  <i className="icon-1 fw-bold unicon-add" /> Full list of
                  features
                </span>
              </a>
            </div>
            {showFullFeatures && (
              <div
                className="pricing-features panel overflow-auto p-2 bg-box box-style-sm text-dark rounded-1-5 lg:rounded-2 mt-4 lg:mt-6"
                id="pricing-full-features"
                hidden=""
              >
                <table className="uc-table uc-table-divider uc-table-light">
                  <thead className="table-head sticky-top z-1">
                    <tr className="table-row border-white">
                      <th className="table-header-cell min-w-300px" scope="row">
                        <div className="text-transparent">
                          <span>Sherief</span>
                        </div>
                      </th>
                      <th
                        className="table-header-cell min-w-150px w-1/5"
                        scope="col"
                        id="plan-1"
                      >
                        <div className="title">
                          <div className="h6 lg:h5 m-0 text-dark">
                            <span>Starter</span>
                          </div>
                        </div>
                      </th>
                      <th
                        className="table-header-cell min-w-150px w-1/5"
                        scope="col"
                        id="plan-2"
                      >
                        <div className="title">
                          <div className="h6 lg:h5 m-0 text-dark">
                            <span>Pro</span>
                          </div>
                        </div>
                      </th>
                      <th
                        className="table-header-cell min-w-150px w-1/5"
                        scope="col"
                        id="plan-3"
                      >
                        <div className="title">
                          <div className="h6 lg:h5 m-0 text-dark">
                            <span>Business</span>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    <tr className="table-row table-heading border-0">
                      <th scope="colgroup" colSpan={4} className="py-1 px-0">
                        <div className="h6 m-0 bg-box box-style-sm text-gray-800 w-100 p-2 rounded-default">
                          <span>AI Automation key features</span>
                        </div>
                      </th>
                    </tr>
                    <tr className="table-row border-0">
                      <th scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Users
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span>1 user</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>5 users</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>Unlimited users</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Tracking &amp; notifications
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Real-time analytics
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Files uploads
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span>1GB</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>5GB</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>Unlimited</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            CRM and Zapier integrations
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Unlimited team workspaces
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            SSO support
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="table-body">
                    <tr className="table-row table-heading border-0">
                      <th scope="colgroup" colSpan={4} className="py-1 px-0">
                        <div className="h6 m-0 bg-box box-style-sm text-gray-800 w-100 p-2 rounded-default">
                          <span>Products</span>
                        </div>
                      </th>
                    </tr>
                    <tr className="table-row border-0">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Email Template Builder
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Landing Page Builder
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Reporting &amp; analytics
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            E-commerce and retail
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Large Community
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="table-body">
                    <tr className="table-row table-heading border-0">
                      <th scope="colgroup" colSpan={4} className="py-1 px-0">
                        <div className="h6 m-0 bg-box box-style-sm text-gray-800 w-100 p-2 rounded-default">
                          <span>Chatbots</span>
                        </div>
                      </th>
                    </tr>
                    <tr className="table-row border-0">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            To-Do List
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Reports
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Spreadsheets
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Collaboration
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Chatbots
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="table-body">
                    <tr className="table-row table-heading border-0">
                      <th scope="colgroup" colSpan={4} className="py-1 px-0">
                        <div className="h6 m-0 bg-box box-style-sm text-gray-800 w-100 p-2 rounded-default">
                          <span>AI-Powered Solutions</span>
                        </div>
                      </th>
                    </tr>
                    <tr className="table-row border-0">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Automation
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-box box-style-sm text-gray-800">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Teaming
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Use Case
                          </span>
                          <div
                            data-uc-tooltip="The number of users of each plan."
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            <div
              className="pricing-benefits panel vstack gap-2 lg:gap-3 mt-6 lg:mt-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h4
                className="h3 fw-light m-0"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                What every plan gets you
              </h4>
              <div
                className="row child-cols-6 lg:child-cols g-2 col-match"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px bg-box box-style-sm rounded-2">
                    <span className="icon mb-narrow bg-box box-style-sm p-1 rounded-2">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-01.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      Enrich Data with Context &amp; Risk Management
                    </span>
                  </div>
                </div>
                <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px bg-box box-style-sm rounded-2">
                    <span className="icon mb-narrow bg-box box-style-sm p-1 rounded-2">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-08.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      Intuitive dashboard for at-a-glance insights
                    </span>
                  </div>
                </div>
                <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px bg-box box-style-sm rounded-2">
                    <span className="icon mb-narrow bg-box box-style-sm p-1 rounded-2">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-07.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      Automated data analysis and reporting
                    </span>
                  </div>
                </div>
                <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px bg-box box-style-sm rounded-2">
                    <span className="icon mb-narrow bg-box box-style-sm p-1 rounded-2">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-04.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      Scalable plans to fit any business size
                    </span>
                  </div>
                </div>
                <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px bg-box box-style-sm rounded-2">
                    <span className="icon mb-narrow bg-box box-style-sm p-1 rounded-2">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-05.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      Third-Party Management &amp; AI-Powered Tools
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
