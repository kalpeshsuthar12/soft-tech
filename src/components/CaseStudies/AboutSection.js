import React from 'react'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

export default function AboutSection() {
    const title = "We enable constant enterprise transformation at speed and scale.";
    const subtitle = "Success isn’t really that difficult. There is a significant portion of the population here in North America, that actually want and need success to be hard! Why? So they then have a built-in excuse when things don’t go their way! Pretty sad situation, to say the least.";
    const image1 = "/assets/images/about/05.jpg";
    const image2 = "/assets/images/about/06.jpg";
    const image3 = "/assets/images/about/07.jpg";
    const projectCount = 491;
    return (
    <section className="space-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="section-title">
              <h2 className="mb-3">{title}</h2>
              <p>{subtitle}</p>
            </div>
            <Link to="/about" className="btn btn-light-round btn-round w-space">Know More About<i className="fas fa-arrow-right ps-3"></i></Link>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-6">
                <img className="img-fluid border-radius mb-4 mt-4" src={image1} alt="" />
                <img className="img-fluid border-radius mb-4 mb-sm-0" src={image2} alt="" />
              </div>
              <div className="col-sm-6">
                <img className="img-fluid border-radius mb-4" src={image3} alt="" />
                <div className="counter counter-03">
                  <div className="counter-content">
                    <span className="timer"><CountUp start={0} end={projectCount} duration={3} /></span>
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
