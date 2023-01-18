import React from 'react'

export default function About() {
    const title = "We enable constant enterprise transformation at speed and scale.";
    const description = "We are a creative company, who works with passion and love. We provide the best services you need. We help you to get better, We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered.";
    const mission = "To make these virtues a habit, himself on his daily actions. In a journal he drew a table with a row for every virtue and a column for every day of the week.";
    const vision = "We also know those epic stories, those modern-day legends surrounding the early failures of such supremely successful folks as Michael Jordan and Bill Gates.";
    return (
    <section className="space-pt">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 mb-4 mb-sm-0">
            <div className="feature-info feature-info-style-02 bg-dark text-white">
              <div className="feature-info-icon">
                <i className="flaticon-eye text-white"></i>
                <h4 className="mb-0 ms-4 feature-info-title text-white">Our Vision</h4>
              </div>
              <div className="feature-info-content">
                <p className="mb-0">{vision}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="feature-info feature-info-style-02 bg-primary text-white">
              <div className="feature-info-icon">
                <i className="flaticon-target text-white"></i>
                <h4 className="mb-0 ms-4 feature-info-title text-white">Our Mission</h4>
              </div>
              <div className="feature-info-content">
                <p className="mb-0">{mission}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
