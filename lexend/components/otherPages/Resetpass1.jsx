"use client";
import Image from "next/image";
import Link from "next/link";

export default function Resetpass1() {
  return (
    <div
      id="sign-in"
      className="sign-in section panel overflow-hidden"
    >
      <div className="section-outer panel">
        <div className="section-inner panel">
          <div className="panel overflow-hidden">
            <div className="panel row child-cols-12 md:child-cols-6 g-0">
              <div>
                <div
                  className="panel overflow-hidden min-h-300px h-100 lg:h-screen"
                  data-anime="translateX: [-24, 0]; opacity: [0, 1]; easing: easeInOutExpo; duration: 750;"
                >
                  <figure className="panel h-100 m-0 rounded">
                    <canvas className="h-100 w-100" />
                    <Image
                      className="media-cover image"
                      alt="Hero login image"
                      src="/assets/images/common/login.jpg"
                      width="1500"
                      height="1000"
                    />
                  </figure>
                  <div className="position-cover text-white vstack justify-end p-4 lg:p-6 xl:py-8">
                    <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-50" />
                    <div className="panel z-1">
                      <div
                        className="vstack gap-3"
                        data-anime="targets: >*; translateY: [-24, 0]; opacity: [0, 1]; easing: easeInOutExpo; duration: 750; delay: anime.stagger(100, {start: 250});"
                      >
                        <p className="fs-5 xl:fs-4 fw-medium">
                          “This software simplifies the website building
                          process, making it a breeze to manage our online
                          presence.”
                        </p>
                        <div className="vstack gap-0">
                          <p className="fs-6 lg:fs-5 fw-medium">
                            David Handerson
                          </p>
                          <span className="fs-7 opacity-80">
                            Founder &amp; CEO
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/`}
                    className="position-absolute top-0 ltr:start-0 rtl:end-0 text-none m-4 lg:m-6"
                    data-anime="scale: [0.5, 1]; opacity: [0, 1]; easing: easeInOutExpo; duration: 750; delay: anime.stagger(100, {start: 150});"
                  >
                    <Image
                      className="w-32px lg:w-40px"
                      alt=""
                      src="/assets/images/common/logo-mark.png"
                      width="34"
                      height="34"
                    />
                  </Link>
                </div>
              </div>
              <div>
                <div className="panel vstack justify-center h-100 overflow-hidden">
                  <div className="panel py-4 px-2">
                    <div
                      className="panel vstack gap-3 w-100 sm:w-350px mx-auto text-center"
                      data-anime="targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: easeInOutExpo; duration: 750; delay: anime.stagger(100);"
                    >
                      <h1 className="h4 sm:h2">Reset password</h1>
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
                        <div className="form-check text-start rtl:text-end">
                          <input
                            id="uc_form_not_robot"
                            className="form-check-input rounded bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                            type="checkbox"
                            required
                          />
                          <label
                            htmlFor="uc_form_not_robot"
                            className="form-check-label fs-6"
                          >
                            <span>I'm not a robot</span>.
                          </label>
                        </div>
                        <button
                          className="btn btn-primary btn-md text-white mt-2"
                          type="submit"
                        >
                          Reset my password
                        </button>
                      </form>
                      <p className="mt-2 sm:m-0">
                        Remember your password?
                        <Link className="uc-link" href={`/sign-in`}> Sign in</Link>
                      </p>
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
