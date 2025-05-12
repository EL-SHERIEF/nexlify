import { blogsPosts4 } from "@/data/blogs";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../common/Pagination";

export default function BlogsV2() {
  return (
    <div className="section panel overflow-hidden bg-section">
      <div className="section-outer panel py-6 lg:py-8">
        <div className="container max-w-xl">
          <div
            className="section-inner panel vstack gap-2"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100);">
                           <div
                  className="panel vstack justify-center items-center gap-3 max-w-500px py-4 mb-4 mx-auto px-2 lg:px-0 text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                       <div className="border border-1 text-white d-flex flex-row items-center gap-1 justify-center rounded-pill w-fit bg-black">
                  <span className="fw-medium fs-7 pe-2">Articles</span>
             </div>
             
                  <h1 className="h1 sm:display-5 md:display-4 lg:display-4 xl:display-3 mb-1 text-white">
                  <span className="opacity-40">Nexlify</span>{' '} 
                  <br/>
                 Insights
                  </h1>
                </div>
            <div className="row child-cols-12 sm:child-cols-4 col-match gy-4 xl:gx-4 ">
              {blogsPosts4.slice(0, 1).map((elm, i) => (
                <div key={i} className="col-12">
                  <article className="post type-post panel rounded-3 box-home-6 text-white pb-4">
                    <div className="panel row child-cols-12 md:child-cols-6 items-center g-4">
                      <div>
                        <figure className="featured-image m-0 ratio ratio-4x3 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src={elm.imgSrc}
                            width={1280}
                            height={853}
                            alt="Maximizing your reach with marketing strategies"
                          />
                          <Link
                            href={`/blog-details/${elm.id}`}
                            className="position-cover"
                            data-caption="Maximizing your reach with marketing strategies"
                          ></Link>
                        </figure>
                      </div>
                      <div>
                        <div className="vstack items-start gap-2 lg:gap-3">
                                  <ul className="post-meta nav-x ft-tertiary justify-center fs-7 gap-1">
                            <li>
                              <div className="hstack gap-narrow ft-tertiary">
                                <Image
                                  src={elm.authorImg}
                                  width={150}
                                  height={150}
                                  alt="David"
                                  className="w-24px h-24px rounded-circle me-narrow"
                                />
                                <Link
                                  href={`/blog-author/Jackie`}
                                  className="text-none text-white"
                                >
                                  {elm.authorName}
                                </Link>
                              </div>
                            </li>
                            <li className="opacity-50">•</li>
                            <li>
                              <div className="post-date hstack gap-narrow">
                                <span>{elm.date}</span>
                              </div>
                            </li>
                          </ul>
                          <h3 className="h4 xl:h2 text-start mx-0 lg:w-500px px-0">
                            <Link
                              className="text-white fw-light"
                              href={`/blog-details/${elm.id}`}
                            >
                              {elm.title}
                            </Link>
                          </h3>
                          <p className="fs-6 lg:fs-5 lg:w-500px text-start md:d-none lg:d-block opacity-50">
                            {elm.desc}
                          </p>
                          <Link
                            className="btn btn-secondary text-dark d-inline-flex fs-7 lg:fs-6 sm:mt-2 rounded-2"
                            href={`/blog-details/${elm.id}`}
                          >
                            Continue reading
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
              {blogsPosts4.slice(1, 7).map((elm, i) => (
                <div key={i}>
                     <article className="post type-post panel vstack gap-2">
                        <Link
                          className="position-absolute ltr:end-0 rtl:start-0 rounded-1-5 fs-7 fw-light z-1  text-white bg-black py-narrow px-1"
                          style={{ top: "-10px" }}
                          href={`/blog`}
                        >
                          {elm.category}
                        </Link>
                        <figure className="featured-image m-0 ratio-1x1 rounded-1-5 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src={elm.imgSrc}
                            width={1280}
                            height={854}
                            alt={elm.imgAlt}
                          />
                          <Link
                            href={`/blog-details/${elm.id}`}
                            className="position-cover"
                            data-caption={elm.imgAlt}
                          ></Link>
                        </figure>
                        <header className="panel vstack items-start gap-1 lg:gap-2 px-2">
                          <h3 className="fs-4 fw-light m-0 text-start m-0 text-white">
                            <Link
                              className="text-none"
                              href={`/blog-details/${elm.id}`}
                            >
                              {elm.title}
                            </Link>
                          </h3>
                          <ul className="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                            <li>
                              <div className="hstack gap-narrow ft-tertiary">
                                <Image
                                  src={elm.authorImg}
                                  width={150}
                                  height={150}
                                  alt={elm.authorName}
                                  className="w-24px h-24px rounded-circle me-narrow"
                                />
                                <Link
                                  href={`/blog-author/Jackie`}
                                  className="fw-light opacity-50 text-white"
                                >
                                  {elm.authorName}
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </header>
                      </article>
                </div>
              ))}
            </div>
            <div className="nav-pagination fw-medium">
              <ul
                className="nav-x uc-pagination hstack gap-1 justify-center ft-secondary  py-4"
                data-uc-margin=""
              >
                <Pagination />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
