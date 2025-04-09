import React from "react";
import { Link } from "react-router-dom";
interface BreadcrumbSectionProps {
  title: string;
  header: string;
}
const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  title,
  header,
}) => {
  return (
    <div className="page-banner breadcrumb-section">
      <div className="container">
        <div className="row">
          <div className="page-ban-content">
            <h1
              className="page-head"
              data-aos="fade-up"
              data-aos-duration="1000" 
            >
              {header}
            </h1>
            <div
              className="breadcrumb-list"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Link to="/" className="page-route-link">
                Home
              </Link>
              <span className="devider">/</span>
              <span>{title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbSection;
