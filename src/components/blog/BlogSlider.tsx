import React from 'react';
import { blogSlider } from "../../data/Data";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BlogSlider = () => {
  return (
    <div
      className="product-slider mb-50"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <Swiper
        className="swiper productSlider"
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        modules={[Navigation]}
      >
        {blogSlider.map((item) => (
          <SwiperSlide className="swiper-slide" key={item.id}>
            <div className="slider-item-img">
              <img src={item.imgSrc} alt="Image not found" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next arrow-btn"></div>
      <div className="swiper-button-prev arrow-btn"></div>
    </div>
  );
};

export default BlogSlider;
