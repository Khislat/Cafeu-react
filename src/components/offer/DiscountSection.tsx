import { Link } from "react-router-dom";

const DiscountSection = () => {
  return (
    <section>
      <div className="about-page-discount">
        <div className="about-page-discount-text-container">
          <p>Happy Announcement</p>
          <h4>
            Get 60% Flat Off
            <br /> On Your First Order
          </h4>
          <Link to="/shop">
            <button>Order Now</button>
          </Link>
        </div>
        <div className="about-page-discount-image">
          <img
            src="/img/aida-images/about-page-discount-image.png"
            className="about-page-discount-image-one"
            alt=""
          />
          <div className="about-page-discount-percent">
            <p>
              60%
              <span>OFF</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
