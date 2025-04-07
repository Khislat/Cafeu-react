import { NavLink } from "react-router-dom";

const NavigationSection = () => {
	const authMember = null;

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
						<NavLink to="/blog-grid">Blog</NavLink>
					</li>
					<li>
						<NavLink to="/cart">Cart</NavLink>
					</li>

					<li>
						<NavLink to="/my-account">Login</NavLink>
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
						<NavLink to="/signup">Signup</NavLink>
					</li>
					
					<li>
						<NavLink to="/my-account">Login</NavLink>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default NavigationSection;
