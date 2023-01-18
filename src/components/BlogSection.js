import React from "react";
import { Link } from "react-router-dom";

export default function BlogSection() {
  const title = "Latest news and inspirational stories";
  const description =
    "Check out our latest blog posts, articles, client success stories and essential announcement.";
  const blogs = [
    {
      image: "/assets/images/blog/01.jpg",
      title: "From a small startup to a leading global agency in 10 Years",
      category: "Operations",
      date: "Feb 4, 2020",
      slug: "blog-1",
  },
  {
      image: "/assets/images/blog/02.jpg",
      title: "How google’s BERT algorithm affects your website traffic",
      category: "Marketing",
      date: "Feb 15, 2020",
      slug: "blog-2",
  },
  {
      image: "/assets/images/blog/03.jpg",
      title: "Five reasons why you must create a website for your company",
      category: "Finance",
      date: "sept 10, 2020",
      slug: "blog-3",
  },
  {
      image: "/assets/images/blog/04.jpg",
      title: "Five reasons why you must create a website for your company",
      category: "Finance",
      date: "sept 10, 2020",
      slug: "blog-4",
  },
  {
      image: "/assets/images/blog/05.jpg",
      title: "Five reasons why you must create a website for your company",
      category: "Finance",
      date: "sept 10, 2020",
      slug: "blog-5",
  },
  {
      image: "/assets/images/blog/06.jpg",
      title: "Five reasons why you must create a website for your company",
      category: "Finance",
      date: "sept 10, 2020",
      slug: "blog-6",
  }
  ];
  return (
    <section className="space-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row border-bottom">
          {blogs.map((item, index) => (
            <div className="col-lg-4 col-sm-6 mb-4" key={index}>
              <div className="blog-post">
                <div className="blog-post-image">
                  <img className="img-fluid" src={item.image} alt="" />
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-info">
                    <div className="blog-post-author">
                      <Link
                        to={`/blog/${item.slug}`}
                        className="btn btn-light-round btn-round text-primary"
                      >
                        {item.category}
                      </Link>
                    </div>
                    <div className="blog-post-date">
                      <Link to={`/blog/${item.slug}`}>{item.date}</Link>
                    </div>
                  </div>
                  <div className="blog-post-details">
                    <h5 className="blog-post-title">
                      <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-12 d-md-flex justify-content-center align-items-center">
            <p className="mb-3 mb-md-0 mx-0 mx-md-3 text-light">
              We have articles on a range of topics
            </p>
            <Link to="/blogs" className="btn btn-primary-round btn-round mx-0 mx-md-3">View all Blogs<i className="fas fa-arrow-right ps-3"></i></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
