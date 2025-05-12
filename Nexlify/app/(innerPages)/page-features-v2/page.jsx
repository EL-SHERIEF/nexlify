import Header6 from "@/components/headers/Header6";
import Footer5 from "@/components/footers/Footer5";
import HeroV2 from "@/components/innerpages/features/HeroV2";
import Elements from "@/components/innerpages/features/Elements";
import KeyFeaturesV2 from "@/components/innerpages/features/KeyFeaturesV2";
import FeaturesV2 from "@/components/innerpages/features/FeaturesV2";
import Faq from "@/components/homes/home-6/Faq";
import Testimonials from "@/components/homes/home-6/Testimonials";
import Cta from "@/components/homes/home-6/Cta";
export const metadata = {
  title:
    "Features V2 💜 Nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function FeaturesPageV2() {
  return (
    <>
      <div className="theme-4 page-wrapper uni-body panel bg-black text-gray-900 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
           <Header6 />
          <HeroV2 />
          <Elements />
          <FeaturesV2 />
          <KeyFeaturesV2 />
          <Testimonials />
          <div className="home-6-faq">
            <Faq />
          </div>
          <Cta />
         <div className="divider-home-6"/>
        <Footer5 />
        </div>
    </>
  );
}
