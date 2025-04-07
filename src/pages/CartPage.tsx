import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import CartSection from "../components/cart/CartSection";
import Layout from "../components/layout/Layout";

const CartPage = () => {
	return (
		<div className="wrapper">
			<Layout>
				<BreadcrumbSection header="Cart Page" title="Cart" />
				<CartSection />
			</Layout>
		</div>
	);
};
export default CartPage;
