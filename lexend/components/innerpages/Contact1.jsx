"use client";
import Image from "next/image";
import bg from "@/public/assets/images/landing/hero-bg-2.jpg";

export default function Contact1() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel pt-8 lg:pt-9 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
         
         >
            <div className="my-2 vstack items-center gap-2 lg:gap-4  mb-2 mx-auto text-center text-white py-4 sm:py-6 lg:py-8"
             style={{
              width: '100%',
              borderRadius: '20px',
              backgroundImage: `url(${bg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'start center',
              backgroundRepeat: 'no-repeat',
            }}>
              <span className="fw-medium d-flex align-items-center px-2 py-1 bg-white bg-opacity-10 rounded-pill blur gap-1 m-0" style={{border:'solid 1px rgba(255, 255, 255, 0.38)'}}>
              <svg width={20} height={20} fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3ZM12,7.5a2,2,0,1,1-2,2A2,2,0,0,1,12,7.5ZM8.211,16.215a4,4,0,0,1,7.578,0A.993.993,0,0,1,14.83,17.5H9.18A1,1,0,0,1,8.211,16.215Z"></path></g></svg>   
                                 Contact Us
                    </span>
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0 text-inherit">
                Let's get in touch.
              </h1>
              <p className="fs-6 sm:fs-5 text-opacity-70 text-inherit max-w-sm px-2">
                Feel free to reach out to us using the options below, and our
                dedicated team will respond to your inquiries promptly.
              </p>
            </div>
            <div className="panel rounded-3 overflow-hidden border border-1 border-black-400">
              <div className="panel row child-cols-12 lg:child-cols-6 g-0">
                <div className="order-1 lg:order-0">
                  <div className="panel overflow-hidden rounded-3 h-100 min-h-350px shadow-lg">
                    <figure className="panel h-100 m-0 rounded">
                      <canvas className="h-100 w-100" />
                      <Image
                        className="media-cover image"
                        alt="Hero image"
                        src="/assets/images/template/hero-contact.jpg"
                        width="1500"
                        height="1000"
                      />
                    </figure>
                    <div className="position-cover text-white vstack justify-end p-4 lg:p-6 xl:p-9">
                      <div className="position-cover bg-gradient-to-t from-primary to-transparent opacity-50" />
                      <div className="panel z-1">
                        <div className="vstack gap-3">
                          <p className="fs-5 xl:fs-4 fw-medium">
                            “This software simplifies the website building
                            process, making it a breeze to manage our online
                            presence.”
                          </p>
                          <div className="vstack gap-0">
                            <p className="fs-6 lg:fs-5 fw-medium">
                              David Jack
                            </p>
                            <span className="fs-7 opacity-80">
                              Founder &amp; CEO
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-0 lg:order-1 ">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="vstack gap-2 p-3 sm:p-6 xl:p-8"
                  >
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                      Have a question or feedback? Fill out the form below, and
                      we'll get back to you as soon as possible.
                    </p>
                    <div className="row child-cols-12 sm:child-cols-6 g-2">
                      <div>
                        <input
                          className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="text"
                          placeholder="Full name"
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="email"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    <input
                      className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                      type="text"
                      placeholder="Subject"
                    />
                    <textarea
                      className="form-control min-h-150px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                      placeholder="Your message.."
                      required
                      defaultValue={""}
                    />
                    <button
                      className="btn btn-primary btn-md text-white mt-2"
                      type="submit"
                    >
                      Send message
                    </button>
                    <p className="text-center">
                      Or drop us a message via 
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
