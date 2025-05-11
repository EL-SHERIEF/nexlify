import Header5 from "@/components/headers/Header5";

import Footer2 from "@/components/footers/Footer2";
import AboutV2 from "@/components/innerpages/AboutV2";
import BrandsV2 from "@/components/common/BrandsV2";
import About2V2 from "@/components/innerpages/About2V2";
import AboutValues from "@/components/innerpages/AboutValues";
import Feedback from "@/components/homes/home-1/Feedback";
import Timeline from "@/components/homes/home-2/Timeline";
import TeamV2 from "@/components/innerpages/TeamV2";
import Cta from "@/components/innerpages/Cta";
export const metadata = {
  title:
    "About V2 💜 Nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function AboutPage() {
  return (
    <>
      <div className="theme-4 page-wrapper uni-body panel bg-black text-gray-900 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
          <AboutV2 />
          <About2V2 />
          <BrandsV2 />
          <AboutValues />
          <Feedback />
          <Timeline />
          <TeamV2 />
          <Cta />
        <Footer2 />
      </div>
    </>
  );
}
