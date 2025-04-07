import { Link } from "react-router-dom";
import { blogDataList } from "../../data/Data";
import { motion } from "framer-motion";
const BlogSection3 = () => {
  return (
    <section>
      <motion.div
        className="ad-article"
        initial={{
          y: 80,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
        }}
      >
        <div className="ad-article-title-container">
          <img src="/img/aida-images/service-icon.png" alt="" />
          <h4 className="ad-title-text">Blog & Articles</h4>
          <p className="ad-description-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            asperiores , porro quis animi doloribus quo deleniti
          </p>
        </div>
        <div className="container ad-article-container">
          <div className="row g-4">
            {blogDataList.slice(-3).map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="ad-single-card">
                  <Link to={`/blog/${item.slug}`}>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                  <div className="overflow-hidden">
                    <Link to={`/blog/${item.slug}`}>
                      <img src={item.imgSrc} className="ad-blog-image" alt="" />
                    </Link>
                  </div>
                  <p>{item.date}</p>
                  <Link to={`/blog/${item.slug}`}>
                    <h4>{item.title}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogSection3;
