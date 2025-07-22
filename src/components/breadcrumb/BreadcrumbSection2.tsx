import React from 'react';
import { Link } from "react-router-dom";

type Props = {
  currentPage: string;
};
const BreadcrumbSection2 = ({ currentPage }: Props) => {
  return (
    <section>
      <div className="ad-menu-banner position-relative">
        <div className="ad-menu-banner-overlay">
          <div>
            <Link to="/">Home /</Link>
            <Link className="selected-page" to="#">
              {" "}
              {currentPage}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSection2;
