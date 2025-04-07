import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import Layout from "../components/layout/Layout";

import SignupSection from "../components/signup/SignupSection";

const SignupPage = () => {
	return (
		<Layout>
			<BreadcrumbSection title="Signup" header="My account" />
			<SignupSection />
		</Layout>
	);
};
export default SignupPage;
