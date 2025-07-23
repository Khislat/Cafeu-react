import React from 'react';
import BlogListSection from "../components/blog/BlogListSection";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import Layout from "../components/layout/Layout";

const BlogPage = () => {
  return (
    <div className="wrapper">
      <Layout>
        <BreadcrumbSection title="Blog" header="Blog Page" />
        <BlogListSection />
      </Layout>
    </div>
  );
};
export default BlogPage;
