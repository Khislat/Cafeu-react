import { Link, useParams } from "react-router-dom";
import BlogDetailSection from "../components/blog/BlogDetailSection";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import Layout from "../components/layout/Layout";
import { blogDataList } from "../data/Data";

const BlogDetailsPage = () => {
  const { blogSlug } = useParams();

  const blogPost = blogDataList.find((item) => item.slug === blogSlug);

  return (
    <div className="wrapper">
      <Layout>
        {blogPost ? (
          <>
            <BreadcrumbSection title="Blog Details" header="Blog Details" />
            <BlogDetailSection blogPost={blogPost} />
          </>
        ) : (
          <>
            <BreadcrumbSection header="Blog Not Found" title="Blog Details" />
            <div className="dynamic-error-page-container">
              <div className="not-found-image-container">
                <img src="/img/404.jpg" alt="page not found" />
              </div>
              <p className="no-page-found-text">
                The Blog you are looking for does not exist.
              </p>
              <Link to="/" className="custom-btn">
                Go back to Home
              </Link>
            </div>
          </>
        )}
      </Layout>
    </div>
  );
};
export default BlogDetailsPage;
