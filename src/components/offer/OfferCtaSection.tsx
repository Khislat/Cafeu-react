const OfferCtaSection = () => {
  return (
    <div className="cb-offer-cta pt-105 pb-105 text-center text-md-start">
      <div className="container">
        <div className="row">
          <div
            className="col-xxl-7 col-xl-6 col-lg-7 col-md-8 order-1 order-md-0"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="cb-offer-cta-content">
              <span className="cb-offer-cta-content-subtitle">
                Hot Chicken Breast
              </span>
              <h4 className="cb-offer-cta-content-title">
                We Have Excellent Of Quality Chicken
              </h4>
              <a href="#" className="offer-btn mt-25">
                Order Now
              </a>
            </div>
          </div>
          <div
            className="col-xxl-5 col-xl-6 col-lg-5 col-md-4"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="cb-offer-image mb-40 mb-md-0">
              <img src="img/icon/offer.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCtaSection;
