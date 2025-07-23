import React from 'react';
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import CheckoutSection from "../components/checkout/CheckoutSection";
import Layout from "../components/layout/Layout";

const CheckoutPage = () => {
  return (
    <Layout>
      <BreadcrumbSection header="Checkout" title="Chekout" />
      <CheckoutSection />
    </Layout>
  );
};
export default CheckoutPage;
