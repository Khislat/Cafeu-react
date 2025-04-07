import { Link } from "react-router-dom";
import { useCafeuContext } from "../../context/CafeuContext";
import { Modal } from "react-bootstrap";

const CartModal = () => {
  const {
    showCart,
    handleCartClose,
    cart,
    removeFromCart,
    handleQuantityChange,
  } = useCafeuContext();
  return (
    <>
      <div className="overlay"></div>
      <Modal
        show={showCart}
        onHide={handleCartClose}
        centered
        size="xl"
        className="cart-area cart-area-modal"
        id="cart-area-modal"
      >
        <Modal.Header className="cart-header">
          <h3 className="cart-title">Shopping cart</h3>
          <button
            className="cart-area-modal-close-btn"
            onClick={handleCartClose}
          >
            <i className="fa-regular fa-xmark"></i>
          </button>
        </Modal.Header>
        <Modal.Body className="cart-body">
          <table className="cart-page-table">
            <tbody>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
              {cart.length === 0 ? (
                <tr className="no-item-msg">
                  <td className="no-item-msg-text">No items in the cart</td>
                </tr>
              ) : (
                cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="cart-product">
                        <div className="cart-product-img">
                          <img src={`/${item.imgSrc}`} alt="Product Image" />
                        </div>
                        <div className="cart-product-txt">
                          <h6>
                            <Link to={`/shop/${item.slug}`}>{item.name}</Link>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <div className="cart-product-quantity">
                        <div className="quick-view-product-details-quantity">
                          <button
                            className="minus-btn cart-product-minus"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                          >
                            <i className="fa-light fa-minus"></i>
                          </button>
                          <input
                            type="number"
                            name="product-quantity-input"
                            className="cart-product-quantity-input"
                            min="0"
                            value={item.quantity}
                            onChange={(event) => {
                              const newQuantity = parseInt(event.target.value);
                              handleQuantityChange(item.id, newQuantity);
                            }}
                          />
                          <button
                            className="plus-btn cart-product-plus"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                          >
                            <i className="fa-light fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>${item.total}</td>
                    <td>
                      <button
                        className="item-remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="fa-light fa-xmark"></i>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {cart.length === 0 ? (
            <div className="cart-left-actions d-flex justify-content-end">
              <Link to="/shop" className="custom-btn-2">
                Go to Shop
              </Link>
            </div>
          ) : (
            <div className="cart-left-actions d-flex justify-content-between">
              <Link to="/cart" className="custom-btn-2">
                View Full cart
              </Link>
              <Link to="/checkout" className="custom-btn-2">
                Proceed to Checkout
              </Link>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CartModal;
