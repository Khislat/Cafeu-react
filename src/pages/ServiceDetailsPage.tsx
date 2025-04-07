import { Link, useParams } from "react-router-dom";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import Layout from "../components/layout/Layout";
import ServiceDetailSection from "../components/service/ServiceDetailSection";
import { serviceList } from "../data/Data";

const ServiceDetailsPage = () => {
  const { serviceSlug } = useParams();
  const serviceData = serviceList.find((item) => item.slug === serviceSlug);

  return (
    <div className="wrapper">
      <Layout>
        {serviceData ? (
          <>
            <BreadcrumbSection
              title="Service Details"
              header="Service Details Page"
            />
            <ServiceDetailSection serviceData={serviceData} />
          </>
        ) : (
          <>
            <BreadcrumbSection
              title="Service Not Found"
              header="Service Details"
            />
            <div className="dynamic-error-page-container">
              <div className="not-found-image-container">
                <img src="/img/404.jpg" alt="page not found" />
              </div>
              <p className="no-page-found-text">
                The Service you are looking for does not exist.
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
export default ServiceDetailsPage;
