"use client";
import Image from "next/image";
import Link from "next/link";
export default function Contact2() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel pt-8 lg:pt-9 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel my-2"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"    
         >
                    <div
                  className="panel vstack justify-center items-center gap-3 max-w-500px py-4 mb-4 mx-auto px-2 lg:px-0 text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                       <div className="border border-1 text-white d-flex flex-row items-center gap-1 justify-center rounded-pill w-fit bg-black">
                  <span className="fw-medium fs-7 pe-2">Contact</span>
             </div>
             
                  <h1 className="h1 sm:display-5 md:display-4 lg:display-4 xl:display-3 mb-1 text-white">
                  <span className="opacity-40">Turn data</span>{' '} 
                  <br/>
                  into decisions
                  </h1>
                  <p className="fs-5 xl:fs-4 fw-light text-white text-center">
                  <span className="opacity-50">See the info below or drop me a line via the </span>
                  <Link href={`/page-contact`}>contact</Link>
                   <span className="opacity-50"> form </span>
                  </p>
                </div>
  
            <div className="panel rounded-3 overflow-hidden bg-#121212 max-w-md mx-auto">
              <div className="panel row">
                <div className="order-0 lg:order-1 ">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="vstack gap-2 p-3 sm:p-6 xl:p-8"
                  >
                    <p className="fs-6 text-white text-opacity-70 mb-2">
                      Fill out the form below, and
                      we'll get back to you as soon as possible.
                    </p>
                    <div className="row child-cols-12 sm:child-cols-6 g-2">
                      <div>
                        <input
                          className="form-control h-48px w-full bg-#1c1c1c text-white rounded-2 py-3"
                          type="text"
                          placeholder="Full name"
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="form-control h-48px w-full bg-#1c1c1c text-white rounded-2 py-3"
                          type="email"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    <input
                      className="form-control h-48px w-full bg-#1c1c1c text-white rounded-2 py-3"
                      type="text"
                      placeholder="Subject"
                    />
                    <textarea
                      className="form-control min-h-150px w-full bg-#1c1c1c text-white rounded-2 py-3"
                      placeholder="Your message.."
                      required
                      defaultValue={""}
                    />
                    <button
                      className="btn btn-secondary btn-md rounded-2 mt-2"
                      type="submit"
                    >
                      Send message
                    </button>
                    <p className="text-center text-white mt-2">
                      Or Send us an 
                      <a className="uc-link" href="mailto:hello@nexlify.co"> email</a>.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
