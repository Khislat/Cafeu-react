import { blogDataList } from "../../data/Data";
import React from "react";

interface BlogProps {
  style: string;
}
const BlogSection: React.FC<BlogProps> = ({ style }) => {
  return (
    <section>
      <div className={`latest-blog ${style} cpy-8`}>
        <div className="container">
          <div
            className="section-head text-center "
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <span className="sm-title ">News & Blog</span>
            <h2 className="sec-title">Latest News</h2>
          </div>
          <div className="row mt-40">
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

export default BlogSection;
