
import BreadcrumbSectionLogin from "../components/breadcrumb/BreadcrumbSectionLogin";
import Layout from "../components/layout/Layout";
import LoginSection from "../components/login/LoginSection";

const MyAccountPage = () => {
	return (
		<Layout>
			<BreadcrumbSectionLogin header="Login" title={""} />
			<LoginSection />
		</Layout>
	);
};
export default MyAccountPage;
