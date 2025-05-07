import Footer7 from "@/components/footers/Footer7";
import Header9 from "@/components/headers/Header9";
import Blogs from "@/components/homes/home-8/Blogs";
import Brands from "@/components/homes/home-8/Brands";
import Elements from "@/components/homes/home-8/Elements";  
import Cta from "@/components/homes/home-8/Cta";
import Faqs from "@/components/homes/home-8/Faqs";
import Features from "@/components/homes/home-8/Features";
import Features2 from "@/components/homes/home-8/Features2";
import Hero from "@/components/homes/home-8/Hero";
import Pricing from "@/components/homes/home-8/Pricing";
import Testimonials from "@/components/homes/home-8/Testimonials";
import Tools from "@/components/homes/home-8/Tools";
import React from "react";
export const metadata = {
  title:
    "Home 8 || Nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
};
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
          </div>{" "}
        </div>
      </div>
    </>
  );
}
