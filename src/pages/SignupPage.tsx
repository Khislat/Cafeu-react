import BreadcrumbSectionSignup from "../components/breadcrumb/BreadcrumbSectionSignup";
import Layout from "../components/layout/Layout";

import SignupSection from "../components/signup/SignupSection";

const SignupPage = () => {
	return (
		<Layout>
			<BreadcrumbSectionSignup title={""} header="My account" />
			<SignupSection />
		</Layout>
	);
};
export default SignupPage;
