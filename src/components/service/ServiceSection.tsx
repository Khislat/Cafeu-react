import { Link } from "react-router-dom";
import { useCafeuContext } from "../../context/CafeuContext";
import { serviceList } from "../../data/Data";
import React from "react";
interface ServiceProps {
  style: string;
  showBtn: boolean;
}
const ServiceSection: React.FC<ServiceProps> = ({ style, showBtn }) => {
  const { serviceItemsToShow, handleServiceShowMore, handleServiceShowLess } =
    useCafeuContext();
  return (
    <section>
      <div className={`service ${style} cpy-8`}>
        <div className="container">
          <div className="row">
            <div
              className="section-head text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="sm-title ">Our Service</span>
              <h2 className="sec-title mb-0">What Restaurant Services</h2>
            </div>
          </div>
          <div className="service-card-sec mt-40">
            <div className="row">
              {serviceList.slice(0, serviceItemsToShow).map((item) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  key={item.id}
                >
                  <div className="service-card">
                    <div className="service-card-content">
                      <div className="service-icon serv-icon">
                        <img
                          src={item.imgSrc ? item.imgSrc : item.lightImg}
                          alt={item.title}
                        />
                      </div>
                      <h4>
                        <Link
                          to={`/service/${item.slug}`}
                          className="service-name"
                        >
                          {item.title}
                        </Link>
                      </h4>
                      <p className="service-sm-des">{item.desc}</p>
                      <a href={`/service/${item.slug}`} className="show-btn">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {showBtn && (
              <div className="row">
                <div className="text-center my-4">
                  {serviceItemsToShow === 6 ? (
                    <a
                      className="custom-btn"
                      role="button"
                      onClick={handleServiceShowMore}
                    >
                      Show More
                    </a>
                  ) : (
                    <a
                      className="custom-btn"
                      role="button"
                      onClick={handleServiceShowLess}
                    >
                      Show Less
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
