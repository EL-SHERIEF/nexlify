import Header1 from "@/components/headers/Header1";
import Features from "@/components/homes/home-1/Features";
import Hero from "@/components/homes/home-2/Hero";
import Integretion from "@/components/homes/home-2/Integretion";
import Facts from "@/components/homes/home-2/Facts";
import Pricing from "@/components/homes/home-2/Pricing";
import Feedback from "@/components/homes/home-2/Feedback";
import Timeline from "@/components/homes/home-2/Timeline";
import Team from "@/components/homes/home-2/Team";
import Cta from "@/components/homes/home-2/Cta";
import Footer1 from "@/components/footers/Footer1";
import KeyFeatures from "@/components/innerpages/features/KeyFeatures";
export const metadata = {
  title:
    "Home 2 💜 Nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function HomePage2() {
  return (
    <>
      <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
        <Header1 />
        <div id="wrapper" className="wrap">
          <Hero />
          <KeyFeatures />
          <Integretion />
          <Features />
          <Pricing />
          <Feedback />
          <Team />
          <Timeline />
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
