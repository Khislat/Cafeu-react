import { Link } from "react-router-dom";
import { useCafeuContext } from "../../context/CafeuContext";

const ShopAllProductSection = () => {
  const {
    currentItems,
    currentPage,
    handlePageChange,
    totalPages,
    openLightBoxModal,
    addToCart,
    addToWishlist,
    wishlist,
  } = useCafeuContext();
  return (
    <div className="shop-products-wrapper">
      {currentItems.length === 0 ? (
        <div className="no-product-container">
          <div className="no-product-img-container">
            <img src="/img/no-product.jpg" alt="no-product-img" />
          </div>
          <p className="no-product-text">No Product Available</p>
          <Link to="/" className="custom-btn mt-10">
            Go back to Home
          </Link>
        </div>
      ) : (
        <>
          <div
            className="row row-cols-xxl-3 row-cols-lg-2 row-cols-md-2 row-cols-1"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {currentItems.map((item) => (
              <div className="col" key={item.id}>
                <div className="shop-product-item mb-30">
                  <div className="shop-product-item-inner">
                    <div className="shop-product-img w-100">
                      <a href={`/shop/${item.slug}`}>
                        <img src={item.imgSrc} alt={item.name} />
                      </a>
                      {item.sale && <span className="shop-onsale">Sale!</span>}
                      <div className="shop-product-action">
                        <a
                          role="button"
                          onClick={() => addToWishlist(item.id)}
                          className={
                            wishlist.some(
                              (wishlistItem) => wishlistItem.id === item.id
                            )
                              ? "active"
                              : ""
                          }
                        >
                          <i className="icofont-heart-alt"></i>
                        </a>
                        <a role="button" onClick={() => addToCart(item.id)}>
                          <i className="icofont-shopping-cart"></i>
                        </a>
                        <a
                          role="button"
                          onClick={() => openLightBoxModal(item)}
                        >
                          <i className="icofont-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="shop-product-content">
                      <h4 className="shop-product-title">
                        <a href={`/shop/${item.slug}`}>{item.name}</a>
                      </h4>
                      <div className="shop-product-rating">
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                      </div>
                      <div className="shop-product-price">
                        <span className="shop-price">{item.priceRange}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="basic-pagination mb-50 mt-20"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <ul className="page-numbers">
              <li>
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="page-number-btn"
                >
                  <i className="icofont-rounded-left"></i>
                </button>
              </li>
              {Array.from({ length: Math.ceil(totalPages) }).map((_, index) => (
                <li key={index}>
                  <button
                    className={`page-number-btn ${
                      currentPage === index + 1 ? "current" : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    <span aria-current="page" className="page-number">
                      {index + 1}
                    </span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  disabled={currentPage === totalPages}
                  className="page-number-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <i className="icofont-rounded-right"></i>
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopAllProductSection;
