import Header1 from "@/components/headers/Header1";

import Footer2 from "@/components/footers/Footer2";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs5 from "@/components/blog/Blogs5";
export const metadata = {
  title:
    "Blog 4 Cols || nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function Blog4ColsPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header1 />
        <div id="wrapper" className="wrap">
          <BreadCumb />
          <Blogs5 />
          <Newsletter />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
