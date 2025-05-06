import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BlogDetailsPage from './pages/BlogDetailsPage';
import BlogGridPage from './pages/BlogGridPage';
import CartPage from './pages/CartPage';
import FaqPage from './pages/FaqPage';
import MenuPage1 from './pages/MenuPage1';
import MyAccountPage from './pages/MyAccountPage';
import PricingPage from './pages/PricingPage';
import ShopPage from './pages/ShopPage';
import ShopDetailsPage from './pages/ShopDetailsPage';
import SignupPage from './pages/SignupPage';
import UserPage from './pages/UserPage';
import OrdersPage from './components/oredersPage';
import HomePage from './components/HomePage/HomePage1';
import { useState } from 'react';
import { useGlobals } from './components/hooks/useGlobals';

function App() {
	const { setAuthMember } = useGlobals();
	const [loginOpen, setLoginOpen] = useState<boolean>(false);
	

	/** HANDLERS **/
	const handleLoginClose = () => setLoginOpen(false);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/blog/:blogSlug" element={<BlogDetailsPage />} />
				<Route path="/blog-grid" element={<BlogGridPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/faq" element={<FaqPage />} />
				<Route path="/menu" element={<MenuPage1 />} />
				<Route path="/orders" element={<OrdersPage />} />
				<Route path="/my-account" element={<MyAccountPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/userpage" element={<UserPage />} />
				<Route path="/pricing" element={<PricingPage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/shop/:productId" element={<ShopDetailsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
