import React from 'react';
import { useCafeuContext } from "../../context/CafeuContext";
import { productList } from "../../data/Data";

const ShopRecentProducts = () => {
  const { addToCart, addToWishlist, openLightBoxModal } = useCafeuContext();
  return (
    <div className="menu-product mb-25">
      <div className="product-inner p-0">
        <div
          className="section-head text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="review-title">Latest Product</h2>
        </div>

        <div className="row mt-40">
          {productList.slice(1, 5).map((item) => (
            <div
              className="col-md-6 col-xl-3 col-lg-4 col-sm-6 mb-4 mix"
              data-aos="fade-up"
              data-aos-duration="1000"
              key={item.id}
            >
              <div className="product-card">
                <p className="status-product">New</p>
                <div className="product-img">
                  <a href={`/shop/${item.slug}`}>
                    <img src={`/${item.imgSrc}`} alt={item.name} />
                  </a>
                </div>
                <div className="product-details">
                  <a href={`/shop/${item.slug}`} className="product-name">
                    {item.name}
                  </a>
                  <ul className="rating">
                    <li>
                      {" "}
                      <span className="icofont-ui-rating"></span>
                    </li>
                    <li>
                      {" "}
                      <span className="icofont-ui-rating"></span>
                    </li>
                    <li>
                      {" "}
                      <span className="icofont-ui-rating"></span>
                    </li>
                    <li>
                      {" "}
                      <span className="icofont-ui-rating"></span>
                    </li>
                    <li>
                      {" "}
                      <span className="icofont-ui-rating"></span>
                    </li>
                  </ul>
                  <p className="price">{item.priceRange}</p>

                  <ul className="pd-btn-group">
                    <li>
                      <a
                        className="shop-btn"
                        role="button"
                        onClick={() => addToWishlist(item.id)}
                      >
                        <span className="icofont-heart-alt"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="shop-btn"
                        role="button"
                        onClick={() => addToCart(item.id)}
                      >
                        <span className="icofont-shopping-cart"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="shop-btn"
                        role="button"
                        onClick={() => openLightBoxModal(item)}
                      >
                        <span className="icofont-eye"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopRecentProducts;
