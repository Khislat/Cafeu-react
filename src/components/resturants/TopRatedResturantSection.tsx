import { restaurantData } from "../../data/Data";

const TopRatedResturantSection = () => {
  return (
    <div className="cb-top-rated-restaurant pt-100 pb-65">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up" data-aos-duration="500">
            <div className="cb-section-title text-center mb-45">
              <p className="cb-section-icon mb-0">
                <span className="cb-section-icon-inner">
                  <i className="icofont-beans"></i>
                </span>
              </p>
              <span className="cb-section-subtitle">Top Restaurants</span>
              <h2 className="cb-section-title">Top Rated Restaurants</h2>
              <p>
                Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua. Quis ipsum susp
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {restaurantData.map((item) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="500"
              key={item.id}
            >
              <div className="cb-top-restaurant-single mb-40">
                <div className="cb-top-restaurant-img">
                  <a href="#">
                    <img src={item.imgSrc} alt={item.name} />
                  </a>
                  <div className="cb-top-restaurant-img-text">
                    <h4 className="cb-top-restaurant-title">
                      <a href="#">{item.name}</a>
                    </h4>
                    <div className="cb-top-restaurant-categories-meta">
                      <a href="#">Burger</a>
                      <a href="#">Donuts</a>
                      <a href="#">Pizza</a>
                    </div>
                  </div>
                </div>
                <div className="cb-top-restaurant-location-time border-topp">
                  <span className="cb-top-restaurant-location-icon">
                    <img src="img/icon/rest.png" alt="icon" />
                  </span>
                  <div className="cb-top-location-time">
                    <span className="cb-top-restaurant-meta">
                      <i className="icofont-clock-time"></i> {item.time}
                    </span>
                    <span className="cb-top-restaurant-meta">
                      <i className="icofont-map-pins"></i> {item.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedResturantSection;
