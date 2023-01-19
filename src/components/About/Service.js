import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
    const title = "Digital marketing services that help you grow."
    const description = "We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered."
    const subtitle = "Increase Organic Traffic"
    const mainSectiontitle = "Digital strategy"
    const mainSectiondescription = "Success isn’t really that difficult. There is a significant portion of the population here in North America, that actually want and need success to be hard! Why? So they then have a built-in excuse when things don’t go their way!"
    const comment = "For those of you who are serious about having more, doing more, giving more and being more, success is achievable with some understanding of what to do."
    const writer = " InVisionApp Inc"
    const image = "/assets/images/feature-info/01.jpg"
    return (
    <section className="space-pb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <span className="text-uppercase text-mutedq">{subtitle}c</span>
            <h3 className="mb-4">{mainSectiontitle}</h3>
            <p className="mb-4">{mainSectiondescription}</p>
            <blockquote className="blockquote">
              {comment}
              <cite className="d-block mt-3"> - {writer}</cite>
            </blockquote>
            <Link to="/case-studies" className="btn btn-primary-round btn-round w-space">View Case Stduy<i className="fas fa-arrow-right ps-3"></i></Link>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
