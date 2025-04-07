import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import Layout from "../components/layout/Layout";
import LoginSection from "../components/login/LoginSection";

const MyAccountPage = () => {
	return (
		<Layout>
			<BreadcrumbSection title="Login" header="My account" />
			<LoginSection />
		</Layout>
	);
};
export default MyAccountPage;
