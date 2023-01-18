import React from 'react'

export default function Faq() {
    const hrEmail = "hr@hisoft.com";
    const title = "Current career opportunities at Hi-soft";
    const description = "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones.";
    const faqList = [
        {
            question : "IT & Security Manager",
            answer : "There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots."
        },
        {
            question : "Junior Outreach Representative",
            answer : "There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots."
        },
        {
            question : "Senior Salesforce Developer",
            answer : "There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots."
        },{
            question : "Senior Business Development Manager",
            answer : "There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots."
        }
    ]
  return (
    <section className="space-ptb">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-9">
            <div className="accordion" id="career-opportunities">
                {
                    faqList.map((item, index)=>(
                        <div className="card" key={index}>
                            <div className="accordion-icon card-header" id={`heading-${index}`}>
                            <h4 className="mb-0">
                            <button className={`btn ${index === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#accordion-${index}`} aria-expanded={ index === 0 ? 'false' : 'true'} aria-controls={`accordion-${index}`}>{item.question}</button>
                            </h4>
                            </div>
                            <div id={`accordion-${index}`} className={`collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading-${index}`} data-bs-parent="#career-opportunities">
                            <div className="card-body">
                                <p className="mb-4">{item.answer}</p>
                            </div>
                            </div>
                        </div>
                    ))
                }             
            </div>
          </div>
        </div>
        <div className="row mt-4 mt-md-5">
          <div className="col text-center">
            <p>Don’t see a role that fits? Send us your resume.</p>
            <a href={`mailto:${hrEmail}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-round text-white w-space">Contact Us<i className="fas fa-arrow-right ps-3"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}
