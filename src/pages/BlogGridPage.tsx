import BlogGridSection from "../components/blog/BlogGridSection";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import Layout from "../components/layout/Layout";

const BlogGridPage = () => {
  return (
    <div className="wrapper">
      <Layout>
        <BreadcrumbSection title="Blog" header="Blog Grid" />
        <BlogGridSection />
      </Layout>
    </div>
  );
};
export default BlogGridPage;
