import React from "react";
import BlogSlider from "../blog/BlogSlider";

interface ServiceDetailsProp {
  serviceData : {
    title: string,
    mainImgSrc: string,
    longDesc: string,
  }
}
const ServiceDetailSection: React.FC<ServiceDetailsProp> = ({serviceData}) => {
  return (
    <section>
      <div className="service-details pt-105 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-info">
                <div
                  className="service-details-img mb-30"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src={`/${serviceData.mainImgSrc}`} alt="Image not Found" />
                </div>

                <div className="service-content ">
                  <div
                    className="mb-35"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <h2 className="service-heding my-3">
                      {serviceData.title}
                    </h2>

                    <p className="service-des">
                      {serviceData.longDesc}
                    </p>
                  </div>
                  <div className="row">
                    <div
                      className="col-md-6 mb-30"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="post-inner-img ">
                        <img src="/img/blog/10.png" alt="Image not found" />
                      </div>
                    </div>
                    <div
                      className="col-md-6 mb-30"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="h-100 align-items-center d-flex">
                        <div className="image-content my-3">
                          <p className="service-des">
                            Lorem ipsum dolor sit amet, consectetur adipising
                            elit, sed do eiusmod tempor incididunt ulabore et
                            dolore magna aliqua. Quis ipsum Lorem ipsum dolor
                            sit amet, consectetur adipising
                          </p>
                          <p className="service-des my-3">
                            Lorem ipsum dolor sit amet, consectetur adipising
                            elit, sed do eiusmod tempor incididunt ulabore et
                            dolore magna aliqua. Quis ipsum
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="service-inner-content mb-40"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h4 className="service-heding mb-20">
                      Special Occasions to our Restaurant
                    </h4>

                    <p className="service-des">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accums lacus vel facilisis. rorem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididun labore et dolore magna aliqua.
                      Quis ipsum suspendisse ultrices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="single-service-right-bar pl-20">
                <div
                  className="service-right-bar mb-50"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="service-list">
                    <h3 className="service-sec-title">All Service</h3>
                    <ul className="service-list">
                      <li>
                        <a href="" className="service-link">
                          <i className="icofont-double-right"></i>
                          Organic Vegetables{" "}
                        </a>{" "}
                        <span>(07)</span>
                      </li>
                      <li>
                        <a href="" className="service-link">
                          <i className="icofont-double-right"></i>
                          Fresh Fruits{" "}
                        </a>{" "}
                        <span>(05)</span>
                      </li>
                      <li>
                        <a href="" className="service-link">
                          <i className="icofont-double-right"></i>
                          Fresh Vegetables{" "}
                        </a>{" "}
                        <span>(10)</span>
                      </li>
                      <li>
                        <a href="" className="service-link">
                          <i className="icofont-double-right"></i>
                          Our Restaurant{" "}
                        </a>{" "}
                        <span>(13)</span>
                      </li>
                      <li>
                        <a href="" className="service-link">
                          <i className="icofont-double-right"></i>
                          Special Food{" "}
                        </a>{" "}
                        <span>(15)</span>
                      </li>
                      <li>
                        <a href="" className="service-link">
                          <i className="icofont-double-right"></i>
                          Organic Product{" "}
                        </a>{" "}
                        <span>(17)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="available-bar mb-50"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="avail-inner">
                    <div className="available-note position-static">
                      <div className="note-head bars">
                        <span className="sm-title mb-0">Opening Times</span>
                        <h2 className="note-title mb-0">Check Availability</h2>
                      </div>
                      <ul className="note-ul">
                        <li className="note-li">
                          <p className="day">Sunday to Tuesday</p>
                          <p className="time">09:00 - 06:00</p>
                        </li>
                        <li className="note-li">
                          <p className="day">Friday to Sunday</p>
                          <p className="time">06:00 - 09:00</p>
                        </li>
                        <li className="note-li">
                          <p className="day">Sunday to Tuesday</p>
                          <p className="time">09:00 - 06:00</p>
                        </li>
                        <li className="note-li">
                          <p className="day">Monday to Friday</p>
                          <p className="time">06:00 - 09:00</p>
                        </li>
                        <li className="note-li">
                          <p className="day">Monday to Saturday</p>
                          <p className="time">06:00 - 09:00</p>
                        </li>
                      </ul>

                      <div className="note-footer">
                        <h4 className="note-footer-text-cell">Call Us Now</h4>
                        <a
                          className="note-footer-text d-block"
                          href="tel:+993240-765230"
                        >
                          +993240-765230
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <BlogSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;
