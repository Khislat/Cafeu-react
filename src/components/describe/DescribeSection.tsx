import { Link } from "react-router-dom";

const DescribeSection = () => {
  return (
    <section>
      <div className="describe describe-2">
        <div className="container">
          <div className="row">
            <div
              className="describe-content "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="describe-content">
                <span className="describe-sm-title mb-0">Call To Action</span>
                <h2 className="call-sec-title mb-0">
                  Hire Your Next Candidate On Discate
                </h2>
                <p className="call-number mb-0">Call Us: +99 698 569 565</p>
                <Link to="/menu" className="custom-btn">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescribeSection;
