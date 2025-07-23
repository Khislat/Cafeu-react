import React from 'react';
import { Link } from "react-router-dom";
import { serviceList } from "../../data/Data";
import { motion } from "framer-motion";
interface Props {
  darkMode: boolean;
}
const ServiceSection2 = ({ darkMode }: Props) => {
  return (
    <section>
      <motion.div
        className="ad-service"
        initial={{
          y: 80,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
        }}
      >
        <div className="ad-service-title-container">
          <img src="/img/aida-images/service-icon.png" alt="" />
          <h4 className="ad-title-text">Quality Service</h4>
          <p className="ad-description-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            asperiores
            <br className="d-none d-md-block" />
            necessitatibus, porro quis animi doloribus quo deleniti id voluptate
            voluptas?
          </p>
        </div>
        <div className="container ad-service-container">
          {serviceList.slice(-3).map((item) => (
            <div className="ad-single-service position-relative" key={item.id}>
              <div className="ad-single-service-top-section">
                <img src={darkMode ? item.darkImg : item.lightImg} alt="" />
                <h5>{item.title}</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur elit.
                  <br />
                  Cupiditate eaque ab quaerat cum
                  <br />
                  praesentium harum!
                </p>
                <Link to={`/service/${item.slug}`} className="ad-service-btn">
                  Read More
                </Link>
              </div>
              <img
                className="w-100 ad-service-image"
                src={item.mainImgSrc}
                alt=""
              />
              <div className="ad-single-service-overlay">
                <div>
                  <img src="/img/aida-images/service-icon2.png" alt="" />
                  <h5>{item.title}</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur elit.
                    <br />
                    Cupiditate eaque ab quaerat cum
                    <br />
                    praesentium harum!
                  </p>
                  <Link to={`/service/${item.slug}`}>Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceSection2;
