import React from 'react';
import BlogListRecentPost from "./BlogListRecentPost";
import BlogSlider from "./BlogSlider";
import BlogSearchFilter from "./BlogSearchFilter";
import BlogCategoryFilter from "./BlogCategoryFilter";
import BlogTagFilter from "./BlogTagFilter";

const BlogListSidebar = () => {
  return (
    <div className="col-lg-4" data-aos="fade-up" data-aos-duration="500">
      <div className="sidebar-default pl-25">
        <BlogSearchFilter />
        <BlogListRecentPost />
        <BlogCategoryFilter />
        <BlogSlider />
        <BlogTagFilter />
      </div>
    </div>
  );
};

export default BlogListSidebar;
