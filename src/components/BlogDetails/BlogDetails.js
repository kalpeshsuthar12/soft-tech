/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';

export default function BlogDetails(props) {
  const blogData = props.blogSelected
  const [{ image ,title, category, date, description  }]  = blogData;
  return (
    <section className="space-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="blog-detail">
              <div className="blog-post mb-4 mb-md-5">
                <div className="blog-post-image">
                  <img className="img-fluid" src={image} alt="" />
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-info">
                    <div className="blog-post-author">
                      <Link to="/blogs" className="btn btn-light-round btn-round text-primary">{category}</Link>
                    </div>
                    <div className="blog-post-date">
                      <Link to="/blogs">{date}</Link>
                    </div>
                  </div>
                  <div className="blog-post-details">
                    <h5 className="blog-post-title">
                      {title}
                    </h5>
                    <p className="mb-4">{description}</p>                   
                  </div>
                </div>
              </div>
              <div className="blog-post mb-4 mb-md-5">
                <div className="blog-post-content">
                  <div className="blog-post-details">
                   <div className="d-sm-flex align-items-center">
                      <div className="blog-post-meta pe-4">
                        <a href="#"><i className="far fa-heart pe-1"></i>14</a>
                        <a href="#"><i className="far fa-eye pe-1"></i>21</a>
                        <a href="#"><i className="far fa-comments pe-1"></i>03</a>
                      </div>
                      <div className="social d-flex align-items-center">
                        <p className="text-primary mb-0 pe-2">Share this post:</p>
                        <a href="#"><i className="fab fa-facebook-f pe-3 text-light"></i></a>
                        <a href="#"><i className="fab fa-twitter pe-3 text-light"></i></a>
                        <a href="#"><i className="fab fa-instagram pe-3 text-light"></i></a>
                        <a href="#"><i className="fab fa-linkedin text-light"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="comments mt-4 mt-md-5">
                <h5 className="mb-4">Comments</h5>
                <div className="d-flex mb-4">
                  <div className="avatar avatar-md">
                    <img src="/assets/images/avatar/01.jpg" className="img-fluid rounded-circle" alt="..." />
                  </div>
                  <div className="ms-3 border p-3 p-sm-4">
                    <div className="d-flex">
                      <h6 className="mt-0">Alice Williams</h6>
                    </div>
                    <p>Then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan.</p>
                  </div>
                </div>  
              </div>
              <div className="mt-4 mt-md-5">
                <h5 className="mb-4">Leave a reply</h5>
                <form>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    </div>
                    <div className="mb-3 col-md-6">
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Email Address" />
                    </div>
                    <div className="mb-3 col-md-12">
                      <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                    </div>
                    <div className="col-md-12">
                      <button type='submit' className="btn btn-primary" href="#">Submit Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
