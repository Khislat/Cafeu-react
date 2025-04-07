import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import ContactSection from "../components/contact/ContactSection";
import Layout from "../components/layout/Layout";

const ContactPage1 = () => {
  return (
    <div className="wrapper">
      <Layout>
        <BreadcrumbSection title="Contact" header="Contact Us" />
        <ContactSection />
      </Layout>
    </div>
  );
};
export default ContactPage1;
