/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'

export default function ChooseUs() {
    const title = "Three reasons why you should choose our service";
    const data = [
        {
            image:"/assets/images/blog/01.jpg",
            title:"Mission and vision",
            description:"Our Vision & Mission are both helping our team to achieve the goal. We identify the clients' requirements and provide the best solutions."
        },
        {
            image:"/assets/images/blog/02.jpg",
            title:"Our challenges",
            description:"We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered."
        },
        {
            image:"/assets/images/blog/03.jpg",
            title:"Meet the our team",
            description:"Meet our institute leaders and the hard-working personalities who deliver innovative concepts to corporations like yours."
        }
    ]
    return (
    <section className="space-ptb">
      <div className="container">
        <div className="row d-lg-flex align-items-center justify-content-center pb-4 pb-md-5">
          <div className="col-lg-6">
            <h2 className="mb-3 mb-lg-0">{title}</h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <Link to="/services" className="btn btn-light-round btn-round w-space">Let’s Get Started<i className="fas fa-arrow-right ps-3"></i></Link>
          </div>
        </div>
        <div className="row">
            {
                data.map((item, index)=>(
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" key={index}>
                        <div className="feature-info feature-info-style-07">
                        <div className="feature-info-img">
                            <img className="img-fluid" src={item.image} alt="" />
                        </div>
                        <div className="feature-info-content">
                            <h4 className="feature-info-title">{item.title}</h4>
                            <p>{item.description}</p>
                            <a href="#" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
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
