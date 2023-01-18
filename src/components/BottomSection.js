import React from 'react'
import {Link} from 'react-router-dom'
export default function AboutBottomSection() {
    const useful = [
        {
            title:"Careers",
            subtitle:"Walkout 10 years into your future and feel how it feels to carry on doing the same thing.",
            buttonName:"View Positions",   
            buttonUrl:"careers",   
        },
        {
            title:"Latest News",
            subtitle:"This path is just like today, with one difference: you have 10 fewer years remaining in your life.",
            buttonName:"Read Articles",   
            buttonUrl:"blogs",   
        },
        {
            title:"Contact",
            subtitle:"I want you to think about how you will feel in 10 years if you continue doing the exact same things.",
            buttonName:"Get in Touch",   
            buttonUrl:"contact",   
        }
    ]
    return (
    <section className="space-ptb">
      <div className="container">
        <div className="row dark-background">
            {
                useful.map((item, index)=>(
                    <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0" key={index}>
                        <div className="feature-info feature-info-style-04">
                        <div className="feature-info-content">
                            <h4 className="mb-3 fw-normal feature-info-title">{item.title}</h4>
                            <p>{item.subtitle}</p>
                            <Link to={`/${item.buttonUrl}`} className="btn btn-primary-round btn-round text-white">{item.buttonName}<i className="fas fa-arrow-right ps-3"></i></Link>
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
