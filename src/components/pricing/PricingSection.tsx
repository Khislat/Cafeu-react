import { useCafeuContext } from "../../context/CafeuContext";
import { pricingList } from "../../data/Data";
import React from "react";
interface PricingProps {
  theme: string;
}
const PricingSection: React.FC<PricingProps> = ({ theme }) => {
  const { hoveredItemId, handleCardHover, handleCardLeave } = useCafeuContext();

  return (
    <section>
      <div className={`pricing pricing-2 ${theme} cpy-6`}>
        <div className="container">
          <div className="row">
            <div
              className="form-head"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="section-head text-center mb-40">
                <span className="sm-title"> Best Pricing </span>
                <h2 className="sec-title"> Our Pricing Plan </h2>
              </div>
            </div>
          </div>
          <div className="pricing-card-sec">
            <div className="row pricing-row">
              {pricingList.map((item) => (
                <div
                  className={`col-md-4 col-sm-6 mb-4 aos-init aos-animate ${
                    hoveredItemId === item.id ? "z-1" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  key={item.id}
                  onMouseEnter={() => handleCardHover(item.id)}
                  onMouseLeave={handleCardLeave}
                >
                  <div
                    className={`pricing-card ${
                      hoveredItemId === item.id ? "active" : ""
                    }`}
                  >
                    <h4 className="plan-name">{item.plan}</h4>
                    <h2 className="plan-price">
                      <sup className="currency-type">$ </sup>
                      {item.price}
                      <sub className="package-time">/mo</sub>
                    </h2>
                    <ul className="future-list">
                      <li>
                        <p>Dolor sit amet</p>
                      </li>
                      <li>
                        <p>Sed diam nonummy</p>
                      </li>
                      <li>
                        <p>Nibh euismod tincidunt</p>
                      </li>
                      <li>
                        <p>Ut laoreet dolore</p>
                      </li>
                      <li>
                        <p>{item.time} Day Finish</p>
                      </li>
                    </ul>
                    <a className="custom-btn-alt" href="#">
                      BUY NOW
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
