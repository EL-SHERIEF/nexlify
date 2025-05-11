import { teamMembers } from "@/data/team";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TeamV2() {
  return (
    <div id="about-team" className="about-team section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
                 <div className="grad-tag">
                   <span>Our team</span>
                 </div>
              <h2 className="h4 sm:h3 lg:h2 m-0 text-center  mb-3 sm:mb-0 ">
                Our Lovely Team
              </h2>
              <div
                className="row child-cols-6 sm:child-cols-4 lg:child-cols-3 col-match gx-2 gy-4"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                data-uc-grid=""
              >
                {teamMembers.map((member, index) => (
                  <div key={index}>
                    <div className="panel vstack gap-2">
                      <Image
                        className="h-100 rounded-1-5 object-fit-cover"
                        src={member.imageSrc}
                        width={400}
                        height={800}
                        alt={member.altText}
                      />
                      <div className="panel vstack items-start gap-0">
                        <h6 className="h6 m-0 fw-light text-white">{member.name}</h6>
                        <span className="fs-7 opacity-70 text-white fw-light opacity-60">
                          {member.position}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={`/page-about`}
                className="uc-link text-white py-1 px-3 shadow-sm bg-primary rounded-2 border border-1 border-black fw-bold d-inline-flex items-center gap-narrow mt-2"
              >
                <span>Get to Know our team</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
