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
import { sweetErrorHandling, sweetTopSuccessAlert } from '../libs/sweetAlert';
import MemberService from './services/MemberService';
import { Messages } from '../libs/config';

function App() {
	const { setAuthMember } = useGlobals();
	const [loginOpen, setLoginOpen] = useState<boolean>(false);
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	/** HANDLERS **/
	const handleLoginClose = () => setLoginOpen(false);

	const handleLogoutClick = (e: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const handleCloseLogout = () => setAnchorEl(null);
	const handleLogoutRequest = async () => {
		try {
			const member = new MemberService();
			await member.logout();

			await sweetTopSuccessAlert('success', 700);
			setAuthMember(null);
		} catch (err) {
			console.log(err);
			sweetErrorHandling(Messages.error1);
		}
	};

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							anchorEl={anchorEl}
							handleLogoutClick={handleLogoutClick}
							handleCloseLogout={handleCloseLogout}
							handleLogoutRequest={handleLogoutRequest}
						/>
					}
				/>
				<Route path="/blog/:blogSlug" element={<BlogDetailsPage />} />
				<Route path="/blog-grid" element={<BlogGridPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/faq" element={<FaqPage />} />
				<Route path="/menu" element={<MenuPage1 />} />
				<Route path="/orders" element={<OrdersPage />} />
				<Route path="/login" element={<MyAccountPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/my-page" element={<UserPage />} />
				<Route path="/pricing" element={<PricingPage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/shop/:productId" element={<ShopDetailsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
