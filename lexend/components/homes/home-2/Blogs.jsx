import { articles } from "@/data/blogs";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Blogs() {
  return (
    <div
      id="blog_posts"
      className="section panel overflow-hidden gap-3 border border-1 border-black"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
                <span className="fw-medium d-flex align-items-center px-2 py-1 text-primary  rounded-pill blur gap-1 m-auto border-1 border border-black shadow-sm " style={{width:'fit-content'}}>
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000000"><g strokeWidth="0"></g><g  strokeLinecap="round" strokeLinejoin="round"></g><g><g> <path d="M421.073,221.719c-0.578,11.719-9.469,26.188-23.797,40.094v183.25c-0.016,4.719-1.875,8.719-5.016,11.844 c-3.156,3.063-7.25,4.875-12.063,4.906H81.558c-4.781-0.031-8.891-1.844-12.047-4.906c-3.141-3.125-4.984-7.125-5-11.844V152.219 c0.016-4.703,1.859-8.719,5-11.844c3.156-3.063,7.266-4.875,12.047-4.906h158.609c12.828-16.844,27.781-34.094,44.719-49.906 c0.078-0.094,0.141-0.188,0.219-0.281H81.558c-18.75-0.016-35.984,7.531-48.25,19.594c-12.328,12.063-20.016,28.938-20,47.344 v292.844c-0.016,18.406,7.672,35.313,20,47.344C45.573,504.469,62.808,512,81.558,512h298.641c18.781,0,36.016-7.531,48.281-19.594 c12.297-12.031,20-28.938,19.984-47.344V203.469c0,0-0.125-0.156-0.328-0.313C440.37,209.813,431.323,216.156,421.073,221.719z"></path> <path d="M498.058,0c0,0-15.688,23.438-118.156,58.109C275.417,93.469,211.104,237.313,211.104,237.313 c-15.484,29.469-76.688,151.906-76.688,151.906c-16.859,31.625,14.031,50.313,32.156,17.656 c34.734-62.688,57.156-119.969,109.969-121.594c77.047-2.375,129.734-69.656,113.156-66.531c-21.813,9.5-69.906,0.719-41.578-3.656 c68-5.453,109.906-56.563,96.25-60.031c-24.109,9.281-46.594,0.469-51-2.188C513.386,138.281,498.058,0,498.058,0z"></path> </g> </g></svg>
                            Read
                    </span>
              <h2 className="h3 lg:h2 xl:h1 max-w-400px lg:max-w-750px m-auto text-center mb-2">
                Gain valuable insights
              </h2>
              <div className="panel">
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 justify-center g-2 xl:g-4">
                  {articles.map((article, index) => (
                    <div key={index}>
                      <article className="post type-post panel vstack gap-3 rounded-3 p-1 pb-3 shadow-sm border border-1 border-black">
                    
                        <Link
                          className="position-absolute top-0 ltr:start-0 rtl:end-0 m-2 fs-7 fw-bold text-none z-1  text-primary bg-white shadow-sm border-1 border-black border py-narrow px-1 rounded-pill"
                          href={`/blog`}
                          style={{ borderRadius: 8 }}
                        >
                          {article.category}
                        </Link>
                        <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden border border-1 border-black">
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
                          <h3 className="h5 xl:h4 m-0 text-start m-0">
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
                                  href={`/blog-author/Amir Khan`}
                                  className="text-none fw-bold text-dark dark:text-white"
                                >
                                  {article.author}
                                </Link>
                              </div>
                            </li>
                            <li className="opacity-50">•</li>
                            <li>
                              <div className="post-date hstack gap-narrow">
                                <span>{article.date}</span>
                              </div>
                            </li>
                          </ul>
                        </header>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={`/blog`}
                className="uc-link fw-bold d-inline-flex items-center gap-narrow"
              >
                <span>View more articles</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
