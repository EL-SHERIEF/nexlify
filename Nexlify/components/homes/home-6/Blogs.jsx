import { articles } from "@/data/blogs";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Blogs() {
  return (
    <div
      id="blog_posts"
      className="section panel overflow-hidden gap-3"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container w-full">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
     <div className="d-flex flex-row justify-between w-full items-end">
              <h2 className="h4 sm:h3 lg:h2 m-0 text-start fw-light text-white">
                <span className="opacity-40">Feature </span>{' '} 
                  <br/>
                 Insights
              </h2>
                      <Link
                    href={`/blog`}
                    className="btn btn-md btn-primary text-black px-narrow mt-2 gap-0 items-center d-flex justify-center"
                  >
                    <span className="sm:px-1 px-3-narrow">See all</span>
                     <div className=" bg-black text-white rounded-2  ltr:ms-narrow rtl:rotate-180 d-flex justify-center items-center"
                     style={{width:"50px",height:"40px"}}>
                     <i className="icon icon-narrow unicon-arrow-right fw-bold" />
                     </div>       
                   </Link>
              </div>
              <div className="panel mt-3 w-full">
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 justify-center g-2 ">
                  {articles.map((article, index) => (
                    <div key={index}>
                      <article className="post type-post panel vstack gap-2">
                        <Link
                          className="position-absolute ltr:end-0 rtl:start-0 rounded-1-5 fs-7 fw-light z-1  text-white bg-black py-narrow px-1"
                          style={{ top: "-10px" }}
                          href={`/blog`}
                        >
                          {article.category}
                        </Link>
                        <figure className="featured-image m-0 ratio-1x1 rounded-1-5 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src={article.imgSrc}
                            width={1280}
                            height={854}
                            alt={article.imgAlt}
                          />
                          <Link
                            href={`/blog-details/${article.id}`}
                            className="position-cover"
                            data-caption={article.imgAlt}
                          ></Link>
                        </figure>
                        <header className="panel vstack items-start gap-1 lg:gap-2 px-2">
                          <h3 className="fs-4 fw-light m-0 text-start m-0 text-white">
                            <Link
                              className="text-none"
                              href={`/blog-details/${article.id}`}
                            >
                              {article.title}
                            </Link>
                          </h3>
                          <ul className="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                            <li>
                              <div className="hstack gap-narrow ft-tertiary">
                                <Image
                                  src={article.authorImg}
                                  width={150}
                                  height={150}
                                  alt={article.author}
                                  className="w-24px h-24px rounded-circle me-narrow"
                                />
                                <Link
                                  href={`/blog-author/Jackie`}
                                  className="text-none fw-light opacity-50 text-white"
                                >
                                  {article.author}
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </header>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
