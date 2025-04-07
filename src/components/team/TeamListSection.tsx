import { teamList } from "../../data/Data";

const TeamListSection = () => {
  return (
    <section>
      <div className="team cpy-8">
        <div className="container">
          <div
            className="section-head text-center "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="sm-title ">Our Team</span>
            <h2 className="sec-title">Meet Our Team</h2>
          </div>
          <div className="row mt-40">
            {teamList.map((item) => (
              <div
                className="col-md-4 col-sm-6 mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                key={item.id}
              >
                <div className="team-card">
                  <div className="member-img">
                    <a href={`/team/${item.slug}`}>
                      <img src={item.imgSrc} alt="Image not found" />
                    </a>
                  </div>
                  <div className="member-details">
                    <a href={`/team/${item.slug}`} className="member-name">
                      {item.name}
                    </a>
                    <p className="member-title">{item.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamListSection;
