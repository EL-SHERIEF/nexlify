import Header6 from "@/components/headers/Header6";
import Footer5 from "@/components/footers/Footer5";
import Cta from "@/components/homes/home-6/Cta";
import BlogsV2 from "@/components/blog/BlogsV2";
export const metadata = {
  title:
    "Blog V2 💜 Nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function BlogPage2() {
  return (
    <>
      <div className="theme-4 page-wrapper uni-body panel bg-black text-gray-900 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
           <Header6 />
          <BlogsV2 />
          <Cta />
        <Footer5 />
      </div>
    </>
  );
}
