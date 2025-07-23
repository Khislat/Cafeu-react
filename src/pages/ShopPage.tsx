import React from 'react';
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import Layout from "../components/layout/Layout";
import ShopSection from "../components/shop/ShopSection";

const ShopPage = () => {
  return (
    <div className="wrapper">
      <Layout>
        <BreadcrumbSection header="Shop Page" title="Shop" />
        <ShopSection />
      </Layout>
    </div>
  );
};
export default ShopPage;
