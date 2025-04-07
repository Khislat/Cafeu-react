import { customerList } from "../../data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const CustomerSection = () => {
  return (
    <section>
      <div className="customer customer-1 cpy-8">
        <div className="container">
          <div
            className="section-head text-center "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="sm-title ">Happy Customers</span>
            <h2 className="sec-title">Our Guestbook</h2>
          </div>
          <div className="d-flex justify-content-center">
            <div
              className="col-12 col-sm-12 col-md-10"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Swiper
                className="swiper customer-review"
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                pagination={{
                  el: ".review-pagination",
                  dynamicBullets: true,
                  clickable: true,
                }}
                modules={[Pagination]}
              >
                {customerList.slice(0, 3).map((item) => (
                  <SwiperSlide
                    className="swiper-slide review-item"
                    key={item.id}
                  >
                    <div className="row">
                      <div className="col-md-7 my-2">
                        <div className="review">
                          <img
                            src="img/icon/7.png"
                            alt=""
                            className="quotation"
                          />
                          <h2 className="review-title mb-0">
                            James Smith list <br /> Specifications 2023
                          </h2>
                          <p>
                            Organizations throughout the World to manage heir IT{" "}
                            <br /> with our unique approach to technology
                            agement and <br /> consultancy solutions. Provide
                            users with priate view <br /> and access permissions
                          </p>

                          <h3 className="customer-name mb-0">
                            {item.name} <span>- {item.type}</span>
                          </h3>
                        </div>
                      </div>
                      <div className="col-md-5 my-2">
                        <div className="customer-img">
                          <img src={item.imgSrc} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="review-pagination"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
