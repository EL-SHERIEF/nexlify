"use client";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/assets/images/landing/hero-bg-2.jpg";

export default function Signup() {
  return (
    <div
      id="sign-in"
      className="sign-in section panel overflow-hidden"
    >
      <div className="section-outer panel overflow-hidden">
      <div className="panel vstack justify-center items-center overflow-hidden" style={{height:'100vh'}}>

      <div
          className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden border-1 border border-black shadow-sm "
          style={{
            width: 'calc(100% - 40px)',
            pointerEvents: 'none',
            zIndex: 0,
            margin: '20px',
            borderRadius: '20px',
            backgroundImage: `url(${bg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'start start',
            backgroundRepeat: 'no-repeat',
          }}
          data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 250; delay: anime.stagger(50, {start: 500});"
        />

              <div
          className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden bg-white bg-opacity-40"
          style={{
            width: 'calc(100% + 40px)',
            pointerEvents: 'none',
            zIndex: 1,
            margin: '20px',
            borderRadius: '20px',
            backgroundSize: 'cover',
            backgroundPosition: 'start center',
            backgroundRepeat: 'no-repeat',
          }}
          data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 250; delay: anime.stagger(50, {start: 500});"
        />

   
                  <div className="panel py-4 px-3 mx-3" style={{zIndex: 2}}>
                    <div
                      className="panel vstack gap-2 w-100 lg:w-500px md:w-500px mx-auto text-center bg-white p-4 rounded-3 shadow-sm border-1 border border-black"
                      data-anime="targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: easeInOutExpo; duration: 750; delay: anime.stagger(100);"
                    >
                       
                                        <Image
                                          className="mx-auto my-1"
                                          alt="Nexlify"
                                          src="/assets/images/common/logo-light.png"
                                          width="157"
                                          height="50"
                                        />
                      <h1 className="h4 sm:h2 w-100 border-top border-1 border-black pt-3">Create an account</h1>
                      <div className="hstack gap-2">
                        <a
                          href="#github"
                          className="hstack items-center justify-center flex-1 gap-1 h-48px text-none rounded bg-dark text-white dark:bg-white dark:text-dark"
                        >
                          <i className="icon icon-1 unicon-logo-github" />
                        </a>
                        <a
                          href="#facebook"
                          className="hstack items-center justify-center flex-1 gap-1 h-48px text-none rounded bg-blue-600 text-white"
                        >
                          <i className="icon icon-1 unicon-logo-facebook" />
                        </a>
                      </div>
                      <div className="panel my-2">
                        <hr className="m-0" />
                        <span className="position-absolute top-50 start-50 translate-middle p-1 fs-7 text-uppercase">
                          Or
                        </span>
                      </div>
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        className="vstack gap-2"
                      >
                        <input
                          className="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                          type="email"
                          placeholder="Your email"
                          required
                        />
                        <div className="hstack text-start">
                          <div className="form-check text-start rtl:text-end">
                            <input
                              id="uc_form_check_terms"
                              className="form-check-input rounded bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                              type="checkbox"
                              required
                            />
                            <label
                              htmlFor="uc_form_check_terms"
                              className="hstack justify-between form-check-label fs-6"
                            >
                              I read and accept the
                              <Link
                                href={`/page-terms`}
                                className="uc-link ltr:ms-narrow rtl:me-narrow"
                              >
                                terms of use
                              </Link>
                              .
                            </label>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary btn-md text-white mt-2"
                          type="submit"
                        >
                          Create my account
                        </button>
                      </form>
                      <p>
                        Already have an account?
                        <Link className="uc-link" href={`/sign-in`}> Sign in </Link>
                      </p>
                    </div>
                  </div>
                </div>
      </div>
    </div>
  );
}
