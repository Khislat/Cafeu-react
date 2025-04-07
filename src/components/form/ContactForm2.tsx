const ContactForm2 = () => {
  return (
    <section>
      <div className="contact-page-form-container ">
        <div className="contact-page-form">
          <h4>Get In Touch</h4>
          <p>
            It was not possible to renovate the two little houses on the land
            because
          </p>
          <form>
            <div className="row ad-reservation-form contact-page-single-form">
              <div className="col-12 col-sm-6 position-relative">
                <div className="ad-reservation-form-input-container">
                  <i className="fa-regular fa-user"></i>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6 position-relative ps-sm-0 pe-sm-3">
                <div className="ad-reservation-form-input-container">
                  <i className="fa-regular fa-envelope"></i>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row ad-reservation-form contact-page-single-form contact-page-phone-container">
              <div className="col-12 col-sm-6 position-relative">
                <div className="ad-reservation-form-input-container">
                  <i className="fa-solid fa-phone"></i>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6 position-relative ps-sm-0 pe-sm-3">
                <div className="ad-reservation-form-input-container">
                  <i className="fa-solid fa-user-large"></i>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="ad-reservation-form contact-page-single-form">
              <div className="col-12 position-relative ps-2 contact-page-form-edit">
                <div>
                  <i className="fa-solid fa-pen"></i>
                  <span className="ps-3">How can we help you</span>
                </div>
                <textarea name="message" id="#messageArea" rows={3}></textarea>
              </div>
            </div>
            <button>Send Message</button>
          </form>
        </div>
        <div className="contact-page-form-right">
          <div className="contact-page-right-single-container">
            <i className="fa-solid fa-phone-volume"></i>
            <div>
              <h5>Call Now</h5>
              <a href="tel:+554551556695">
                <span>+554551556695</span>
              </a>
              <br />
              <a href="tel:+554551556695">
                <span>+554551556695</span>
              </a>
            </div>
          </div>
          <div className="contact-page-right-single-container">
            <i className="fa-solid fa-envelope-open-text"></i>
            <div>
              <h5>Message Now</h5>
              <span>ubel@example.com,</span>
              <br />
              <span>aran@example.com,</span>
            </div>
          </div>
          <div className="contact-page-right-single-container">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <h5>Address Now</h5>
              <span>Rangpur, fullbari Road,</span>
              <br />
              <span>2548,New City.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-page-map">
        <iframe src="https://maps.google.com/maps?q=dhaka&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
      </div>
    </section>
  );
};

export default ContactForm2;
