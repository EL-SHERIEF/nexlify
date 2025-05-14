'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { openMobileMenu } from '@/utlis/toggleMobileMenu'
import { navItems } from '@/data/menu'
import addScrollspy from '@/utlis/addScrollSpy'

export default function Header9() {
  const [scrolledPast, setScrolledPast] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const isScrolledPast = currentScrollPos >= 500

      setScrolledPast(isScrolledPast)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', addScrollspy)

    return () => {
      window.removeEventListener('scroll', addScrollspy)
    }
  }, [])
  return (
    <header
      className={`uc-header header-six uc-navbar-sticky-wrap z-999 uc-sticky   ${
        scrolledPast
          ? ' uc-sticky-below uc-sticky-fixed headerFixed mt-0 xl:mt-1 md:mt-1 lg:mt-1'
          : ''
      }`}
      data-uc-sticky="start: 1200px; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
    >
      <nav
        className={`uc-navbar-container  uc-navbar-float ft-tertiary z-1 ${
          scrolledPast
            ? 'uc-navbar-sticky box-style border-0 bg-box  rounded-2'
            : 'uc-navbar-transparent'
        } `}
        data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
      >
        <div className="uc-navbar-main" style={{ '--uc-nav-height': '80px' }}>
          <div className="container max-w-lg lg:max-w-950px xl:max-w-xl">
            <div
              className="uc-navbar min-h-64px lg:min-h-80px lg:px-0 text-gray-500 items-center justify-center"
              data-uc-navbar="mode: click; animation: uc-animation-slide-top-small; duration: 150;"
            >
              <div className="uc-navbar-left">
                <div className="uc-logo">
                  <Link
                    className="panel text-none"
                    href={`/home-10`}
                    style={{ width: 140 }}
                  >
                    <Image
                      className="text-primary"
                      alt="Lexend"
                      data-uc-svg=""
                      src="/assets/images/common/logo-light.png"
                      width={148}
                      height={39}
                    />
                  </Link>
                </div>
              </div>
              <div className="uc-navbar-center d-none xl:d-flex items-center justify-center ">
                <ul
                  className="uc-navbar-nav gap-4 xl:gap-5 d-none lg:d-flex fs-5 fw-bold text-gray-500"
                  data-uc-scrollspy-nav="closest: li; offset: 40; scroll: true"
                  style={{
                    '--uc-nav-height': '40px',
                    padding: 0,
                    margin: 0,
                    lineHeight: '40px',
                  }}
                >
                  <li>
                    <Link href={`/page-features`}>Features</Link>
                  </li>
                  <li>
                    <Link href={`/page-pricing-2`}>Pricing</Link>
                  </li>
                  <li>
                    <Link href={`/page-blog`}>Blog</Link>
                  </li>
                  <li>
                    <Link href={`/page-about`}>About</Link>
                  </li>
                </ul>
              </div>
              <div className="uc-navbar-right">
                <div className="d-inline-block">
                  <a
                    href="#"
                    className="hstack gap-1 text-none fw-medium"
                    role="button"
                    aria-haspopup="true"
                  >
                    <i className="icon icon-1 unicon-wikis fw-bold" />
                  </a>
                  <div
                    className="p-2 bg-white dark:bg-gray-300 dark:bg-opacity-15 border shadow-xs rounded w-100px uc-drop"
                    data-uc-drop="mode: click; offset: 16; pos: bottom-right; boundary: !.uc-footer-widgets; animation: uc-animation-slide-top-small; duration: 150;"
                  >
                    <ul className="nav-y items-center gap-1 fw-medium rtl:items-end">
                      <li>
                        <a href="#en">English</a>
                      </li>
                      <li>
                        <a href="#ar">العربية</a>
                      </li>
                      <li>
                        <a href="#ch">中文</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href="https://themeforest.net/item/lexend-software-saas-startup-nextjs-template/54003483"
                  target="_blank"
                  className="btn btn-md btn-primary dark:bg-tertiary dark:text-primary-700 border-0 px-3 d-none lg:d-inline-flex"
                  data-uc-cursor="lg opaque"
                >
                  <span>Download App</span>
                </a>
                <a
                  className="d-block lg:d-none uc-icon uc-navbar-toggle-icon"
                  onClick={openMobileMenu}
                >
                  <svg width={20} height={20} viewBox="0 0 20 20">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          '.uc-navbar-toggle-icon svg>[class*="line-"]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uc-navbar-toggle-icon svg>.line-3{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{opacity:1}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-2{transform:rotate(45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{transform:rotate(-45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1,.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1{transform:translateY(6px) scaleX(0)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{transform:translateY(-6px) scaleX(0)}',
                      }}
                    />
                    <rect className="line-1" y={3} width={20} height={2} />
                    <rect className="line-2" y={9} width={20} height={2} />
                    <rect className="line-3" y={9} width={20} height={2} />
                    <rect className="line-4" y={15} width={20} height={2} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
