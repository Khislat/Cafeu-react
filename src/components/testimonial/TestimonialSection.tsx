import React from 'react';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
type Props = {
  img: string;
};
const TestimonialSection = ({ img }: Props) => {
  return (
    <section>
      <motion.div
        className="ad-customer-review"
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
        <div className="ad-review-title-container">
          <img src="/img/aida-images/service-icon.png" alt="" />
          <h4 className="ad-title-text">What Our Customer Says</h4>
          <p className="ad-description-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            aspernatur ipsa veritatis consectetur cupiditate minima quasi
            voluptates, eius magni?
          </p>
        </div>
        <div className="container position-relative">
          <div className="ad-review-bg-container">
            <div className="overflow-hidden ad-review-img-container">
              <img src={img} alt="" />
            </div>
            <div className="d-flex gap-3">
              <button className="card-review-btn card-review-btn-prev">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="card-review-btn card-review-btn-next">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div>
            <Swiper
              className="ad-review-carousel"
              navigation={{
                prevEl: ".card-review-btn-prev",
                nextEl: ".card-review-btn-next",
              }}
              loop={true}
              modules={[Navigation]}
            >
              <SwiperSlide className="ad-single-review">
                <div className="d-flex gap-2">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men
                  <br className="d-none d-md-block" />
                  who are so beguiled and demoralized by the charms of pleasure
                  of the
                  <br className="d-none d-md-block" />
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble
                  <br className="d-none d-md-block" />
                  that are bound to ensue
                </p>
                <div className="ad-review-person-container">
                  <img src="/img/aida-images/review-person.png" alt="" />
                  <div>
                    <h4>Miranda H. Halim</h4>
                    <span>Restaurant Manager</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="ad-single-review">
                <div className="d-flex gap-2">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men
                  <br className="d-none d-md-block" />
                  who are so beguiled and demoralized by the charms of pleasure
                  of the
                  <br className="d-none d-md-block" />
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble
                  <br className="d-none d-md-block" />
                  that are bound to ensue
                </p>
                <div className="ad-review-person-container">
                  <img src="/img/aida-images/review-person.png" alt="" />
                  <div>
                    <h4>Miranda H. Halim</h4>
                    <span>Restaurant Manager</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="ad-single-review">
                <div className="d-flex gap-2">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men
                  <br className="d-none d-md-block" />
                  who are so beguiled and demoralized by the charms of pleasure
                  of the
                  <br className="d-none d-md-block" />
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble
                  <br className="d-none d-md-block" />
                  that are bound to ensue
                </p>
                <div className="ad-review-person-container">
                  <img src="/img/aida-images/review-person.png" alt="" />
                  <div>
                    <h4>Miranda H. Halim</h4>
                    <span>Restaurant Manager</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
