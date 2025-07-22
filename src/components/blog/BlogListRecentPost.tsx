import React from 'react';
import { blogDataList } from "../../data/Data";

const BlogListRecentPost = () => {
  return (
    <div
      className="sidebar-single sidebar-recent-post mb-50"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <h4 className="sidebar-title mb-25">Latest Post</h4>
      {blogDataList.slice(0, 3).map((item) => (
        <div className="sidebar-post-single" key={item.id}>
          <div className="sidebar-post-img">
            <a href={`/blog/${item.slug}`}>
              <img src={`/${item.imgSrc}`} alt={item.title} />
            </a>
          </div>
          <div className="sidebar-post-content">
            <h5 className="sidebar-post-title">
              <a href={`/blog/${item.slug}`}>{item.title}</a>
            </h5>
            <span className="sidebar-post-date">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogListRecentPost;
