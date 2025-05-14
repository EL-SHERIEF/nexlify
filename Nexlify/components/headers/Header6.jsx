'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { openMobileMenu } from '@/utlis/toggleMobileMenu'
import { navItems } from '@/data/menu'
import addScrollspy from '@/utlis/addScrollSpy'

export default function Header6() {
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
      className={`uc-header header-six uc-navbar-sticky-wrap z-999 uc-sticky header-6 ${
        scrolledPast ? ' uc-sticky-below uc-sticky-fixed headerFixed' : ''
      }`}
      data-uc-sticky="start: 1200px; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
    >
      <nav
        className={`uc-navbar-container  uc-navbar-float ft-tertiary z-1 ${
          scrolledPast ? 'uc-navbar-sticky' : 'uc-navbar-transparent'
        } `}
        data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
      >
        <div
          className="uc-navbar-main position-relative"
          style={{ '--uc-nav-height': '80px' }}
        >
          <div
            className="container w-full lg:px-2 px-0"
            style={{ minWidth: '100%' }}
          >
            <div
              className="uc-navbar min-h-64px lg:min-h-80px px-0 text-white"
              data-uc-navbar="mode: click; animation: uc-animation-slide-top-small; duration: 150;"
            >
              <div className="uc-navbar-left">
                <div className="uc-logo">
                  <Link className="panel text-none" href={`/`}>
                    <Image
                      alt="Lexend"
                      src="/assets/images/common/logo-dark.png"
                      width="140"
                      height="40"
                    />
                  </Link>
                </div>
              </div>

              <div className="uc-navbar-right">
                <button
                  className="d-flex flex-row text-black bg-white rounded-pill justify-between items-center py-1 px-2"
                  onClick={openMobileMenu}
                >
                  <svg
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                    strokeWidth="1.4"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <path
                        d="M5 8H13.75M5 12H19M10.25 16L19 16"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{' '}
                    </g>
                  </svg>
                  <span className="fs-5 fw-medium">Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
