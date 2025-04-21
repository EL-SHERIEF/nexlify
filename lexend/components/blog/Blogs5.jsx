import { blogsPosts4 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../common/Pagination";
import bg from "@/public/assets/images/landing/hero-bg-2.jpg";

export default function Blogs5() {
  return (
    <div className="section pb-6 lg:pb-8 pt-0 sm:pt-4 ">
      <div className="container max-w-xl">
      <div
            className="section-inner panel vstack gap-2"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100);">
                <header className="my-2 vstack items-center gap-2 lg:gap-4  mb-2 mx-auto text-center text-white py-4 sm:py-6 lg:py-8"
                                    style={{
                                     width: '100%',
                                     borderRadius: '20px',
                                     backgroundImage: `url(${bg.src})`,
                                     backgroundSize: 'cover',
                                     backgroundPosition: 'start center',
                                     backgroundRepeat: 'no-repeat',
                                   }}>
                                      <span className="fw-medium d-flex align-items-center px-2 py-1 bg-white bg-opacity-10 rounded-pill blur gap-1 m-0" style={{border:'solid 1px rgba(255, 255, 255, 0.38)'}}>
                                      <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000000"><g strokeWidth="0"></g><g  strokeLinecap="round" strokeLinejoin="round"></g><g><g> <path d="M421.073,221.719c-0.578,11.719-9.469,26.188-23.797,40.094v183.25c-0.016,4.719-1.875,8.719-5.016,11.844 c-3.156,3.063-7.25,4.875-12.063,4.906H81.558c-4.781-0.031-8.891-1.844-12.047-4.906c-3.141-3.125-4.984-7.125-5-11.844V152.219 c0.016-4.703,1.859-8.719,5-11.844c3.156-3.063,7.266-4.875,12.047-4.906h158.609c12.828-16.844,27.781-34.094,44.719-49.906 c0.078-0.094,0.141-0.188,0.219-0.281H81.558c-18.75-0.016-35.984,7.531-48.25,19.594c-12.328,12.063-20.016,28.938-20,47.344 v292.844c-0.016,18.406,7.672,35.313,20,47.344C45.573,504.469,62.808,512,81.558,512h298.641c18.781,0,36.016-7.531,48.281-19.594 c12.297-12.031,20-28.938,19.984-47.344V203.469c0,0-0.125-0.156-0.328-0.313C440.37,209.813,431.323,216.156,421.073,221.719z"></path> <path d="M498.058,0c0,0-15.688,23.438-118.156,58.109C275.417,93.469,211.104,237.313,211.104,237.313 c-15.484,29.469-76.688,151.906-76.688,151.906c-16.859,31.625,14.031,50.313,32.156,17.656 c34.734-62.688,57.156-119.969,109.969-121.594c77.047-2.375,129.734-69.656,113.156-66.531c-21.813,9.5-69.906,0.719-41.578-3.656 c68-5.453,109.906-56.563,96.25-60.031c-24.109,9.281-46.594,0.469-51-2.188C513.386,138.281,498.058,0,498.058,0z"></path> </g> </g></svg>
                                      Read
                       </span>
                 <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0 text-inherit pb-4">
                   
                   Blog 4 Cols
                 </h1>
               </header>
          <div className="row g-4 xl:g-8">
            <div className="col">
              <div className="panel text-center">
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 xl:child-cols-3 col-match g-2">
                  {blogsPosts4.slice(0, 8).map((elm, i) => (
                      <div key={i}>
                      <article className="post type-post panel vstack gap-3 rounded-2 p-1 pb-3 border-1 border-black border shadow-sm">
                        <Link
                          className="position-absolute top-0 ltr:start-0 rtl:end-0 m-2 fs-7 fw-bold text-none z-1 border-1 border-black border bg-white text-primary shadow-sm py-narrow px-1 rounded-pill"
                          href={`/blog`}
                        >
                          {elm.category}
                        </Link>
                        <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden border-1 border-black border">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src={elm.imgSrc}
                            width={1280}
                            height={853}
                            alt="Top 5 reasons to invest in marketing"
                          />
                          <Link
                            href={`/blog-details/${elm.id}`}
                            className="position-cover"
                            data-caption="Top 5 reasons to invest in marketing"
                          ></Link>
                        </figure>
                        <header className="panel vstack items-start gap-1 lg:gap-2 px-2 ">
                          <h3 className="h5 xl:h4 m-0 text-start m-0">
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
                                  alt="Sarah"
                                  className="w-24px h-24px rounded-circle me-narrow"
                                />
                                <Link
                                  href={`/blog-author/Amir Khan`}
                                  className="text-none fw-bold text-dark dark:text-white"
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
                        </header>
                      </article>
                    </div>
                  ))}
                </div>
                <div className="nav-pagination pt-3 mt-6 lg:mt-9 border-top border-gray-100 dark:border-gray-800">
                  <ul
                    className="nav-x uc-pagination hstack gap-1 justify-center ft-secondary py-3"
                    data-uc-margin=""
                  >
                    <Pagination />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
