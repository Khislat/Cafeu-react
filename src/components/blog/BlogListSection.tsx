import React from 'react';
import BlogListSidebar from "./BlogListSidebar";
import { useCafeuContext } from "../../context/CafeuContext";
import { Link } from "react-router-dom";

const BlogListSection = () => {
  const {
    currentBlogItems,
    currentBlogPage,
    handleBlogPageChange,
    totalBlogPages,
  } = useCafeuContext();

  return (
    <section>
      <div className="blog-wrapper pt-105 pb-55">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-left-wrapp">
                {currentBlogItems.length === 0 ? (
                  <div className="no-product-container">
                    <div className="no-product-img-container">
                      <img src="/img/no-data-found.jpg" alt="no-product-img" />
                    </div>
                    <p className="no-product-text">No Such Blog Available</p>
                    <Link to="/" className="custom-btn mt-10">
                      Go back to Home
                    </Link>
                  </div>
                ) : (
                  <>
                    {currentBlogItems.map((item) => (
                      <article
                        className="postbox__item format-image mb-50"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        key={item.id}
                      >
                        <div className="postbox__thumb w-img">
                          <a href={`/blog/${item.slug}`}>
                            <img src={item.imgSrc} alt={item.title} />
                          </a>
                        </div>
                        <div className="postbox__content">
                          <div className="blog-meta mb-10">
                            <span className="blog-meta-single">
                              <i className="icofont-calendar"></i>
                              {item.date}
                            </span>
                            <span className="blog-meta-single">
                              <a href="#">
                                <i className="icofont-ui-user"></i>Admin
                              </a>
                            </span>
                            <span className="blog-meta-single">
                              <a href="#">
                                <i className="icofont-speech-comments"></i>
                                No Comments
                              </a>
                            </span>
                          </div>
                          <h3 className="postbox__title">
                            <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                          </h3>
                          <div className="postbox__text">
                            <p>{item.longDesc}</p>
                          </div>
                          <div className="post__button mt-25">
                            <Link className="tp-btn" to={`/blog/${item.slug}`}>
                              {" "}
                              READ MORE
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                    <div
                      className="basic-pagination mb-50"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      <ul className="page-numbers">
                        <li>
                          <button
                            disabled={currentBlogPage === 1}
                            onClick={() =>
                              handleBlogPageChange(currentBlogPage - 1)
                            }
                            className="page-number-btn"
                          >
                            <i className="icofont-rounded-left"></i>
                          </button>
                        </li>
                        {Array.from({ length: totalBlogPages }).map(
                          (_, index) => (
                            <li key={index}>
                              <button
                                className={`page-number-btn ${
                                  currentBlogPage === index + 1 ? "current" : ""
                                }`}
                                onClick={() => handleBlogPageChange(index + 1)}
                              >
                                <span
                                  aria-current="page"
                                  className="page-number"
                                >
                                  {index + 1}
                                </span>
                              </button>
                            </li>
                          )
                        )}
                        <li>
                          <button
                            disabled={currentBlogPage === totalBlogPages}
                            className="page-number-btn"
                            onClick={() =>
                              handleBlogPageChange(currentBlogPage + 1)
                            }
                          >
                            <i className="icofont-rounded-right"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
            <BlogListSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogListSection;
