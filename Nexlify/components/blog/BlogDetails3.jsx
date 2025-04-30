"use client";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function BlogDetails3({ blogItem }) {
  return (
    <>
      <div className="position-absolute top-0 start-0 end-0 min-h-450px lg:min-h-600px xl:min-h-700px 2xl:800px bg-primary m-2 mt-6 md:mt-8 sm:mt-8 lg:mt-8-more rounded-3 z-0" />
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header uc-dark">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-9 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h3 xl:h1 mt-6">{blogItem.title}</h1>
                <ul className="post-share-icons nav-x mt-2 gap-1 dark:text-white">
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-facebook icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-x-filled icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-linkedin icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-pinterest icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-email icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-link icon-1" />
                    </a>
                  </li>
                </ul>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded-3 ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="Unlocking Digital Impact with Innovative Tools"
                    src="/assets/images/blog/post-full.jpg"
                    width="1280"
                    height="853"
                  />
                </figure>
              </figure>
            </div>
          </div>
        </div>
        <div className="panel mt-4 lg:mt-6 xl:mt-9">
          <div className="container max-w-xl">
            <Gallery>
              <div
                className="post-content panel fs-6 md:fs-5"
                data-uc-lightbox="animation: scale"
              >
                <p>
                  Our journey began four months ago, revolutionizing how teams harness technology for growth. We consulted entrepreneurs, software engineers, and designers to understand what drives digital success. Their feedback underscores the value of intuitive systems in transforming workflows. From small startups to global corporations, our platform empowers users to thrive in a fast-evolving tech landscape.
                </p>
                <p className="mt-3">
                  Accessible infrastructure, like cloud-based tools and collaborative hubs, fosters innovation in cities like Raleigh. Nearly half the workforce in such hubs embraces diverse skill sets, enriching creative solutions.
                </p>
                <div className="panel mt-3">
                  <figure className="float-end ms-3 mb-1">
                    <Item
                      original="/assets/images/blog/post-1.jpg"
                      thumbnail="/assets/images/blog/post-1.jpg"
                      width="1280"
                      height="853"
                    >
                      {({ ref, open }) => (
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            alt="Tech Collaboration, by Jamie Lin"
                            src="/assets/images/blog/post-1.jpg"
                            width="1280"
                            height="853"
                            ref={ref}
                          />
                          <a
                            onClick={open}
                            className="position-cover"
                            data-caption="Tech Collaboration, by Jamie Lin"
                          ></a>
                        </figure>
                      )}
                    </Item>
                    <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                      Tech Collaboration, by Jamie Lin
                    </figcaption>
                  </figure>
                  <p>
                    Cloud platforms and shared workspaces simplify access to resources, events, and learning opportunities. Diverse teams contribute to a vibrant ecosystem of ideas.
                  </p>
                  <p className="mt-3">
                    While Boise is nestled near the Rockies, it’s not a ski town, as the slopes are over an hour away, a local noted.
                  </p>
                </div>
                <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">Streamlining Workflows</h4>
                <p>
                  Efficiency is key in modern tech. Our platform’s minimalist design lets teams focus on creativity rather than logistics. Experts highlight that clear, concise tools echo the art of impactful storytelling—less clutter, more substance. Beta users report a 40% reduction in setup time, accelerating project timelines.
                </p>
                <p className="mt-3">
                  Unlike rigid systems, our tools adapt to market shifts, supporting industries from retail to education. Users praise enhanced team synergy and faster decision-making through integrated features.
                </p>
                <figure className="my-3 sm:my-4">
                  <Item
                    original="/assets/images/blog/post-2.jpg"
                    thumbnail="/assets/images/blog/post-2.jpg"
                    width="1280"
                    height="853"
                  >
                    {({ ref, open }) => (
                      <figure className="featured-image m-0 rounded-3 ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                        <Image
                          className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            alt="Digital Efficiency, by Sam Rivera"
                            src="/assets/images/blog/post-2.jpg"
                            width="1280"
                            height="853"
                            ref={ref}
                          />
                          <a
                            onClick={open}
                            className="position-cover"
                            data-caption="Digital Efficiency, by Sam Rivera"
                          ></a>
                        </figure>
                      )}
                    </Item>
                    <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                      Digital Efficiency, by Sam Rivera
                    </figcaption>
                  </figure>
                  <p>
                    Our tools support a variety of sectors, boosting productivity through streamlined processes. Collaboration is seamless, thanks to integrated communication features.
                  </p>
                  <p className="mt-3">
                    Feedback from users continues to shape our platform, ensuring it remains agile and relevant in a dynamic market.
                  </p>
                  <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                    Fostering Innovation
                  </h4>
                  <p>
                    Education fuels progress in tech hubs like Madison, home to a major university with 45,000 students. This academic presence shapes the city’s economy and culture, making it a top innovation center.
                  </p>
                  <p className="mt-3">
                    Our platform’s collaboration tools connect remote teams, sparking creativity across distances. Local tech communities in places like Portland value our platform for uniting distributed teams.
                  </p>
                  <div className="panel my-3">
                    <figure className="float-start me-3 mb-0">
                      <Item
                        original="/assets/images/blog/post-3.jpg"
                        thumbnail="/assets/images/blog/post-3.jpg"
                        width="1280"
                        height="853"
                      >
                        {({ ref, open }) => (
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px uc-transition-toggle overflow-hidden">
                            <Image
                              className="media-cover image uc-transition-scale-up uc-transition-opaque"
                              alt="Innovation Hub"
                              src="/assets/images/blog/post-3.jpg"
                              width="1280"
                              height="854"
                              ref={ref}
                            />
                            <a
                              onClick={open}
                              className="position-cover"
                              data-caption="Innovation Hub"
                            ></a>
                          </figure>
                        )}
                      </Item>
                      <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                        Innovation Hub
                      </figcaption>
                    </figure>
                    <p>
                      Connectivity drives cohesive, forward-thinking projects. User-driven updates ensure our tools remain inclusive and scalable for all.
                    </p>
                    <p>
                      As we evolve, we prioritize accessibility, ensuring businesses of all sizes can leverage our platform to innovate and grow.
                    </p>
                  </div>
                  <p>
                    Our commitment to user feedback keeps our platform at the forefront of technological advancement.
                  </p>
                  <p className="mt-3">
                    We continue to engage with industry leaders to refine our tools, ensuring they meet the needs of a diverse user base.
                  </p>
                </div>
              </Gallery>
              <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
                <ul className="nav-x gap-narrow text-primary">
                  <li>
                    <span className="text-black dark:text-white me-narrow">
                      Tags:
                    </span>
                  </li>
                  <li>
                    <a href="#" className="gap-0">
                      Innovation
                      <span className="text-black dark:text-white">,</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="gap-0">
                      Technology
                      <span className="text-black dark:text-white">,</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="gap-0">
                      Efficiency
                      <span className="text-black dark:text-white">,</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="gap-0">
                      Growth
                    </a>
                  </li>
                </ul>
                <ul className="post-share-icons nav-x gap-narrow">
                  <li className="me-1">
                    <span className="text-black dark:text-white">Share:</span>
                  </li>
                  <li>
                    <a
                      className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-facebook icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-x-filled icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-email icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-link icon-1" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="post-author panel py-4 px-3 sm:p-3 xl:p-4 bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2">
                <div className="row g-4 items-center">
                  <div className="col-12 sm:col-5 xl:col-3">
                    <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                      <Image
                        className="media-cover image uc-transition-scale-up uc-transition-opaque"
                        alt="Lila Moreno"
                        src="/assets/images/blog/post-author.jpg"
                        width="1000"
                        height="667"
                      />
                    </figure>
                  </div>
                  <div className="col">
                    <div className="panel vstack items-start gap-2 md:gap-3">
                      <h4 className="h5 m-0">Lila Moreno</h4>
                      <p className="fs-6">
                        Tech journalist with 7+ years of experience, passionate about crafting narratives that inspire digital transformation.
                      </p>
                      <ul className="nav-x gap-1 text-gray-400 dark:text-white">
                        <li>
                          <a href="#medium">
                            <i className="icon-2 unicon-logo-medium" />
                          </a>
                        </li>
                        <li>
                          <a href="#x">
                            <i className="icon-2 unicon-logo-x-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="#instagram">
                            <i className="icon-2 unicon-logo-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-navigation panel vstack sm:hstack justify-between gap-2 mt-8 xl:mt-9 fdr-min-600">
                <div className="new-post panel hstack w-100 sm:w-1/2">
                  <div className="panel hstack justify-center w-100px h-100px">
                    <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                      <Image
                        className="media-cover image uc-transition-scale-up uc-transition-opaque"
                        alt="How Technology Fuels Business Success"
                        src="/assets/images/blog/img-02.jpg"
                        width="1280"
                        height="853"
                      />
                      <Link
                        href={`/blog-details/1`}
                        className="position-cover"
                        data-caption="How Technology Fuels Business Success"
                      ></Link>
                    </figure>
                  </div>
                  <div className="panel vstack justify-center px-2 gap-1 w-1/3">
                    <span className="fs-7 opacity-60">Prev Article</span>
                    <h6 className="h6 lg:h5 m-0">
                      How Technology Fuels Business Success
                    </h6>
                  </div>
                  <Link
                    href={`/blog-details/1`}
                    className="position-cover"
                  ></Link>
                </div>
                <div className="new-post panel hstack w-100 sm:w-1/2">
                  <div className="panel vstack justify-center px-2 gap-1 w-1/3 text-end rtl:text-start">
                    <span className="fs-7 opacity-60">Next Article</span>
                    <h6 className="h6 lg:h5 m-0">
                      Top 5 Tools for Scaling Operations
                    </h6>
                  </div>
                  <div className="panel hstack justify-center w-100px h-100px">
                    <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                      <Image
                        className="media-cover image uc-transition-scale-up uc-transition-opaque"
                        alt="Top 5 Tools for Scaling Operations"
                        src="/assets/images/blog/img-01.jpg"
                        width="1280"
                        height="853"
                      />
                      <Link
                        href={`/blog-details/1`}
                        className="position-cover"
                        data-caption="Top 5 Tools for Scaling Operations"
                      ></Link>
                    </figure>
                  </div>
                  <Link
                    href={`/blog-details/1`}
                    className="position-cover"
                  ></Link>
                </div>
              </div>
              <div className="post-related panel border-top pt-2 mt-8 xl:mt-9">
                <h4 className="h5 xl:h4 mb-5 xl:mb-6">Related to this topic:</h4>
                <div className="row child-cols-6 md:child-cols-4 gx-2 gy-4 sm:gx-3 sm:gy-6">
                  <RelatedBlogs />
                </div>
              </div>
              <a
                href="#commont"
                className="btn h-56px w-100 mt-8 xl:mt-9 text-black dark:text-white border border-gray-200 dark:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <span>Start the conversation with a comment.</span>
              </a>
            </div>
          </div>
        </article>
      </>
    );
}