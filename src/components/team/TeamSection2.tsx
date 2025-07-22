
import { teamList } from "../../data/Data";
import React from "react";
interface TeamProp {
  theme: string;
}
const TeamSection2: React.FC<TeamProp> = ({ theme }) => {
  return (
    <div className={`cb-team-area ${theme} pt-100 pb-65`}>
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up" data-aos-duration="500">
            <div className="cb-section-title text-center mb-45">
              <p className="cb-section-icon mb-0">
                <span className="cb-section-icon-inner">
                  <i className="icofont-beans"></i>
                </span>
              </p>
              <span className="cb-section-subtitle">Experienced Chef</span>
              <h2 className="cb-section-title">Meet Experienced Chef</h2>
              <p>
                Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua. Quis ipsum susp
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {teamList.slice(0, 3).map((item) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="500"
              key={item.id}
            >
              <div className="cb-team-single text-center mb-40">
                <div className="cb-team-single-img">
                  <a href={`/team/${item.slug}`}>
                    <img src={item.imgSrc} alt={item.name} />
                  </a>
                </div>
                <div className="cb-team-single-content">
                  <h4 className="cb-team-single-name">
                    <a href={`/team/${item.slug}`}>{item.name}</a>
                  </h4>
                  <span className="cb-team-single-designation">
                    {item.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection2;
