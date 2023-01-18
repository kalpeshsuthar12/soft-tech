import React from 'react'

export default function About() {
    const image = "/assets/images/about/10.jpg";
    const image2 = "/assets/images/about/11.jpg";
    const title = "Making a decision to do something this is the first step. We all know that nothing moves until someone makes a decision.";
    const description = "Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal.";
    return (
    <section className="space-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
              <h2>{title}</h2>
              <p className="mb-4">{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-4 mb-sm-0">
            <img className="img-fluid border-radius" src={image} alt="" />
          </div>
          <div className="col-sm-6">
            <img className="img-fluid border-radius" src={image2} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
