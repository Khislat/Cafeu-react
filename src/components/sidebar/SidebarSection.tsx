import React from 'react';
import { Link } from 'react-router-dom';
import { useCafeuContext } from '../../context/CafeuContext';
import MobileNavigationSection from '../navigation/MobileNavigationSection';
interface SidebarProps {
	logo: string;
}
const SidebarSection: React.FC<SidebarProps> = ({ logo }) => {
	const { isSidebarOpen, closeSidebar, cartItemAmount } = useCafeuContext();

	return (
		<>
			<div className={`dr-sidebar-info side-info ${isSidebarOpen ? 'info-open' : ''}`}>
				<div className="dr-sidebar-logo-wrapper mb-25">
					<div className="row align-items-center">
						<div className="col-xl-6 col-8">
							<div className="dr-sidebar-logo">
								<Link to="/">
									<img src={logo} alt="logo-img" />
								</Link>
							</div>
						</div>
						<div className="col-xl-6 col-4">
							<div className="dr-sidebar-close-wrapper text-end">
								<button className="dr-sidebar-close side-info-close" onClick={closeSidebar}>
									<i className="icofont-close-line"></i>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="dr-sidebar-menu-wrapper fix">
					<div className="cf-header-menu mean-container">
						<MobileNavigationSection />
					</div>
				</div>

				<div className="dr-sidebar-btn-wrap mt-40">
					<Link to="/cart">
						<span className="icofont-shopping-cart">
							<span className="cart-count">{cartItemAmount}</span>
						</span>
					</Link>
					<Link to="/login">
						<i className="icofont-ui-user"></i>
					</Link>
				</div>

				<div className="dr-sidebar-contact-wrapper mt-40">
					<div className="dr-sidebar-contact mb-40">
						<h4 className="dr-sidebar-contact-title">Contact Info</h4>
						<span className="sidebar-address">
							<i className="icofont-google-map"></i>
							<span>4929 Thorn Street Crow heart, WY 82512</span>{' '}
						</span>
						<a href="tel:+1(251)410-1010">
							<i className="icofont-phone"></i>
							<span>+1 (251) 410-1010</span>
						</a>
						<a href="mailto:example@gmail.com" className="theme-3">
							<i className="icofont-envelope-open"></i>
							<span>
								<span>example@gmail.com</span>
							</span>
						</a>
					</div>

					<div className="dr-sidebar-social mt-40 mb-30">
						<a href="#" className="facebook">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#" className="twitter">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#" className="linkedin">
							<i className="fab fa-linkedin-in"></i>
						</a>
						<a href="#" className="youtube">
							<i className="fab fa-dribbble"></i>
						</a>
					</div>
				</div>
			</div>
			<div
				className={`offcanvas-overlay ${isSidebarOpen ? 'overlay-open' : ''}`}
				role="button"
				onClick={closeSidebar}
			></div>
		</>
	);
};

export default SidebarSection;
