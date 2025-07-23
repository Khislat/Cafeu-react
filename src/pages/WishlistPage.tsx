import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import Layout from "../components/layout/Layout";
import WishlistSection from "../components/wishlist/WishlistSection";import React from 'react';

const WishlistPage = () => {
  return (
    <div className="wrapper">
      <Layout>
        <BreadcrumbSection title="Wishlist" header="Wishlist Page" />
        <WishlistSection />
      </Layout>
    </div>
  );
};
export default WishlistPage;
