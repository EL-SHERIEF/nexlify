import { facts } from "@/data/facts";
import { panelData } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Facts() {
  return (
    <div
      hidden=""
      id="about_values"
      className="about-values section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4">
            <span className="fw-medium d-flex align-items-center px-2 py-1 text-primary  rounded-pill blur gap-1 m-auto border-1 border border-black shadow-sm " style={{width:'fit-content'}}>
            <svg  width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path fillRule="evenodd" clipRule="evenodd" d="M6.23607 1C5.09976 1 4.06097 1.64201 3.55279 2.65836L1.14806 7.46782C0.647975 8.46799 0.745665 9.66329 1.40152 10.569L9.57018 21.8495C10.7679 23.5035 13.2321 23.5035 14.4298 21.8495L22.5985 10.569C23.2543 9.66329 23.352 8.468 22.852 7.46782L20.4472 2.65836C19.939 1.64201 18.9003 1 17.7639 1H6.23607ZM5.34165 3.55279C5.51104 3.214 5.8573 3 6.23607 3H8.67428L7.24571 8H3.11804L5.34165 3.55279ZM9.32574 8L10.7543 3H13.2457L14.6743 8H9.32574ZM14.646 10H9.35397L12 18.5996L14.646 10ZM13.929 19.1312L16.7386 10H20.5412L13.929 19.1312ZM16.7543 8L15.3257 3H17.7639C18.1427 3 18.489 3.214 18.6584 3.55279L20.882 8H16.7543ZM3.4588 10H7.26143L10.071 19.1312L3.4588 10Z" fill="#0F0F0F"></path> </g></svg>
                            Values
                    </span>
              <h2
                className="h4 sm:h2 m-0 text-center mb-3"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                Our Values it’s Simple!
              </h2>
              <div
                className="panel vstack g-2 gap-2"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <div
                  className="panel"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-2 justify-between text-center">
                    {panelData.map((panel) => (
                      <div key={panel.id}>
                        <div className="panel vstack items-center gap-2 p-4 lg:py-6 rounded-2 shadow-sm"
                        style={{
                          borderRadius: '12px',
                          border:'solid 1px #e5e7eb'
                        }}>
                          <Image
                            className="w-64px lg:w-80px d-block dark:d-none"
                            src={panel.lightIcon}
                            width={100}
                            height={100}
                            alt={panel.altText}
                          />
                          <Image
                            className="w-64px lg:w-80px d-none dark:d-block"
                            src={panel.darkIcon}
                            width={100}
                            height={100}
                            alt={panel.altText}
                          />
                          <h5 className="h5 lg:h4">{panel.title}</h5>
                          <p className="fs-6 opacity-70 dark:opacity-80">
                            {panel.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="panel">
                  <div className="row child-cols-6 lg:child-cols-3 col-match g-2 text-start">
                    {facts.map((item) => (
                      <div key={item.id}>
                        <div className="panel vstack gap-1 bg-white p-3 rounded-2 dark:bg-gray-800 shadow-sm"
                         style={{ transform: "translateY(0px)",
                          opacity: 1,
                          borderRadius: '12px',
                          boxshadow: 'rgba(0, 0, 0, 0.05) 2px 2px 5px 0px',
                          border:'solid 1px #e5e7eb'
                       }}>
                          <h4 className="h2 xl:display-5 m-0">
                            <span data-anime={item.animation}>
                              {item.year || item.count}
                            </span>
                            {item.suffix && item.suffix}
                          </h4>
                          <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                            {item.description}
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
      </div>
    </div>
  );
}
