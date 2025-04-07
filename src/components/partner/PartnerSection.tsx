import { partnerList } from "../../data/Data";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const PartnerSection = () => {
  return (
    <section>
      <div
        className="partner cmy-8"
        data-background="assets/img/partner/bg.png"
      >
        <div className="partner-bg">
          <div className="container">
            <div className="row">
              <div
                className="col-12"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Swiper
                  slidesPerView={4}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  className="swiper swiper-container partner-active"
                  modules={[Autoplay]}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    480: {
                      slidesPerView: 2,
                    },
                    767: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {partnerList.map((item) => (
                    <SwiperSlide className="swiper-slide" key={item.id}>
                      <div className="partner-logo">
                        <img src={`/${item.imgSrc}`} alt="Image not found" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
