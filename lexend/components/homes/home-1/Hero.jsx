"use client";
import Brands from "@/components/common/Brands";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/assets/images/landing/hero-bg-2.webp";
import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";

export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        id="hero_header"
        className="hero-header section panel overflow-hidden"
      >
        <div className="position-absolute top-0 start-0 end-0 h-500px xl:h-screen" />
        <div
  className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden"
  style={{
    width: '98%',
    maxWidth: '1300px',
    margin: '80px auto',
    borderRadius: '20px',
    backgroundImage: `url(${bg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'start center',
    backgroundRepeat: 'no-repeat',
  }}
  data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 250; delay: anime.stagger(50, {start: 500});"
>
</div>
        <div className="section-outer panel pb-6 sm:pb-9 pt-9 sm:pt-10">
          <div className="container max-w-xl">
            <div className="section-inner panel">
              <div className="vstack gap-6 sm:gap-8 xl:gap-9">
                <div className="panel text-center max-w-850px mx-auto uc-dark">
                  <div
                    className="vstack items-center gap-2 text-white"
                    data-anime="targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                  >
<span className=" gap-1 my-4 fw-medium d-flex align-items-center px-2 py-1 bg-white bg-opacity-10 rounded-pill blur" style={{border:'solid 1px rgba(255, 255, 255, 0.38)'}}>
                        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.2516 10.689C14.265 9.50847 13.7716 8.91821 13.2045 9.00913C12.6375 9.10004 12.3722 9.81193 11.8416 11.2357L11.7043 11.604C11.5535 12.0086 11.4781 12.2109 11.3314 12.3599C11.1848 12.509 10.9834 12.5878 10.5806 12.7456L10.214 12.8892C8.79667 13.4443 8.08803 13.7218 8.00721 14.2891C7.92639 14.8564 8.52692 15.3378 9.72797 16.3004L10.0387 16.5495C10.38 16.8231 10.5507 16.9599 10.6494 17.1471C10.7482 17.3343 10.7639 17.5508 10.7954 17.9837L10.824 18.3779C10.9347 19.9015 10.9901 20.6633 11.5072 20.923C12.0244 21.1827 12.6608 20.7683 13.9337 19.9395L14.263 19.7251C14.6247 19.4896 14.8056 19.3718 15.0133 19.3385C15.2211 19.3052 15.4322 19.3601 15.8543 19.47L16.2387 19.57C17.7244 19.9565 18.4673 20.1498 18.8677 19.743C19.2681 19.3362 19.061 18.5987 18.6466 17.1238L18.5394 16.7422C18.4216 16.3231 18.3628 16.1135 18.3924 15.9057C18.422 15.6979 18.5367 15.5154 18.7662 15.1503L18.9751 14.818C19.7826 13.5332 20.1864 12.8909 19.9167 12.3798C19.647 11.8687 18.8826 11.8273 17.3536 11.7446L16.958 11.7231C16.5235 11.6996 16.3063 11.6879 16.1168 11.5927C15.9274 11.4976 15.7872 11.3299 15.5068 10.9944L15.2516 10.689Z" fill="#ffffff"></path> <path d="M14.8779 5.16723L15.0609 5.68905C15.262 6.26221 15.3625 6.5488 15.5581 6.75991C15.7537 6.97102 16.0222 7.08275 16.5591 7.30621L17.048 7.50967C18.9378 8.29605 19.8826 8.68925 19.9904 9.49292C20.0352 9.82745 19.9227 10.1409 19.6605 10.4912C19.5719 10.4672 19.4866 10.4477 19.4064 10.4313C18.8802 10.3244 18.211 10.2883 17.5289 10.2516L17.0392 10.2251C16.945 10.22 16.8718 10.216 16.8091 10.2119C16.7675 10.1633 16.7196 10.106 16.6579 10.0322L16.3423 9.65455C15.9019 9.12739 15.4711 8.6116 15.0704 8.25353C14.6431 7.87167 13.9288 7.37362 12.9672 7.52777C11.9955 7.68356 11.4771 8.39062 11.1975 8.89529C10.9384 9.36286 10.7054 9.98863 10.4694 10.6222L10.2989 11.08C10.27 11.1573 10.2469 11.2193 10.2266 11.2725C10.1732 11.2939 10.1112 11.3183 10.0337 11.3486L9.57825 11.527C8.94737 11.7739 8.32492 12.0175 7.86145 12.2842C7.36271 12.5711 6.66139 13.1012 6.52233 14.0773C6.38458 15.0441 6.89951 15.7499 7.28929 16.1685C7.57979 16.4805 7.9701 16.8095 8.38684 17.1468C6.81827 17.5723 5.98392 17.7311 5.50972 17.2192C4.97582 16.6429 5.25206 15.5982 5.80455 13.5087L5.94749 12.9682C6.10449 12.3744 6.18299 12.0775 6.14352 11.7831C6.10404 11.4887 5.95106 11.2301 5.6451 10.713L5.36655 10.2421C4.28985 8.4221 3.75151 7.51211 4.11106 6.78804C4.4706 6.06397 5.48992 6.00535 7.52857 5.88812L8.05599 5.85779C8.63531 5.82448 8.92497 5.80782 9.17756 5.67305C9.43014 5.53828 9.61705 5.30066 9.99088 4.82542L10.3312 4.39274C11.6467 2.72034 12.3045 1.88413 13.0606 2.01293C13.8167 2.14173 14.1705 3.15023 14.8779 5.16723Z" fill="#ffffff"></path> </g></svg>
                      Unlimited Credits and Storage
                    </span>
                    <h1 className="h2 sm:h1 lg:display-6 xl:display-4 mt-2 sm:mt-0">
                      Easy project managment{" "}
                      <br className="d-none sm:d-block" />
                      of any complexity
                    </h1>
                    <Link
                      href={`/page-pricing`}
                      className="btn btn-md lg:btn-lg btn-secondary text-white min-w-150px sm:mt-1 lg:mt-2"
                    >
                      Try it out
                    </Link>
                    <div className="hstack justify-center gap-2 mt-1 sm:mt-2">
                      <div className="hstack justify-center gap-0">
                        <div className="w-40px h-40px rounded-circle ltr:ms-n2 rtl:me-n2 border border-2 border-white overflow-hidden">
                        <Image
                          className="object-fit-cover h-full"
                          alt="Avatar image"
                          src="/assets/images/avatars/01.jpg"
                          width="150"
                          height="150"
                        />
                        </div>
                        <div className="w-40px h-40px rounded-circle ltr:ms-n2 rtl:me-n2 border border-2 border-white overflow-hidden">
                        <Image
                          className="object-fit-cover h-100"
                          alt="Avatar image"
                          src="/assets/images/avatars/02.jpg"
                          width="150"
                          height="150"
                        />
                        </div>
                        <div className="w-40px h-40px rounded-circle ltr:ms-n2 rtl:me-n2 border border-2 border-white overflow-hidden">
                        <Image
                          className="object-fit-cover h-full"
                          alt="Avatar image"
                          src="/assets/images/avatars/03.jpg"
                          width="150"
                          height="150"
                        />
                        </div>
                      </div>
                      <span className="fs-7 sm:fs-6 fw-medium">
                        4.6k Hardworking Members
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="panel"
                  data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
                  data-uc-lightbox="video-autoplay: true;"
                >
                  <figure className="featured-image m-0 rounded ratio ratio-16x9 lg:rounded-2 overflow-hidden">
                    <Image
                      className="media-cover image"
                      alt="nexlify"
                      src="/assets/images/template/home-01-hero-cover.webp"
                      width="1280"
                      height="719"
                    />
                  </figure>
                  <a
                    className="cstack text-none position-absolute top-50 start-50 translate-middle bg-white text-primary w-64px h-64px sm:w-80px sm:h-80px rounded-circle shadow-md"
                    onClick={() => setOpen(true)}
                    data-caption="Easy project managment of any complexity."
                    data-attrs="width: 640; height: 480;"
                  >
                    <i className="icon icon-2 sm:icon-3 unicon-play-filled-alt" />
                  </a>
                </div>
              </div>
              <div className="brands panel overflow-hidden mt-4 sm:mt-6 xl:mt-8 opacity-50">
                <div
                  className="block-panel panel"
                  data-anime="onview: -100; opacity: [0, 1]; duration: 450; delay: 200;"
                >
                  <div className="element-brands text-gray-900 dark:text-white">
                    <Brands />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        isOpen={isOpen}
        src="/assets/images/media/vid1.mp4"
        setIsOpen={() => setOpen(false)}
      />
    </>
  );
}
