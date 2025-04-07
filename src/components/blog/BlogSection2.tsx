import { blogDataList } from "../../data/Data";

const BlogSection2 = () => {
  return (
    <section>
      <div className="latest-blog latest-blog-3 home4-blog dark-mode border-tp pt-100 pb-65">
        <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-duration="500">
              <div className="cb-section-title text-center mb-45">
                <p className="cb-section-icon mb-0">
                  <span className="cb-section-icon-inner">
                    <i className="icofont-beans"></i>
                  </span>
                </p>
                <span className="cb-section-subtitle">News & Blog</span>
                <h2 className="cb-section-title">Latest News & Blog</h2>
                <p>
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor <br />
                  incididunt ut labore et dolore magna aliqua. Quis ipsum susp
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {blogDataList.slice(0, 3).map((item) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4"
                data-aos="fade-up"
                data-aos-duration="500"
                key={item.id}
              >
                <div className="post-card">
                  <div className="post-img">
                    <a href={`/blog/${item.slug}`}>
                      <img src={item.imgSrc} alt="Image not found" />
                    </a>
                  </div>
                  <div className="post-details">
                    <a href={`/blog/${item.slug}`} className="post-title">
                      {item.title}
                    </a>
                    <p className="post-des">{item.desc}</p>

                    <div className="date-view">
                      <p className="date mb-0">{item.date} - Comments</p>
                      <a href={`/blog/${item.slug}`} className="view-more">
                        Read More
                      </a>
                    </div>
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

export default BlogSection2;
