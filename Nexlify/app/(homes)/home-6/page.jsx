import Footer5 from "@/components/footers/Footer5";
import Header6 from "@/components/headers/Header6";
import Blogs from "@/components/homes/home-6/Blogs";
import Cta from "@/components/homes/home-6/Cta";
import Faq from "@/components/homes/home-6/Faq";
import Hero from "@/components/homes/home-6/Hero";
import Pricing from "@/components/homes/home-6/Pricing";
import Testimonials from "@/components/homes/home-6/Testimonials";
import RowBentoGrid from "@/components/homes/home-6/RowBentoGrid";
import Brands from "@/components/homes/home-6/Brands";

import Features2 from "@/components/homes/home-6/Features2";
import React from "react";
export const metadata = {
  title:
    "Home 6 💜 Nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function HomePage6() {
  
  return (
    <>
    {" "}
    <div className="theme-6">
        <div className="bp-xs bp-sm page-wrapper bp-md bp-lg bp-xl dom-ready bp-xxl-max">
          <div className=" uni-body panel uni-body panel bg-black overflow-x-hidden disable-cursor">

        <Header6 />
        <div id="wrapper" className="wrap">
          <Hero />
          <RowBentoGrid />
          <Features2/>
          <Brands/>
          <Testimonials />
          <div className="home-6-faq">
          <Faq />
          </div>
           <Pricing />
          <Blogs />
          <Cta />
           <div className="divider-home-6"/>
        </div>
        <Footer5 />
        </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
