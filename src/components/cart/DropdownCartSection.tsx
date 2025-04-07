import { Link } from "react-router-dom";
import { useCafeuContext } from "../../context/CafeuContext";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
type Props = {
  style: string;
};
const DropdownCartSection = ({ style }: Props) => {
  const { cart, removeFromCart } = useCafeuContext();
  return (
    <OverlayScrollbarsComponent className={`${style} cart-menu`}>
      <ul className="cart-ul">
        {cart.length === 0 ? (
          <div className="no-product-cart-dropdown-container">
            <p className="no-product-dropdown-text">No Product In Cart</p>
            <Link to="/shop" className="custom-btn">
              Add Products
            </Link>
          </div>
        ) : (
          cart.map((item) => (
            <li className="cart-list" key={item.id}>
              <div className="d-flex align-items-center">
                <div className="cart-img">
                  <img src={item.imgSrc} alt={item.name} />
                </div>
                <div className="cart-product-details">
                  <Link
                    to={`/shop/${item.slug}`}
                    className="product-name cart-px-name"
                  >
                    {item.name}
                  </Link>
                  <p className="price">${item.price}</p>
                </div>
              </div>
              <a
                className="remove-icon"
                role="button"
                onClick={() => removeFromCart(item.id)}
              >
                <span className="icofont-ui-delete"></span>
              </a>
            </li>
          ))
        )}
      </ul>
      <div className="cart-modal-btn">
        <Link to="/wishlist" className="custom-btn">
          Wishlist
        </Link>
        <Link to="/cart" className="custom-btn">
          Cart
        </Link>
      </div>
    </OverlayScrollbarsComponent>
  );
};

export default DropdownCartSection;
