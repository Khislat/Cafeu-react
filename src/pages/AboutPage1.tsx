import React from 'react';
import AboutSection from "../components/about/AboutSection";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import CustomerSection from "../components/customer/CustomerSection";
import DescribeSection from "../components/describe/DescribeSection";
import Layout from "../components/layout/Layout";
import ScheduleSection from "../components/schedule/ScheduleSection";
import TeamSection from "../components/team/TeamSection";

const AboutPage1 = () => {
  return (
    <div className="wrapper">
      <Layout>
        <BreadcrumbSection title={"About"} header={"About Us"} />
        <AboutSection />
        <DescribeSection />
        <TeamSection />
        <ScheduleSection />
        <CustomerSection />
      </Layout>
    </div>
  );
};
export default AboutPage1;
