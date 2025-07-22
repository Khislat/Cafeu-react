import React from 'react';
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import FaqSection from "../components/faq/FaqSection";
import Layout from "../components/layout/Layout";

const FaqPage = () => {
	return (
		<div className="wrapper">
			<Layout>
				<BreadcrumbSection title="FAQ" header="FAQ Page" />
				<FaqSection />
	
			</Layout>
		</div>
	);
};
export default FaqPage;
