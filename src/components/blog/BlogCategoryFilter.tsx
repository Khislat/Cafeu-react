import { useCafeuContext } from "../../context/CafeuContext";
import { blogDataList } from "../../data/Data";

type BlogList = {
  id: number;
  imgSrc: string;
  title: string;
  slug: string;
  desc: string;
  date: string;
  longDesc: string;
  category: string;
};
const BlogCategoryFilter = () => {
  const { selectedBlogCategory, handleBlogCategoryChange } = useCafeuContext();
  const categories = [
    "All",
    "Restaurant",
    "Pizza",
    "Trends",
    "Breakfast",
    "Italian",
    "Sushi",
  ];
  // Calculate the count of blogs for each category
  const categoryCounts: Record<string, number> = {};

  // Manually add the 'All' category with the total length
  categoryCounts["All"] = blogDataList.length;

  blogDataList.forEach((blog: BlogList) => {
    if (!categoryCounts[blog.category]) {
      categoryCounts[blog.category] = 1;
    } else {
      categoryCounts[blog.category]++;
    }
  });
  return (
    <div
      className="sidebar-single mb-50"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <h4 className="sidebar-title mb-25">All Categories</h4>
      <ul className="service-list mt-0">
        {categories.map((category, index) => (
          <li key={index}>
            <a
              className={`service-link blog-category ${
                selectedBlogCategory === category ? "active" : ""
              }`}
              role="button"
              onClick={() => handleBlogCategoryChange(category)}
            >
              <i className="icofont-double-right"></i> {category}{" "}
            </a>
            <span
              className={`blog-category-span ${
                selectedBlogCategory === category ? "active" : ""
              }`}
            >
              ({categoryCounts[category] || 0})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategoryFilter;
