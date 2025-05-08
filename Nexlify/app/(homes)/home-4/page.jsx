import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import Blogs from "@/components/homes/home-4/Blogs";
import Cta from "@/components/homes/home-4/Cta";
import Elements from "@/components/homes/home-4/Elements";
import Faq from "@/components/homes/home-4/Faq";
import Features from "@/components/homes/home-4/Features";
import Hero from "@/components/homes/home-4/Hero";
import KeyFeatures from "@/components/homes/home-4/KeyFeatures";
import Pricing from "@/components/homes/home-4/Pricing";
import Team from "@/components/homes/home-4/Team";
import Testimonials from "@/components/homes/home-4/Testimonials";
import VideoComponent from "@/components/homes/home-4/VideoComponent";
import React from "react";
export const metadata = {
  title:
    "Home 4 💜 Nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function HomePage6() {
  return (
    <>
    {" "}
    <div className="theme-4">
        <div className="bp-xs bp-sm page-wrapper bp-md bp-lg bp-xl dom-ready bp-xxl-max">
          <div className=" uni-body panel uni-body panel bg-black overflow-x-hidden disable-cursor">

        <Header5 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Features />
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
