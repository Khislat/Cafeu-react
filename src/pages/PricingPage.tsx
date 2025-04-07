import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import Layout from "../components/layout/Layout";
import PartnerSection from "../components/partner/PartnerSection";
import PricingSection from "../components/pricing/PricingSection";

const PricingPage = () => {
  return (
    <div className="wrapper">
      <Layout>
        <BreadcrumbSection title="Pricing" header="Pricing Page" />
        <PricingSection theme="theme-1" />
        <PartnerSection />
      </Layout>
    </div>
  );
};
export default PricingPage;
