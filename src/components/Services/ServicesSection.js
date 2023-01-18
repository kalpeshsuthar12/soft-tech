import React from 'react'
import { Link } from 'react-router-dom'

export default function ServicesSection(props) {
  const services = props.service
  return (
    <section className="space-ptb">
      <div className="container">
        <div className="row">
            {
                services.map((item, index)=>(
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                        <div className="feature-info feature-info-style-02 h-100">
                        <div className="feature-info-icon">
                            <i className={item.icon}></i>
                            <h5 className="mb-0 ms-4 feature-info-title">{item.title}</h5>
                        </div>
                        <div className="feature-info-content">
                            <p className="mb-0">{item.description}</p>
                            <Link to={`/service/${item.slug}`} className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></Link>
                        </div>
                        <div className="feature-info-bg-img" style={{ "backgroundImage": `url(${item.image})` }}></div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="row mt-5">
          <div className="col-12 d-md-flex justify-content-center align-items-center">
            <p className="mb-3 mb-md-0 mx-0 mx-md-3">Start now! Your big opportunity may be right where you are!</p>
            <Link to="/services" className="btn btn-primary-round btn-round mx-0 mx-md-3">See All Services<i className="fas fa-arrow-right ps-3"></i></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
