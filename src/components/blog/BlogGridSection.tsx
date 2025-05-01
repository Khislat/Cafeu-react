import { useCafeuContext } from "../../context/CafeuContext";
import { blogDataList } from "../../data/Data";

const BlogGridSection = () => {
  const { itemsToShow, handleBlogShowMore, handleBlogShowLess } =
    useCafeuContext();
  return (
    <section>
      <div className="blog-wrapper pt-100 pb-80">
        <div className="container">
          <div
            className="section-head text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="sm-title ">News & Blog</span>
            <h2 className="sec-title">Latest News</h2>
          </div>
          <div className="row mt-40">
            {blogDataList.slice(0, itemsToShow).map((item) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                key={item.id}
              >
                <div className="post-card">
                  <div className="post-img">
                    <a href="">
                      <img src={item.imgSrc} alt={item.title} />
                    </a>
                  </div>
                  <div className="post-details">
                    <a href="" className="post-title">
                      {item.title}
                    </a>
                    <p className="post-des">{item.desc}</p>

                    <div className="date-view">
                      <p className="date">{item.date} - Comments</p>
                      <a href="" className="view-more">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="row">
              <div className="text-center my-4">
                {itemsToShow === 6 ? (
                  <a
                    className="custom-btn"
                    role="button"
                    onClick={handleBlogShowMore}
                  >
                    Show More
                  </a>
                ) : (
                  <a
                    className="custom-btn"
                    role="button"
                    onClick={handleBlogShowLess}
                  >
                    Show Less
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGridSection;
