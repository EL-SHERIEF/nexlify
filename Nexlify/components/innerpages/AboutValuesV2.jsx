import { panelsData } from "@/data/plans";
import React from "react";
import Image from "next/image";

export default function AboutValuesV2() {
  return (
    <div
      id="about_values"
      className="about-values section panel overflow-hidden bg-section"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
          <div className="panel vstack gap-4">
                 <div
              className="panel vstack items-center gap-narrow mb-4 sm:mb-6 max-w-700px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
                 <span className="fw-medium9 fs-5 d-flex align-items-center text-primary" style={{width:'fit-content'}}>
                            Values
                    </span>
              <h2 className="h2 m-0 text-white fw-medium">
              Values that always
              <br />
              <span className="opacity-40">drive us forward</span>{' '} 
                  </h2>
            </div>
              <div
                className="row child-cols-12 sm:child-cols-6 g-2 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {panelsData.map((panel) => (
                  <div key={panel.id}>
                    <div className="panel vstack gap-1 p-3 rounded-2 pb-6  box-home-6">
                     <div className="w-64px lg:w-20px position-relative p-1 rounded-2 bg-box-home-6 mb-2">
                       <Image
                        className="w-full h-full"
                        src={panel.lightImgSrc}
                        width={100}
                        height={100}
                        alt={panel.altText}
                      />
                     </div>
                      <h5 className="h5 lg:h4 m-0 fw-light text-white">{panel.title}</h5>
                      <p className="fs-6 opacity-80 text-white fw-light">
                        {panel.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
