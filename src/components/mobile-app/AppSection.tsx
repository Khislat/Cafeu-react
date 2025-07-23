import React from 'react';
const AppSection = () => {
  return (
    <section>
      <div className="app-section app-section-1 cpy-8">
        <div className="container">
          <div className="app-inner">
            <div className="row">
              <div
                className="col-lg-7 col-md-9"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="app-feature">
                  <h2 className="app-title mb-0">
                    Simple Way to Order <br /> Your Food Faster
                  </h2>
                  <p className="des my-4 my-md-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eius- <br /> mod tempor incididunt ut labore et dolore magna
                    aliqua. Q ipsum <br /> suspendisse ultrices gravida. Risus
                    commodo viverra maeceas
                    <br /> accumsan lacus vel facilisis
                  </p>
                  <div className="app-store">
                    <a href="" className="store">
                      <img
                        src="img/app/play-store.png"
                        alt=""
                        className="store-logo"
                      />
                    </a>
                    <a href="" className="store">
                      <img
                        src="img/app/apple.png"
                        alt=""
                        className="store-logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 col-md-3"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="app-img">
                  <img src="img/app/app-2.png" className="app-one" alt="" />
                  <img src="img/app/app-1.png" className="app-tow" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
