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
                   <div
              className="panel vstack items-center gap-narrow mb-4 sm:mb-6 max-w-700px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
                 <span className="fw-medium9 fs-5 d-flex align-items-center text-primary" style={{width:'fit-content'}}>
                           Team
                    </span>
              <h2 className="h2 m-0 text-white fw-medium">
              The team behind Nexlify
              <br />
                  </h2>
            </div>
              <div
                className="row child-cols-6 sm:child-cols-4 lg:child-cols-3 col-match gx-2 gy-4"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                data-uc-grid=""
              >
                {teamMembers.map((member, index) => (
                  <div key={index}>
                    <div className="panel vstack gap-2">
                      <Image
                        className="h-100 rounded-2 object-fit-cover"
                        src={member.imageSrc}
                        width={400}
                        height={800}
                        alt={member.altText}
                      />
                      <div className="panel vstack items-start gap-0">
                        <h6 className="h6 m-0 fw-light text-white pb-narrow">{member.name}</h6>
                        <span className="fs-7 opacity-70 text-white fw-light opacity-60">
                          {member.position}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                      <Link
                    href={`/page-pricing`}
                    className="btn btn-md btn-secondary text-black min-w-150px px-narrow mt-narrow gap-0 items-center d-flex justify-center mb-6 mt-3"
                  >
                    <span className="px-3-narrow">Discover opening opportunities</span>
                     <div className=" bg-black text-white rounded-2  ltr:ms-narrow rtl:rotate-180 d-flex justify-center items-center"
                     style={{width:"50px",height:"40px"}}>
                     <i className="icon icon-narrow unicon-arrow-right fw-bold" />
                     </div>       
                   </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
