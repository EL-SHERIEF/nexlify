import BlogSidebarRight from "@/components/blog/BlogSidebarRight";
import Breadcumb3 from "@/components/blog/Breadcumb3";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Topbar from "@/components/headers/Topbar";

import React from "react";
export const metadata = {
  title:
    "Blog Sidebar || nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "nexlify - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function page() {
  return (
    <>
      <div className="theme-3 ">
        <div
          className="bp-xs page-wrapper bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 disable-cursor"
          style={{ overflowX: "clip" }}
        >
          <Topbar />
          <Header1 />
          <div id="wrapper" className="wrap">
            <Breadcumb3 pageName="Blog Sidebar" />
            <BlogSidebarRight />
          </div>
          <Footer2 />
        </div>
      </div>
    </>
  );
}
