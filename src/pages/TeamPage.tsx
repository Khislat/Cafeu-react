import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import Layout from "../components/layout/Layout";
import PartnerSection from "../components/partner/PartnerSection";
import TeamListSection from "../components/team/TeamListSection";

const TeamPage = () => {
  return (
    <div className="wrapper">
      <Layout>
        <BreadcrumbSection title="Team" header="Team Page" />
        <TeamListSection />
        <PartnerSection />
      </Layout>
    </div>
  );
};
export default TeamPage;
