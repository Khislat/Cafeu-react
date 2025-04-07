import { customerList } from "../../data/Data";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
interface CustomerProps {
  theme: string;
  header: boolean;
}
const CustomerSection2: React.FC<CustomerProps> = ({ theme, header }) => {
  return (
    <section>
      <div className={`customer customer-2 ${theme} cpy-6`}>
        <div className="container">
          {header && (
            <div
              className="section-head text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="sm-title ">Testimonials</span>
              <h2 className="sec-title">Our Clients Choose Us</h2>
            </div>
          )}
          <div className={`row justify-content-center ${header && "mt-40"}`}>
            <div
              className="col-md-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Swiper
                className="swiper customer-review-second"
                pagination={{
                  el: ".review-pagination",
                  dynamicBullets: true,
                  clickable: true,
                }}
                autoplay={{ delay: 3000 }}
                loop={true}
                modules={[Pagination, Autoplay]}
              >
                {customerList.slice(-3).map((item) => (
                  <SwiperSlide
                    className="swiper-slide review-item"
                    key={item.id}
                  >
                    <div className="customer-details">
                      <div className="customer-img">
                        <img src={item.imgSrc} alt={item.name} />
                      </div>
                      <h4 className="customer-name">{item.name}</h4>
                      <p className="customer-title">{item.type}</p>
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
                      <p className="message">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis Risus commodo viverra maec
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="review-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection2;
