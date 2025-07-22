import React from 'react';
import { useCafeuContext } from "../../context/CafeuContext";

const BlogTagFilter = () => {
  const { selectedBlogTags, handleBlogTagChange } = useCafeuContext();
  const categories = [
    "Restaurant",
    "Pizza",
    "Trends",
    "Breakfast",
    "Italian",
    "Sushi",
  ];
  return (
    <div
      className="sidebar-single mb-50"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <h4 className="sidebar-title mb-25">Tags</h4>
      <div className="sidebar-tags">
        {categories.map((category, index) => (
          <a
            role="button"
            className={`blog-tag ${
              selectedBlogTags.includes(category) ? "active" : ""
            }`}
            onClick={() => handleBlogTagChange(category)}
            key={index}
          >
            {category}
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogTagFilter;
