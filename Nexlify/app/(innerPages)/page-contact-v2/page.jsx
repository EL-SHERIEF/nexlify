import Header6 from "@/components/headers/Header6";
import Footer5 from "@/components/footers/Footer5";
import Contact2 from "@/components/innerpages/Contact2";
//import Faq from "@/components/homes/home-6/Faq";
//import Cta from "@/components/homes/home-6/Cta";

export const metadata = {
  title:
    "Contact V2 💜 Nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function ContactPagev2() {
  return (
    <>
      <div className="theme-4 page-wrapper uni-body panel bg-black text-gray-900 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
           <Header6 />
          <Contact2 />
          <div className="home-6-faq">
         {/* <Faq /> */} 
          </div>
         <div className="divider-home-6"/>
        <Footer5 />
      </div>
    </>
  );
}
