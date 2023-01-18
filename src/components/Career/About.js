import React from 'react';
import CountUp from 'react-countup';

export default function About() {
    const title = "We enable constant enterprise transformation at speed and scale.";
    const description = "Success isn’t really that difficult. There is a significant portion of the population here in North America, that actually want and need success to be hard! Why? So they then have a built-in excuse when things don’t go their way! Pretty sad situation, to say the least.";
    const image = "/assets/images/about/08.jpg";
    const image2 = "/assets/images/about/09.jpg";
    const projectCompleted = 491;
    const list = [
        "Success is something of which we all want more",
        "Most people believe that success is difficult",
        "There are basically six key areas to higher achievement",
        "Believing in yourself and those around you",
        "Making a decision to do something"
    ];
    return (
    <section className="space-ptb">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="row g-0 d-flex align-items-end mb-4 mb-sm-2">
              <div className="col-sm-8 pe-sm-2 mb-4 mb-sm-0">
                <img className="img-fluid border-radius" src={image} alt="" />
              </div>
              <div className="col-sm-4">
                <div className="counter counter-03 py-5">
                  <div className="counter-content">
                    <span className="timer"><CountUp start={0} end={projectCompleted} duration={3} /></span>
                    <label>Projects Complete </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-sm-6">
                <img className="img-fluid border-radius" src={image2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-xl-5">
            <h2 className="mb-4">{title}</h2>
            <p className="mb-4">{description}</p>
            <ul className="list list-unstyled ckeck-list">
                {
                    list.map((item, index)=>(
                        <li key={index} className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>{item}</span></li>
                    ))
                }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
