import React from 'react';
import BreadcrumbSection2 from "../components/breadcrumb/BreadcrumbSection2";
import CustomerSection3 from "../components/customer/CustomerSection3";
import Layout2 from "../components/layout/Layout2";
import DiscountSection from "../components/offer/DiscountSection";
import TeamSection3 from "../components/team/TeamSection3";
import TestimonialSection from "../components/testimonial/TestimonialSection";

const AboutPage2 = () => {
  return (
    <div className="home-6 about-page-2">
      <Layout2>
        <BreadcrumbSection2 currentPage="About" />
  
        <CustomerSection3 />
        <TeamSection3 />
        <DiscountSection />
        <TestimonialSection img="/img/aida-images/about-page-review-bg.png" />
      </Layout2>
    </div>
  );
};
export default AboutPage2;
