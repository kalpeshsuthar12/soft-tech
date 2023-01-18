import React from 'react'
import { Link } from 'react-router-dom';

export default function Blogs() {
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
        <div className="row">
            {
                blogs.map((item, index)=>(
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                        <div className="blog-post">
                        <div className="blog-post-image">
                            <img className="img-fluid" src={item.image} alt="" />
                        </div>
                        <div className="blog-post-content">
                            <div className="blog-post-info">
                            <div className="blog-post-author">
                                <Link to={`/blog/${item.slug}`} className="btn btn-light-round btn-round text-primary">{item.category}</Link>
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
                ))
            }
        </div>
      </div>
    </section>
  )
}
