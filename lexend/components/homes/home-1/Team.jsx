import { teamMembers } from "@/data/team";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Team() {
  return (
    <div id="about-team" className="about-team section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
                   <span className="fw-medium d-flex align-items-center px-2 py-1 text-primary  rounded-pill blur gap-1 m-auto border-1 border border-black shadow-sm " style={{width:'fit-content'}}>
                   <svg width={20} height={20}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M10 19.748V16.4c0-1.283.995-2.292 2.467-2.868A8.482 8.482 0 0 0 9.5 13c-1.89 0-3.636.617-5.047 1.66A8.017 8.017 0 0 0 10 19.748zm8.88-3.662C18.485 15.553 17.17 15 15.5 15c-2.006 0-3.5.797-3.5 1.4V20a7.996 7.996 0 0 0 6.88-3.914zM9.55 11.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zm5.95 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path> </g> </g></svg>
                           Our team
                    </span>
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
                        className="h-100 rounded-3 object-fit-cover"
                        src={member.imageSrc}
                        width={400}
                        height={800}
                        alt={member.altText}
                      />
                      <div className="panel vstack items-start gap-0">
                        <h6 className="h6 m-0">{member.name}</h6>
                        <span className="fs-7 opacity-70">
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
