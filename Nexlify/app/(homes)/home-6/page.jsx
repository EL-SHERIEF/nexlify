import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import Blogs from "@/components/homes/home-6/Blogs";
import Brands from "@/components/homes/home-6/Brands";
import Cta from "@/components/homes/home-6/Cta";
import Elements from "@/components/homes/home-6/Elements";
import Faq from "@/components/homes/home-6/Faq";
import Features from "@/components/homes/home-6/Features";
import Hero from "@/components/homes/home-6/Hero";
import KeyFeatures from "@/components/homes/home-6/KeyFeatures";
import Pricing from "@/components/homes/home-6/Pricing";
import Team from "@/components/homes/home-6/Team";
import Testimonials from "@/components/homes/home-6/Testimonials";
import VideoComponent from "@/components/homes/home-6/VideoComponent";
import React from "react";
export const metadata = {
  title:
    "Home 6 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function HomePage6() {
  return (
    <>
    {" "}
    <div className="theme-6">
        <div className="bp-xs bp-sm page-wrapper bp-md bp-lg bp-xl dom-ready bp-xxl-max">
          <div className=" uni-body panel uni-body panel bg-black overflow-x-hidden disable-cursor">

        <Header5 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Features />
          <Brands />
          <VideoComponent />
          <KeyFeatures />
          <Elements />
          <Pricing />
          <Testimonials />
          <Faq />
          <Team />
          <Blogs />
          <Cta />
        </div>
        <Footer5 />
        </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
