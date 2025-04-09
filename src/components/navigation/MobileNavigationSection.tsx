import { NavLink } from "react-router-dom";

const MobileNavigationSection = () => {
	return (
		<div className="mobile-menu-container">
			<a href="#nav" className="mobile-menu-reveal">
				<span>
					<span>
						<span></span>
					</span>
				</span>
			</a>
			<nav className="mobile-menu-nav">
				<div className="mobile-menu-bar">
					<a href="#nav" className="mobile-menu-reveal">
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</a>
					<nav className="mobile-menu-nav"></nav>
				</div>
				<ul>
					<li className="has-submenu">
						<ul>
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
						</ul>
					</li>
					<li className="has-submenu">
						<ul>
							<li>
								<NavLink to="/menu">Menu</NavLink>
							</li>
						</ul>
					</li>
					<li className="has-submenu">
						<ul>
							<li>
								<NavLink to="/shop">Shop</NavLink>
							</li>
						</ul>
					</li>
					<li className="has-submenu">
						<ul>
							<li>
								<NavLink to="/blog-grid">Blog</NavLink>
							</li>
						</ul>
					</li>

					<li className="has-submenu">
						<ul>
							<li>
								<NavLink to="/faq">FAQ</NavLink>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MobileNavigationSection;
