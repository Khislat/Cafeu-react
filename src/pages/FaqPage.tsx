import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import CustomerSection from "../components/customer/CustomerSection";
import FaqSection from "../components/faq/FaqSection";
import Layout from "../components/layout/Layout";
import PartnerSection from "../components/partner/PartnerSection";

const FaqPage = () => {
  return (
    <div className="wrapper">
      <Layout>
        <BreadcrumbSection title="FAQ" header="FAQ Page" />
        <FaqSection />
        <PartnerSection />
        <CustomerSection />
      </Layout>
    </div>
  );
};
export default FaqPage;
