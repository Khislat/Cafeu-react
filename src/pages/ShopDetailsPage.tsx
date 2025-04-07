import { Link, useParams } from "react-router-dom";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import Layout from "../components/layout/Layout";
import ShopDetailSection from "../components/shop/ShopDetailSection";
import { productList } from "../data/Data";

const ShopDetailsPage = () => {
  const { shopSlug } = useParams();
  const shopData = productList.find((item) => item.slug === shopSlug);

  return (
    <div className="wrapper">
      <Layout>
        {shopData ? (
          <>
            <BreadcrumbSection
              header="Shop Details Page"
              title="Shop Details"
            />
            <ShopDetailSection shopData={shopData} />
          </>
        ) : (
          <>
            <BreadcrumbSection
              header="Product Not Found"
              title="Shop Details"
            />
            <div className="dynamic-error-page-container">
              <div className="not-found-image-container">
                <img src="/img/404.jpg" alt="page not found" />
              </div>
              <p className="no-page-found-text">
                The Product you are looking for does not exist.
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
export default ShopDetailsPage;
