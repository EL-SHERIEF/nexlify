import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Blogs from "@/components/homes/home-1/Blogs";
import Cta from "@/components/homes/home-1/Cta";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/homes/home-1/Features";
import Feedback from "@/components/homes/home-1/Feedback";
import Hero from "@/components/homes/home-1/Hero";
import KeyFeatures from "@/components/homes/home-1/KeyFeatures";
import Pricing from "@/components/common/Pricing";
import Integretion from "@/components/homes/home-1/Integretion";
import React from "react";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Howworks from "@/components/homes/home-1/Howworks";
export const metadata = {
  title:
    "Home 1 || nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function HomePage() {
  return (
    <>
      <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <KeyFeatures />
          <Howworks />
          <Features />
          <Pricing />
          <Testimonials />
          <Faq />
          <Blogs />
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
