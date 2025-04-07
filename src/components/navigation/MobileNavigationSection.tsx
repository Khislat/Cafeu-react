import { NavLink } from "react-router-dom";
import { useCafeuContext } from "../../context/CafeuContext";
const MobileNavigationSection = () => {
  const { isDropdownOpen, handleDropdownToggle } = useCafeuContext();
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
            <a>
              Home{" "}
              <span
                className="mobile-menu-expand"
                role="button"
                onClick={() => handleDropdownToggle("home")}
              >
                {isDropdownOpen.home ? "-" : "+"}
              </span>
            </a>
            <ul
              className={`submenu ${
                isDropdownOpen.home ? "d-block" : "d-none"
              }`}
            >
              <li>
                <NavLink to="/">Home 1</NavLink>
              </li>
              <li>
                <NavLink to="/home-2">Home 2</NavLink>
              </li>
              <li>
                <NavLink to="/home-3">Home 3</NavLink>
              </li>
              <li>
                <NavLink to="/home-4">Home 4</NavLink>
              </li>
              <li>
                <NavLink to="/home-5">Home 5</NavLink>
              </li>
              <li>
                <NavLink to="/home-6">Home 6</NavLink>
              </li>
              <li>
                <NavLink to="/home-7">Home 7</NavLink>
              </li>
            </ul>
          </li>
          <li className="has-submenu">
            <a>
              About Us{" "}
              <span
                className="mobile-menu-expand"
                role="button"
                onClick={() => handleDropdownToggle("about")}
              >
                {isDropdownOpen.about ? "-" : "+"}
              </span>
            </a>
            <ul
              className={`submenu ${
                isDropdownOpen.about ? "d-block" : "d-none"
              }`}
            >
              <li>
                <NavLink to="/about">About 1</NavLink>
              </li>
              <li>
                <NavLink to="/about-2">About 2</NavLink>
              </li>
            </ul>
          </li>
          <li className="has-submenu">
            <a>
              Menu{" "}
              <span
                className="mobile-menu-expand"
                role="button"
                onClick={() => handleDropdownToggle("menu")}
              >
                {isDropdownOpen.menu ? "-" : "+"}
              </span>
            </a>
            <ul
              className={`submenu ${
                isDropdownOpen.menu ? "d-block" : "d-none"
              }`}
            >
              <li>
                <NavLink to="/menu">Menu 1</NavLink>
              </li>
              <li>
                <NavLink to="/menu-2">Menu 2</NavLink>
              </li>
            </ul>
          </li>
          <li className="has-submenu menu-lasts">
            <a>
              Blog
              <span
                className="mobile-menu-expand"
                role="button"
                onClick={() => handleDropdownToggle("blog")}
              >
                {isDropdownOpen.blog ? "-" : "+"}
              </span>
            </a>
            <ul
              className={`submenu ${
                isDropdownOpen.blog ? "d-block" : "d-none"
              }`}
            >
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/blog-grid">Blog Grid</NavLink>
              </li>
              <li>
                <NavLink to="/blog/make-authentic-italian-margherita-pizza-at-home">
                  Blog Details
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="has-submenu menu-lasts">
            <a>
              Pages{" "}
              <span
                className="mobile-menu-expand"
                role="button"
                onClick={() => handleDropdownToggle("pages")}
              >
                {isDropdownOpen.pages ? "-" : "+"}
              </span>
            </a>
            <ul
              className={`submenu ${
                isDropdownOpen.pages ? "d-block" : "d-none"
              }`}
            >
              <li>
                <NavLink to="/faq">FAQs</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/service/mouthwatering-culinary">
                  Service Details
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery/potato-wedges">Gallery Details</NavLink>
              </li>
              <li>
                <NavLink to="/team">Team</NavLink>
              </li>
              <li>
                <NavLink to="/team/mike-dooley">Team Details</NavLink>
              </li>
              <li>
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/reservation">Reservation</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/shop/spaghetti-bolognese">Shop Details</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Cart</NavLink>
              </li>
              <li>
                <NavLink to="/wishlist">Wishlist</NavLink>
              </li>
              <li>
                <NavLink to="/checkout">Checkout</NavLink>
              </li>
              <li>
                <NavLink to="/my-account">My Account</NavLink>
              </li>
            </ul>
          </li>
          <li className="has-submenu">
            <a>
              Contact{" "}
              <span
                className="mobile-menu-expand"
                role="button"
                onClick={() => handleDropdownToggle("contact")}
              >
                {isDropdownOpen.contact ? "-" : "+"}
              </span>
            </a>
            <ul
              className={`submenu ${
                isDropdownOpen.contact ? "d-block" : "d-none"
              }`}
            >
              <li>
                <NavLink to="/contact">Contact 1</NavLink>
              </li>
              <li>
                <NavLink to="/contact-2">Contact 2</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavigationSection;
