import React from 'react'
import {Link} from 'react-router-dom'
import CountUp from 'react-countup';

export default function About() {
    const image = "/assets/images/about/05.jpg";
    const image2 = "/assets/images/about/06.jpg";
    const image3 = "/assets/images/about/07.jpg";
    const title = "We enable constant enterprise transformation at speed and scale.";
    const description = "We all carry a lot of baggage, thanks to our upbringing. The majority of people carry with them, an entire series of self-limiting beliefs that will absolutely stop, and hold them back from, success. Things like “I’m not good enough”, “I’m not smart enough”, “I’m not lucky enough”, and the worst,";
    const projects = 339;
    return (
    <section className="space-ptb">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title">
            <h2 className="mb-3">{title}</h2>
            <p>{description}</p>
          </div>
          <Link to="/about" className="btn btn-light-round btn-round w-space">Know More About<i className="fas fa-arrow-right ps-3"></i></Link>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-sm-6">
              <img className="img-fluid border-radius mb-4 mt-4" src={image} alt="" />
              <img className="img-fluid border-radius mb-4 mb-sm-0" src={image2} alt="" />
            </div>
            <div className="col-sm-6">
              <img className="img-fluid border-radius mb-4" src={image3} alt="" />
              <div className="counter counter-03">
                <div className="counter-content">
                  <span className="timer"><CountUp start={0} end={projects} duration={3} /></span>
                  <label>Projects Complete</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
