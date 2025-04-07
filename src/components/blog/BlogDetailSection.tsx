import React from "react";
import BlogListSidebar from "./BlogListSidebar";
interface BlogDataItemProp {
  blogPost: {
    imgSrc: string;
    date: string;
    title: string;
    longDesc: string;
  };
}
const BlogDetailSection: React.FC<BlogDataItemProp> = ({ blogPost }) => {
  return (
    <section className="single-blog-section">
      <div className="blog-wrapper pt-105 pb-55">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-left-wrapp ">
                <div
                  className="blog-img"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <img src={`/${blogPost.imgSrc}`} alt="Image not found" />
                </div>
                <div className="blog-details-content mb-50">
                  <div
                    className="blog-meta mb-10"
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    <span className="blog-meta-single">
                      <i className="icofont-calendar"></i>
                      {blogPost.date}
                    </span>
                    <span className="blog-meta-single">
                      <a href="#">
                        <i className="icofont-ui-user"></i>Admin
                      </a>
                    </span>
                    <span className="blog-meta-single">
                      <a href="#">
                        <i className="icofont-speech-comments"></i>No Comments
                      </a>
                    </span>
                  </div>
                  <h1 className="blog-details-title mb-20">{blogPost.title}</h1>
                  <p>{blogPost.longDesc}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accums lacus vel facilisis. rorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididun labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices
                  </p>
                  <div
                    className="row"
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    <div className="col-12">
                      <div className="blog-inner-img mt-20 mb-35">
                        <img
                          src="/img/service.png"
                          className="blog-inside-img"
                          alt="Image not found"
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className="blog-inner-title">
                    Special Food Recipes for Special
                  </h4>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accums lacus vel facilisis. rorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididun labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices
                  </p>

                  <div
                    className="blog-inner-tags mt-35"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <span className="blog-tag-label">Post Tags:</span>
                    <a href="#">Fish</a>
                    <a href="#">Food</a>
                    <a href="#">Launch</a>
                    <a href="#">Tasty</a>
                    <a href="#">Crispy</a>
                  </div>
                </div>

                <div
                  className="comment-section mb-50"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <h4 className="signle-comment-title mb-20">3 Comments</h4>
                  <div className="comment-area">
                    <div className="single-comment">
                      <div className="commenter-img">
                        <img src="/img/customer/3.png" alt="" />
                      </div>
                      <div className="comment">
                        <h4 className="commenter-name">Eunice J. Roller</h4>
                        <div className="date-reply">
                          <span className="comment-date">Jan 1, 2023</span>
                          <a href="" className="reply-btn">
                            Reply
                          </a>
                        </div>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecenas accumsan lacus
                          vel facilisis.{" "}
                        </p>
                      </div>
                    </div>

                    <div className="single-comment reply-comment">
                      <div className="commenter-img">
                        <img src="/img/customer/4.png" alt="" />
                      </div>
                      <div className="comment">
                        <h4 className="commenter-name">Bryan L. Parker</h4>
                        <div className="date-reply">
                          <span className="comment-date">March 1, 2023</span>
                          <a href="" className="reply-btn">
                            Reply
                          </a>
                        </div>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecenas accumsan lacus
                          vel facilisis.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="single-comment">
                      <div className="commenter-img">
                        <img src="/img/customer/5.png" alt="" />
                      </div>
                      <div className="comment">
                        <h4 className="commenter-name">Paul E. Johnson</h4>
                        <div className="date-reply">
                          <span className="comment-date">February 5, 2023</span>
                          <a href="" className="reply-btn">
                            Reply
                          </a>
                        </div>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecenas accumsan lacus
                          vel facilisis.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="comment-form mb-50"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h4 className="signle-comment-title mb-20">
                    Leave A Comment
                  </h4>
                  <div className="form">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6 mb-30">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-md-6 mb-30">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                        <div className="col-md-12 mb-30">
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="custom-btn">
                            Submit Comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <BlogListSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailSection;
