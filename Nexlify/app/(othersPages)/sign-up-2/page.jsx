import Header1 from "@/components/headers/Header1";

import Footer2 from "@/components/footers/Footer2";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Signup2 from "@/components/otherPages/Signup2";
export const metadata = {
  title:
    "Signup 2 || nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function SignupPage2() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header1 />
        <div id="wrapper" className="wrap">
          <Breadcumb />
          <Signup2 />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
