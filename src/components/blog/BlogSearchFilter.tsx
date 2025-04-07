import { useCafeuContext } from "../../context/CafeuContext";

const BlogSearchFilter = () => {
  const { searchBlogQuery, setSearchBlogQuery } = useCafeuContext();

  return (
    <form
      className="hero-form mb-50"
      action="#"
      data-aos="fade-up"
      data-aos-duration="500"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="input-group">
        <input
          type="text"
          className="form-control subscribtion-input"
          placeholder="Search"
          value={searchBlogQuery}
          onChange={(e) => setSearchBlogQuery(e.target.value)}
        />
        <button type="submit" className="custom-btn">
          <span className="icofont-search-1"></span>
        </button>
      </div>
    </form>
  );
};

export default BlogSearchFilter;
