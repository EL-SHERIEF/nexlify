import { integrations } from "@/data/integrations";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Integretion() {
  return (
    <div
      id="integrations"
      className="integrations section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 border-top-1 border border-gray-100">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
              <span className="fw-medium d-flex align-items-center px-2 py-1 text-primary  rounded-pill blur gap-1 m-0 border-1 border border-black shadow-sm">
              <svg fill="#000000" width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="connect"> <g> <path d="M5.9,24c-1.6,0-3.1-0.6-4.2-1.7C0.6,21.2,0,19.7,0,18.1c0-1.6,0.6-3.1,1.7-4.2l3.8-3.8l2,2l2.8-2.8l1.4,1.4l-2.8,2.8 l1.6,1.6l2.8-2.8l1.4,1.4l-2.8,2.8l2,2l-3.7,3.8C9,23.3,7.5,24,5.9,24z M5.5,12.9l-2.3,2.3C2.4,16,2,17,2,18s0.4,2,1.2,2.8 c1.5,1.5,4.1,1.5,5.6,0l2.3-2.4L5.5,12.9z M18.5,13.9l-8.4-8.4l3.7-3.8C14.9,0.6,16.5,0,18,0c1.5,0,3,0.6,4.2,1.7 C23.4,2.8,24,4.3,24,5.9s-0.6,3.1-1.7,4.2L18.5,13.9z M13,5.5l5.5,5.5l2.3-2.3C21.6,7.9,22,7,22,5.9c0-1-0.4-2-1.2-2.8 c-1.5-1.5-4-1.5-5.6,0L13,5.5z"></path> </g> </g> </g></svg>
                            Integrations
                    </span>
                <h2 className="h3 lg:h2 xl:h1 m-0">
                  Boost your efficiency with integrations
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  Connect every part of your business with integrations that
                  will simplify your workflow.
                </p>
              </div>
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {integrations.map((integration, index) => (
                  <div key={index}>
                    <div className="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border border-1 border-black shadow-sm text-dark ">
                      <div className="vstack gap-3">
                        <div className="hstack justify-between items-center">
                          <div className="vstack">
                            <h5 className="h5 m-0 text-dark">
                              {integration.name}
                            </h5>
                            <span className="fs-7 opacity-70 dark:opacity-80">
                              {integration.category}
                            </span>
                          </div>
                          <Image
                            className="w-32px lg:w-40px"
                            src={integration.imageUrl}
                            width={40}
                            height={40}
                            alt={integration.imageAlt}
                          />
                        </div>
                        <p className="fs-6 opacity-70 dark:opacity-80">
                          {integration.description}
                        </p>
                      </div>
                      <Link
                        href={`/page-integrations`}
                        className="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow"
                      >
                        <span>Explore</span>
                        <i className="icon icon-narrow unicon-arrow-right rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={`/page-integrations`}
                className="uc-link text-white py-1 px-3 shadow-sm bg-primary rounded-2 border border-1 border-black fw-bold d-inline-flex items-center gap-narrow"
              >
                <span>Explore all integrations</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
