import React from "react";
interface TeamDataProp {
  teamData: {
    imgSrc: string;
    name: string;
    position: string;
    about: string;
  };
}
const TeamDetailSection: React.FC<TeamDataProp> = ({ teamData }) => {
  return (
    <section>
      <div className="team pb-60">
        <div className="container">
          <div className="row">
            <div
              className="col-md-5 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="team-card-details-left mb-35">
                <div className="team-card team-details-card">
                  <div className="member-img">
                    <img src={`/${teamData.imgSrc}`} alt={teamData.name} />
                  </div>
                  <div className="member-details">
                    <h4 className="member-name mb-0">{teamData.name}</h4>
                    <p className="member-title">{teamData.position}</p>
                  </div>
                </div>

                <div className="personal-info">
                  <div className="team-sec-title">
                    <h4 className="card-title">Personal Info</h4>
                  </div>
                  <div className="team-info">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <td className="ps-0">Phone:</td>
                          <td>
                            <a href="tel:+(123)4567890">+(123)4567890</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="ps-0">Office:</td>
                          <td>
                            <a href="tel:">+(123)4567890</a>
                          </td>
                        </tr>

                        <tr>
                          <td className="ps-0">E-mail:</td>
                          <td>
                            <a href="mailto:test@example.com">
                              test@example.com
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="ps-0">Gender:</td>
                          <td>Male</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-7 col-lg-8"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="team-about-details-wrapper pl-30 mb-35">
                <div className="team-about">
                  <div className="team-sec-title">
                    <h4 className="card-title">About Me</h4>
                  </div>
                  <p>{teamData.about}</p>
                </div>

                <div className="team-about">
                  <div className="team-sec-title">
                    <h4 className="card-title">Working Time</h4>
                  </div>
                  <div className="col-md-12">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Day</th>
                          <th scope="col">Time</th>
                        </tr>
                      </thead>
                      <tbody className="table-body-text">
                        <tr>
                          <td>SUN</td>
                          <td>11:30AM - 12:30PM</td>
                        </tr>
                        <tr>
                          <td>THU</td>
                          <td>12:00AM - 05:00PM</td>
                        </tr>
                        <tr>
                          <td>MON</td>
                          <td>02:00AM - 07:30PM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="team-about m-mr-0">
                  <div className="team-sec-title">
                    <h4 className="card-title">Work Experience</h4>
                  </div>
                  <div className="col-md-12">
                    <div className="table-responsive">
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">YEAR</th>
                            <th scope="col">DEPARTMENT</th>
                            <th scope="col">POSITION</th>
                            <th scope="col">COMPANY</th>
                          </tr>
                        </thead>
                        <tbody className="table-body-text">
                          <tr>
                            <td>2007 - 2022</td>
                            <td>Civil Engineer</td>
                            <td>Senior Designer</td>
                            <td>Midtown Group</td>
                          </tr>
                          <tr>
                            <td>2010 - 2020</td>
                            <td>Civil Engineer</td>
                            <td>Senior Designer</td>
                            <td>Midtown Group</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailSection;
