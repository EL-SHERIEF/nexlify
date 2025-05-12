import Header6 from "@/components/headers/Header6";
import AboutV2 from "@/components/innerpages/AboutV2";
import BrandsV2 from "@/components/common/BrandsV2";
import About2V2 from "@/components/innerpages/About2V2";
import AboutValuesV2 from "@/components/innerpages/AboutValuesV2";
import Testimonials from "@/components/homes/home-6/Testimonials";
import TeamV2 from "@/components/innerpages/TeamV2";
import Cta from "@/components/homes/home-6/Cta";
import Footer5 from "@/components/footers/Footer5";
export const metadata = {
  title:
    "About V2 💜 Nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function AboutPagev2() {
  return (
    <>
      <div className="theme-4 page-wrapper uni-body panel bg-black text-gray-900 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header6 />
          <AboutV2 />
          <About2V2 />
          <FeaturesV2 />
          <AboutValuesV2 />
          <BrandsV2 />
          <Testimonials />
          <TeamV2 />
          <Cta />
         <div className="divider-home-6"/>
        <Footer5 />
      </div>
    </>
  );
}
