import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage1 from "./components/HomePage/HomePage1";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogGridPage from "./pages/BlogGridPage";
import CartPage from "./pages/CartPage";
import FaqPage from "./pages/FaqPage";
import MenuPage1 from "./pages/MenuPage1";
import MyAccountPage from "./pages/MyAccountPage";
import PricingPage from "./pages/PricingPage";
import ShopPage from "./pages/ShopPage";
import ShopDetailsPage from "./pages/ShopDetailsPage";
import SignupPage from "./pages/SignupPage";



function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage1 />} />
				<Route path="/blog/:blogSlug" element={<BlogDetailsPage />} />
				<Route path="/blog-grid" element={<BlogGridPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/faq" element={<FaqPage />} />
				<Route path="/menu" element={<MenuPage1 />} />
				<Route path="/my-account" element={<MyAccountPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/pricing" element={<PricingPage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/shop/:shopSlug" element={<ShopDetailsPage />} />
				
			</Routes>
		</Router>
	);
}

export default App;
