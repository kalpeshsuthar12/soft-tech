import React from 'react'
import { Link } from 'react-router-dom'

export default function FaqSection(props) {
    const faqList = props.faqList
    return (
    <section className="space-ptb">
      <div className="container">
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
            <p>Let’s talk about what you want to accomplish and how we can make it happen. Contact Us</p>
            <Link to="/contact" className="btn btn-primary btn-round text-white w-space">Contact Us<i className="fas fa-arrow-right ps-3"></i></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
