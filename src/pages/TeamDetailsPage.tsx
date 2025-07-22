import { Link, useParams } from "react-router-dom";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import Layout from "../components/layout/Layout";
import TeamDetailSection from "../components/team/TeamDetailSection";
import PartnerSection from "../components/partner/PartnerSection";
import { teamList } from "../data/Data";
import React from 'react';

const TeamDetailsPage = () => {
  const { teamSlug } = useParams();
  const teamData = teamList.find((item) => item.slug === teamSlug);
  return (
    <div className="wrapper">
      <Layout>
        {teamData ? (
          <>
            <BreadcrumbSection
              title="Team Details"
              header="Team Details Page"
            />
            <TeamDetailSection teamData={teamData} />
          </>
        ) : (
          <>
            <BreadcrumbSection
              header="Team Member Not Found"
              title="Team Details"
            />
            <div className="dynamic-error-page-container">
              <div className="not-found-image-container">
                <img src="/img/404.jpg" alt="page not found" />
              </div>
              <p className="no-page-found-text">
                The Team member you are looking for does not exist.
              </p>
              <Link to="/" className="custom-btn">
                Go back to Home
              </Link>
            </div>
          </>
        )}
        <PartnerSection />
      </Layout>
    </div>
  );
};
export default TeamDetailsPage;
