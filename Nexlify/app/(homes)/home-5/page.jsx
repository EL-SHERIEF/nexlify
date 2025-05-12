import Footer7 from '@/components/footers/Footer7'
import Header9 from '@/components/headers/Header9'
import Blogs from '@/components/homes/home-5/Blogs'
import Brands from '@/components/homes/home-5/Brands'
import Elements from '@/components/homes/home-5/Elements'
import Cta from '@/components/homes/home-5/Cta'
import Faqs from '@/components/homes/home-5/Faqs'
import Features from '@/components/homes/home-5/Features'
import Features2 from '@/components/homes/home-5/Features2'
import Hero from '@/components/homes/home-5/Hero'
import Pricing from '@/components/homes/home-5/Pricing'
import Testimonials from '@/components/homes/home-5/Testimonials'
import Tools from '@/components/homes/home-5/Tools'
import React from 'react'
export const metadata = {
  title:
    'Home 5 💜 Nexlify - Full-featured, professional-looking software, saas and startup nextjs template.',
  description:
    'Nexlify - Full-featured, professional-looking software, saas and startup nextjs template.',
}
export default function page() {
  return (
    <>
      <div className="theme-5">
        <div className="page-wrapper">
          <div className="website-bg-color bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel text-tertiary-900 overflow-x-hidden disable-cursor">
            <Header9 />
            <div id="wrapper" className="wrap">
              <div className="custom-noise-bg" />
              <Hero />
              <Brands />
              <Features />
              <Elements />
              <Features2 />
              <Tools />
              <Pricing />
              <Testimonials />
              <Faqs />
              <Blogs />
              <Cta />
            </div>
            <Footer7 />
          </div>{' '}
        </div>
      </div>
    </>
  )
}
