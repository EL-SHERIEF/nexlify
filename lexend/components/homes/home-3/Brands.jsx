import { reviewLogos } from "@/data/brands";
import React from "react";
import Image from "next/image";

export default function Brands() {
  return (
    <div id="trusted_brands" className="trusted-brands section panel">
      <div className="section-outer panel pb-4 lg:pb-6">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="review-brands panel vstack justify-center gap-2 px-3 py-4 sm:px-4 sm:py-6 lg:p-6 text-center overflow-hidden"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
            >
              <h3 className="title h6 sm:h5 lg:h5 fw-normal m-0">
              Trusted by over 14,540 businesses to enhance learning and drive educational growth.</h3>
              <div className="vstack sm:hstack justify-center gap-1 fs-6 text-gray-900 dark:text-white flex-sm-column">
              </div>
              <div className="panel mt-3 sm:mt-4">
                <div className="brands hstack gap-4 justify-between max-w-950px mx-auto" style={{filter:"brightness(0)",opacity:0.7}}>
                  {reviewLogos.map((logo, index) => (
                    <React.Fragment key={index}>
                      <Image
                        src={logo.lightSrc}
                        width={32}
                        height={42}
                        style={{ height: "42px", width: "fit-content" }}
                        alt="Trustpilot"
                        className="dark:d-none"
                      />
                      <span className="opacity-25">|</span>
                    </React.Fragment>
                  ))}
                </div>
                <div className="h-1 border-1 border-black border-top mt-5 mx-auto" style={{width:"60%"}}/>
                <div className="mt-5 mx-auto d-flex flex-row flex-sm-column flex-md-row flex-lg-row flex-wrap justify-content-center align-items-center gap-6 w-fit">                  <div className="cards-home-3-box p-2 d-flex flex-row justify-center items-start gap-2">
                  <Image className="cards-home-3-box p-1 bg-white" src="/assets/images/review-logo/google.webp" width={62} height={62} style={{ height: "62px", width: "fit-content" }} alt="" />
                   <div className="flex-column justify-center items-start d-flex gap-1">
                    <div className="rounded-pill overflow-hidden d-flex flex-row border-gray-100 border-2 border w-fit">
                      <span className="bg-white py-narrow px-2-narrow fs-3 d-flex flex-row w-fit gap-narrow">
                      <svg width={20} height={20} className="text-yellow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#ffc800"></path> </g></svg>
                        4.6</span>
                      <span className="bg-gray-200 py-narrow px-2-narrow fs-3 opacity-50">127</span>
                    </div>
                     <p className="text-gray-300 fs-7">On Google Review</p>
                   </div>
                  </div>
                  <div className="border-left border border-gray-50 w-1 h-72px d-none lg:d-block sm:d-none md:d-none" />
                  <div className="cards-home-3-box p-2 d-flex flex-row justify-center items-start gap-2">
                  <Image className="cards-home-3-box p-1 bg-white" src="/assets/images/review-logo/google.webp" width={62} height={62} style={{ height: "62px", width: "fit-content" }} alt="" />
                   <div className="flex-column justify-center items-start d-flex gap-1">
                    <div className="rounded-pill overflow-hidden d-flex flex-row border-gray-100 border-2 border w-fit">
                      <span className="bg-white py-narrow px-2-narrow fs-3 d-flex flex-row w-fit gap-narrow">
                      <svg width={20} height={20} className="text-yellow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#ffc800"></path> </g></svg>
                        4.6</span>
                      <span className="bg-gray-200 py-narrow px-2-narrow fs-3 opacity-50">127</span>
                    </div>
                     <p className="text-gray-300 fs-7">On Google Review</p>
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