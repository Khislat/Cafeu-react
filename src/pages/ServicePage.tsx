import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import Layout from "../components/layout/Layout";
import ServiceSection from "../components/service/ServiceSection";

const ServicePage = () => {
  return (
    <div className="wrapper">
      <Layout>
        <BreadcrumbSection title="Service" header="Service Page" />
        <ServiceSection style="" showBtn={true} />
      </Layout>
    </div>
  );
};
export default ServicePage;
