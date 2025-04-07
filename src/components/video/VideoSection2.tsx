import { useCafeuContext } from "../../context/CafeuContext";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const VideoSection2 = () => {
  const { openVideoModal } = useCafeuContext();
  return (
    <section data-aos="fade-up">
      <div className="reservation-page-video">
        <div className="reservation-page-title-container">
          <img src="/img/aida-images/service-icon.png" alt="" />
          <h4 className="ad-title-text">Book For Private Events</h4>
        </div>
        <Swiper
          className="reservation-page-video-slider"
          navigation={{
            nextEl: ".reservation-page-video-next-btn",
            prevEl: ".reservation-page-video-prev-btn",
          }}
          modules={[Navigation]}
        >
          <SwiperSlide className="reservation-page-video-slides">
            <div className="text-center">
              <img
                className="ad-banner-img d-block"
                src="/img/aida-images/reservation-page-video-image.png"
                alt="..."
              />
            </div>
            <div className="ad-video-icon reservation-page-video-icon">
              <a
                className="text-decoration-none"
                role="button"
                onClick={openVideoModal}
              >
                <i className="fa-solid fa-play"></i>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="reservation-page-video-slides">
            <div className="text-center">
              <img
                className="ad-banner-img d-block"
                src="/img/aida-images/reservation-page-video-image.png"
                alt="..."
              />
            </div>
            <div className="ad-video-icon reservation-page-video-icon">
              <a
                className="text-decoration-none"
                role="button"
                onClick={openVideoModal}
              >
                <i className="fa-solid fa-play"></i>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="reservation-page-video-slides">
            <div className="text-center">
              <img
                className="ad-banner-img d-block"
                src="/img/aida-images/reservation-page-video-image.png"
                alt="..."
              />
            </div>
            <div className="ad-video-icon reservation-page-video-icon">
              <a
                className="text-decoration-none"
                role="button"
                onClick={openVideoModal}
              >
                <i className="fa-solid fa-play"></i>
              </a>
            </div>
          </SwiperSlide>
          <div className="reservation-page-video-btn-container">
            <button className="reservation-nav-btn reservation-page-video-prev-btn">
              <i className="fa-solid fa-thin fa-chevron-left"></i>
            </button>
            <button className="reservation-nav-btn reservation-page-video-next-btn">
              <i className="fa-solid fa-thin fa-chevron-right"></i>
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default VideoSection2;
