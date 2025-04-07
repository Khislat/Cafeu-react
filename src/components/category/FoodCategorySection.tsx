import { foodCategoryData } from "../../data/Data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
const FoodCategorySection = () => {
  const [slides, setSlides] = useState<number>(0);

  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 500
        ? 1
        : window.innerWidth <= 992
        ? 2
        : window.innerWidth <= 1200
        ? 3
        : window.innerWidth <= 1400
        ? 4
        : window.innerWidth > 1400
        ? 5
        : 0
    );
  };

  useEffect(() => {
    // Initially set the amount of slides on page load
    setSlidesPerview();

    // Add the event listener on component mount
    window.addEventListener("resize", setSlidesPerview);

    // Remove the listener when component unmounts
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);
  return (
    <div className="cb-category-area bg-light-blue pt-80 pb-80">
      <div className="cb-category-wrapper">
        <div className="cb-category-inner">
          <div className="container-fluid g-0">
            <div className="row align-items-center">
              <div
                className="col-xl-2 col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="cb-category-inner-text mb-40 mb-md-0 pl-50">
                  <div className="cb-section-title">
                    <p className="cb-section-icon mb-0">
                      <span className="cb-section-icon-inner">
                        <i className="icofont-beans"></i>
                      </span>
                    </p>
                    <span className="cb-section-subtitle">Categories</span>
                    <h2 className="cb-section-title">Popular Categories</h2>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-10 col-lg-9 col-md-8"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="cb-category-inner-slider-wrapper pl-58">
                  <Swiper
                    className="swiper-container swiper cb-category-active"
                    slidesPerView={slides}
                    spaceBetween={35}
                    loop={true}
                  >
                    {foodCategoryData.map((item) => (
                      <SwiperSlide className="swiper-slide" key={item.id}>
                        <div className="cb-category-card">
                          <img src={item.imgSrc} alt="category img" />
                          <div className="cb-category-card-text">
                            <h4>
                              <Link
                                to="/shop"
                                className="cb-category-cart-name"
                              >
                                {item.name}
                              </Link>
                            </h4>
                            <span className="cb-category-cart-price">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCategorySection;
