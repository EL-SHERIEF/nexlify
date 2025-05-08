import { teamMembers4 } from "@/data/team";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  return (
    <div
      id="team"
      className="team section panel overflow-hidden  scrollSpysection mx-2"
    >
      <div className="section-outer panel py-6 xl:py-10 overflow-hidden mx-2 rounded-2 lg:rounded-3 bg-primary text-white bg-opacity-10">
      <div className="position-cover opacity-70 bg-contain" style={{ backgroundPosition: "50% 85%" }} data-src="/assets/images/template/pricing-06-bg-masked.png" data-uc-img=""  />
      <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
        <div className="container xl:max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="heading vstack items-center gap-2 panel max-w-700px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
     <div className="grad-tag">
                  <span>Team</span>
              </div>
                <h2 className="title h3 lg:h2 xl:h1 m-0 px-2 text-white">
                  behind this great app
                </h2>
                <p className="fs-6 xl:fs-5 text-white text-opacity-70">
                  Our philosophy is simple — hire a team of diverse, passionate
                  people and foster a culture that empowers you to do your best
                  work.
                </p>
              </div>
              <div className="content panel w-100">
                <div
                  className="row child-cols-6 sm:child-cols-4 col-match g-2"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  {teamMembers4.map((member, index) => (
                    <div key={index}>
                      <div className="panel vstack items-center gap-2 text-center p-3 lg:p-5 rounded-2 lg:rounded-3 custom-element">
                        <Image
                          className="w-80px md:w-100px lg:w-150px h-80px md:h-100px lg:h-150px bg-gray-25 rounded-circle"
                          src={member.imgSrc}
                          width={560}
                          height={592}
                          alt={member.alt}
                        />
                        <div className="panel vstack items-center gap-narrow">
                          <h6 className="h6 lg:h5 lh-lg m-0 text-white">{member.name}</h6>
                          <span className="fs-7 lg:fs-6 lh-lg opacity-70">
                            {member.role}
                          </span>
                        </div>
                        <div className="hstack justify-center gap-1">
                          <a href="#" className="uc-link text-white">
                            <i className="icon icon-1 unicon-logo-linkedin  bg-transparent shadow-none p-0" />
                          </a>
                          <a href="#" className="uc-link text-white">
                            <i className="icon icon-1 unicon-logo-facebook  bg-transparent shadow-none p-0" />
                          </a>
                          <a href="#" className="uc-link text-white">
                            <i className="icon icon-1 unicon-logo-x  bg-transparent shadow-none p-0" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div>
                  <div className="features-item-more cstack gap-1 md:gap-2 flex-column">
                    <Link
                      href={`/page-features`}
                      className="uc-link w-40px md:w-48px lg:w-80px h-40px md:h-48px lg:h-80px rounded-circle cstack custom-element text-primary justify-center items-center"
                    >
                      <i className="icon icon-narrow icon-3 unicon-arrow-up-right fw-bold rtl:-rotate-90" />
                    </Link>
                    <span className="fs-7 fs-6 fw-medium text-white opacity-75">
                      Join Us
                    </span>
                  </div>
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
