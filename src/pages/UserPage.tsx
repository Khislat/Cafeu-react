import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import Layout from "../components/layout/Layout";
import UserPageSection from "../components/userpage/UserPageSection";

const UserPage = () => {
	return (
		<Layout>
			<BreadcrumbSection title="UserPage" header="My account" />
			<UserPageSection />
		</Layout>
	);
};
export default UserPage;
