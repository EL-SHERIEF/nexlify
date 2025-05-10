import { testimonials2 } from "@/data/testimonials";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Testimonials() {
  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden "
    >
      <div className="section-outer panel pb-6 xl:pb-9 mt-8 pt-4">
        <div className="container w-full">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div className="d-flex flex-row justify-between w-full items-end">
              <h2 className="h4 sm:h3 lg:h2 m-0 text-start fw-light text-white">
                <span className="opacity-40">Reviews that </span>{' '} 
                  <br/>
                  make us proud
              </h2>
                      <Link
                    href={`/page-pricing`}
                    className="btn btn-md btn-primary text-black px-narrow mt-2 gap-0 items-center d-flex justify-center"
                  >
                    <span className="sm:px-1 px-3-narrow">Leave a review</span>
                     <div className=" bg-black text-white rounded-2  ltr:ms-narrow rtl:rotate-180 d-flex justify-center items-center"
                     style={{width:"50px",height:"40px"}}>
                     <i className="icon icon-narrow unicon-arrow-right fw-bold" />
                     </div>       
                   </Link>
              </div>
              <div
                className="row child-cols-12 sm:child-cols-6 col-match g-2 uc-grid"
                data-uc-grid=""
              >
                {testimonials2.map((item, index) => (
                  <div key={index} className="uc-grid-margin">
                    <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-1-5 testimonial-card-home-6">
                      <div className="panel vstack items-start gap-2">
                        <div className="panel">
                          <div className="d-flex flex-row justify-center items-center gap-narrow" style={{color:"#ffdf7d"}}>
                          <svg width={11} height={11} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#ffdf7d"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path fill="#ffdf7d" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path> </g></svg>
                          <svg width={11} height={11} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#ffdf7d"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path fill="#ffdf7d" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path> </g></svg>
                          <svg width={11} height={11} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#ffdf7d"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path fill="#ffdf7d" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path> </g></svg>
                          <svg width={11} height={11} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#ffdf7d"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path fill="#ffdf7d" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path> </g></svg>
                          <svg width={11} height={11} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#ffdf7d"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path fill="#ffdf7d" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path> </g></svg>

                           </div>
                        </div>
                        <p className="fs-6 lg:fs-5 text-white text-opacity-70">
                          {item.testimonial}
                        </p>
                      </div>
                      <div className="panel hstack gap-2 mt-2 lg:mt-4">
                        <Image
                          className="w-40px rounded-circle"
                          src={item.authorImg}
                          alt={item.authorName}
                          width={150}
                          height={150}
                        />
                        <div className="panel vstack items-start gap-0">
                          <h6 className="h6 m-0 text-white">{item.authorName}</h6>
                          <span className="fs-7 text-white opacity-70">
                            {item.authorRole}
                          </span>
                        </div>
                      </div>
                    </div>{" "}
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
