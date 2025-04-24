"use client";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function BlogDetails2({ blogItem }) {
  return (
    <article className="post type-post single-post pb-4 lg:pb-6 xl:pb-9">
      <div className="container-full">
        <figure className="featured-image m-2">
          <figure className="featured-image rounded ratio ratio-2x1 rounded-2 uc-transition-toggle overflow-hidden">
            <Image
              className="media-cover image uc-transition-scale-up uc-transition-opaque"
              alt={blogItem.title}
              src="/assets/images/blog/post-full.jpg"
              width="1280"
              height="853"
            />
          </figure>
        </figure>
        <div className="post-content-wrap panel">
          <aside
            className="post-share-float d-none lg:d-block"
            data-uc-sticky="bottom: .post-author;"
          >
            <div className="vstack justify-center items-center gap-2 position-absolute top-0 end-0 m-4 xl:m-9">
              <span className="ft-secondary">Spread</span>
              <ul className="social-icons nav-y justify-center gap-2 text-gray-900 dark:text-white">
                <li>
                  <a
                    className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                    href="https://dribbble.com/unistudioinc"
                  >
                    <i className="unicon-logo-x-filled icon-1 xl:icon-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110 text-white bg-primary border-primary"
                    href="https://ui8.net/users/unistudio"
                  >
                    <i className="unicon-logo-linkedin icon-1 xl:icon-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                    href="https://themeforest.net/user/unistudioco"
                  >
                    <i className="unicon-logo-facebook icon-1 xl:icon-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                    href="https://unistudio.co/unicore/"
                  >
                    <i className="unicon-logo-pinterest icon-1 xl:icon-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                    href="https://unistudio.co/unicore/"
                  >
                    <i className="unicon-email icon-1 xl:icon-2" />
                  </a>
                </li>
                <li>
                  <a
                    className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                    href="https://unistudio.co/unicore/"
                  >
                    <i className="unicon-link icon-1 xl:icon-2" />
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <div className="container max-w-900px">
            <div className="post-header mt-4 lg:mt-6 xl:mt-8">
              <div className="panel vstack items-center gap-2 md:gap-3 text-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto">
                <h1 className="h4 sm:h3 xl:h1 m-0">{blogItem.title}</h1>
              </div>
            </div>
            <hr className="w-100 my-4 lg:my-6 xl:my-8 opacity-100 border-gray-100 dark:border-gray-700" />
            <Gallery>
              <div
                className="post-content panel fs-6 md:fs-5"
                data-uc-lightbox="animation: scale"
              >
                <p>
                  Our tech platform, launched four months ago, has become a hub
                  for developers and innovators exploring the latest in AI and
                  cloud computing. We’re redefining how tech insights are shared,
                  focusing on practical solutions for 2025. Industry pioneers
                  emphasize that visual storytelling, not jargon-heavy text, drives
                  engagement. Diverse teams in tech hubs like Seattle and Austin
                  bring unique perspectives, fostering creativity and collaboration.
                </p>
                <p className="mt-3">
                  We connected with software engineers, product managers, and
                  startup founders to understand what fuels their innovation
                  ecosystems.
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
                            alt="Holding flower, by Anthony Tran"
                            src="/assets/images/blog/post-1.jpg"
                            width="1280"
                            height="853"
                            ref={ref}
                          />
                          <a
                            onClick={open}
                            className="position-cover"
                            data-caption="Holding flower, by Anthony Tran"
                          ></a>
                        </figure>
                      )}
                    </Item>
                    <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                      AI Innovation, by Anthony Tran
                    </figcaption>
                  </figure>
                  <p>
                    High-speed networks and collaborative spaces make it easy to
                    access cutting-edge tools and resources. Diversity in tech
                    communities drives innovation by blending varied ideas and
                    approaches.
                  </p>
                  <p className="mt-3">
                    Unlike traditional tech hubs, cities like Raleigh and Boulder
                    are gaining traction as startup-friendly zones, offering
                    affordability and vibrant communities, a local analyst noted.
                  </p>
                  <p className="mt-3">
                    Leading tech firms rely on clear, visual communication to
                    simplify complex concepts, ensuring ideas resonate with global
                    audiences.
                  </p>
                </div>
                <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">Tech Ecosystem Growth</h4>
                <p>
                  In 2025, immersive storytelling is reshaping how tech brands
                  connect with users. The principle of minimizing text in favor of
                  visuals, inspired by early digital pioneers, remains a cornerstone
                  of effective communication. Companies leverage tools like
                  interactive dashboards and AR demos to showcase innovations
                  intuitively, reducing reliance on lengthy explanations.
                </p>
                <p className="mt-3">
                  Raleigh’s tech scene, for instance, thrives on its blend of
                  research institutions and agile startups, distinct from Silicon
                  Valley’s scale, as a local expert explained.
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
                          alt="Pink Marketing, by Mak"
                          src="/assets/images/blog/post-2.jpg"
                          width="1280"
                          height="853"
                          ref={ref}
                        />
                        <a
                          onClick={open}
                          className="position-cover"
                          data-caption="Pink Marketing, by Mak"
                        ></a>
                      </figure>
                    )}
                  </Item>
                  <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                    Cloud Computing Trends, by Mak
                    </figcaption>
                </figure>
                <p>
                  Emerging tech hubs prioritize accessibility, with incubators and
                  co-working spaces fostering collaboration among diverse talent.
                  <br />
                  Visual communication remains key, enabling brands to convey
                  complex ideas with clarity and impact.
                </p>
                <p className="mt-3">
                  A core principle in tech content is to prioritize visuals over
                  text, a strategy embraced by industry leaders to engage users
                  effectively.
                </p>
                <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                  Education and Innovation
                </h4>
                <p>
                  Top-tier universities, like NC State and CU Boulder, anchor tech
                  hubs by producing skilled talent and driving research. These
                  institutions fuel economic growth and create a culture of
                  innovation that attracts global companies.
                </p>
                <p className="mt-3">
                  Boulder’s startup ecosystem, blending corporate investment and
                  entrepreneurial energy, creates a dynamic environment for tech
                  growth, as a local founder shared.
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
                            alt="Great Schools and Entertainment"
                            src="/assets/images/blog/post-3.jpg"
                            width="1280"
                            height="854"
                            ref={ref}
                          />
                          <a
                            onClick={open}
                            className="position-cover"
                            data-caption="Great Schools and Entertainment"
                          ></a>
                        </figure>
                      )}
                    </Item>
                    <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                      Startup Ecosystem
                    </figcaption>
                  </figure>
                  <p>
                    Tech communities thrive on events like hackathons and
                    accelerators, making it easy for professionals to network and
                    innovate. Diversity in these spaces sparks creativity and
                    drives breakthroughs.
                  </p>
                  <p>
                    From blockchain developers to AI researchers, experts stress
                    the value of visual storytelling in aligning teams on complex
                    projects. Clear communication fosters collaboration and
                    accelerates progress.
                  </p>
                </div>
                <p>
                  The tech industry’s guiding rule is to simplify through visuals,
                  ensuring ideas are accessible and impactful for diverse audiences.
                </p>
                <p className="mt-3">
                  We spoke with innovators, educators, and tech leaders about what
                  makes their communities vibrant hubs for growth and creativity.
                </p>
              </div>
            </Gallery>
            <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
              <ul className="nav-x gap-narrow text-primary">
                <li>
                  <span className="text-black dark:text-white me-narrow">
                    Topics:
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
                    Startups
                    <span className="text-black dark:text-white">,</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    Collaboration
                  </a>
                </li>
              </ul>
              <ul className="post-share-icons nav-x gap-narrow">
                <li className="me-1">
                  <span className="text-black dark:text-white">Spread:</span>
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
                      alt="Amir Nisi"
                      src="/assets/images/blog/post-author.jpg"
                      width="1000"
                      height="667"
                    />
                  </figure>
                </div>
                <div className="col">
                  <div className="panel vstack items-start gap-2 md:gap-3">
                    <h4 className="h5 m-0">Liam Harper</h4>
                    <p className="fs-6">
                      Experienced tech writer with 7+ years in the industry,
                      dedicated to crafting compelling narratives for InnoTech
                      to inspire and educate a global audience.
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
                        <a href="#linkedin">
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
                      alt="How can marketing help your business?"
                      src="/assets/images/blog/img-02.jpg"
                      width="1280"
                      height="853"
                    />
                    <Link
                      href={`/blog-details/1`}
                      className="position-cover"
                      data-caption="How can marketing help your business?"
                    ></Link>
                  </figure>
                </div>
                <div className="panel vstack justify-center px-2 gap-1 w-1/3">
                  <span className="fs-7 opacity-60">Previous Post</span>
                  <h6 className="h6 lg:h5 m-0">
                    Scaling Startups with AI
                  </h6>
                </div>
                <Link
                  href={`/blog-details/1`}
                  className="position-cover"
                ></Link>
              </div>
              <div className="new-post panel hstack w-100 sm:w-1/2">
                <div className="panel vstack justify-center px-2 gap-1 w-1/3 text-end rtl:text-start">
                  <span className="fs-7 opacity-60">Next Post</span>
                  <h6 className="h6 lg:h5 m-0">
                    The Future of Blockchain
                  </h6>
                </div>
                <div className="panel hstack justify-center w-100px h-100px">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Top 5 reasons to invest in marketing"
                      src="/assets/images/blog/img-01.jpg"
                      width="1280"
                      height="853"
                    />
                    <Link
                      href={`/blog-details/1`}
                      className="position-cover"
                      data-caption="Top 5 reasons to invest in marketing"
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
              <h4 className="h5 xl:h4 mb-5 xl:mb-6">Explore Related Insights:</h4>
              <div className="row child-cols-6 md:child-cols-4 gx-2 gy-4 sm:gx-3 sm:gy-6">
                <RelatedBlogs />
              </div>
            </div>
            <a
              href="#commont"
              className="btn h-56px w-100 mt-8 xl:mt-9 text-black dark:text-white border border-gray-200 dark:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <span>Add your thoughts to the discussion.</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}