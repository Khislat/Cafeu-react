import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Basket from "../HomePage/Basket";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavigationSection = () => {
	const authMember = true;

	return (
		<nav className="cf-header-menu" id="header-menu">
			{authMember ? (
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/menu">Menu</NavLink>
					</li>
					<li>
						<NavLink to="/shop">Shop</NavLink>
					</li>
					<li>
						<NavLink to="/cart">
							{/* <ShoppingCartIcon /> */}
							Orders
						</NavLink>
					</li>

					<li>
						<NavLink to="/blog-grid">Blog</NavLink>
					</li>

					<li>
						<NavLink to="/faq">FAQ</NavLink>
					</li>
					<li>
						<Basket />
					</li>
					<li>
						<NavLink to="/userpage">
							<AccountCircleIcon fontSize="large" />
						</NavLink>
					</li>
					
				</ul>
			) : (
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/menu">Menu</NavLink>
					</li>

					<li>
						<NavLink to="/blog-grid">Blog</NavLink>
					</li>

					<li>
						<NavLink to="/faq">FAQ</NavLink>
					</li>
					<li>
						<NavLink to="/my-account">Register</NavLink>
					</li>
					<li>
						<Basket />
					</li>
				</ul>
			)}
		</nav>
	);
};

export default NavigationSection;
