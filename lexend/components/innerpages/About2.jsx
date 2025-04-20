import { panelsData } from "@/data/facts";
import React from "react";
import Image from "next/image";

export default function About2() {
  return (
    <div
      id="about_us"
      className="about-us section panel overflow-hidden"
      data-anime="onview: -100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
    >
      <div className="section-outer panel py-6 xl:py-9 border-1 border border-black">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fw-medium d-flex align-items-center px-2 py-1 text-primary  rounded-pill blur gap-1 m-auto border-1 border border-black shadow-sm " style={{width:'fit-content'}}>
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.2274 8.56904L9.21236 10.1737C8.36695 10.8469 7.94424 11.1836 8.02675 11.5594L8.03114 11.578C8.12514 11.9515 8.66096 12.0951 9.73259 12.3823C10.3281 12.5418 10.6259 12.6216 10.7656 12.8473L10.7727 12.8592C10.9075 13.0876 10.8308 13.3737 10.6775 13.9459L10.6374 14.0954C10.2123 15.6818 9.99979 16.4749 10.4091 16.7311C10.8184 16.9872 11.4697 16.4686 12.7723 15.4314L14.7873 13.8267C15.6327 13.1535 16.0554 12.8169 15.9729 12.441L15.9686 12.4224C15.8745 12.0489 15.3387 11.9053 14.2671 11.6182C13.6716 11.4586 13.3738 11.3788 13.2341 11.1531L13.227 11.1412C13.0922 10.9128 13.1689 10.6267 13.3222 10.0546L13.3623 9.905C13.7873 8.31864 13.9999 7.52547 13.5905 7.26931C13.1812 7.01316 12.5299 7.53179 11.2274 8.56904Z" fill="#1C274C"></path> </g></svg>
                            Power
                    </span>
              <h2 className="h3 lg:h2 mb-4 mt-4" >How nexlify helps</h2>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                Teams use nexlify to improve document workflows, insights, and
                speed while delivering an amazing experience for their
                customers. Businesses trust nexlify’s all-in-one document
                automation software to streamline the process to create,
                approve, and eSign proposals, quotes, contracts, and more. With
                powerful document creation and workflow capabilities, teams can
                provide their customers with a more professional, timely, and
                engaging experience.
              </p>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                In 2014, Steven Smith have gotten so much of our time back that
                we're now able to put towards things that are actually helping
                our company as opposed to just throwing content out there. and
                the idea of nexlify was born. Today, nexlify empowers teams to
                easily communicate with customers through personalized documents
                that can be created in minutes, build meaningful relationships..
              </p>
              <div className="panel mt-8">
                <div className="row child-cols-6 lg:child-cols-4 justify-center g-3 col-match">
                  {panelsData.map((panel, index) => (
                    <div key={index}>
                      <div className="panel vstack gap-1 p-2 border-1 border border-black shadow-sm rounded-2">
                        <h4 className="h2 xl:h1 m-0">
                          <span data-anime={panel.animationData}>
                            {panel.value}
                          </span>
                          {panel.suffix && panel.suffix}
                        </h4>
                        <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70 text-nowrap">
                          {panel.text}
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
  );
}
