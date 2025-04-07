import React from "react";
import SubscribeForm from "../form/SubscribeForm";
interface SubscribeProps {
  wrapper: string,
  style: string,
}
const SubscribeSection:React.FC<SubscribeProps> = ({wrapper, style}) => {
  return (
    <section>
      <div
        className={`subscribe-wrapper ${wrapper}`}
        data-background="assets/img/image/ad-ban-bg.png"
      >
        <div className={`subscribe ${style}`}>
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 my-2 newsletter-text-container"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h4 className="subs-title">
                  Stay Informed About Special Offers
                </h4>
                <p className="subs-des mb-0">
                  For Exclusive Deals, Coupons, News and More!
                </p>
              </div>
              <div
                className="col-md-6 my-2"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="hero-text">
                  <SubscribeForm margin="input-group" inputStyle="form-control" footer={false}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
