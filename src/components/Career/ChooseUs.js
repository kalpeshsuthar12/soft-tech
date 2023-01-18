import React from 'react'
import {Link} from 'react-router-dom'

export default function ChooseUs() {
    const title = "Four reasons why you should choose our service";
    const feature = [
        {
            image:"/assets/images/feature-info/01.jpg",
            title:"We know your business already",
            description:"The sad thing is the majority of people have no clue about what they truly want. They have no clarity."
        },
        {
            image:"/assets/images/feature-info/02.jpg",
            title:"Building context – not just code",
            description:"What steps are required to get you to the goals? Make the plan as detailed as possible."
        },
        {
            image:"/assets/images/feature-info/03.jpg",
            title:"We are responsive and flexible",
            description:"This is perhaps the single biggest obstacle that all of us must overcome in order to be successful."
        },
        {
            image:"/assets/images/feature-info/04.jpg",
            title:"10 years experience – and counting",
            description:"To make these virtues a habit, Franklin can up with a method to grade himself on his daily actions."
        }
    ]
    return (
    <section className="space-ptb bg-light">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <h2 className="mb-3 mb-lg-0">{title}</h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <Link to="/services" className="btn btn-white-round btn-round w-space">Let’s Get Started<i className="fas fa-arrow-right ps-3"></i></Link>
          </div>
        </div>
        <div className="row mt-4 mt-lg-5">
            {
                feature.map((item, index)=>(
                    <div key={index} className="col-lg-3 col-md-6 mb-4 mb-md-5 mb-lg-0">
                        <div className="feature-info feature-info-style-06">
                        <div className="feature-info-img">
                            <img className="img-fluid" src={item.image} alt="" />
                        </div>
                        <div className="feature-info-number mb-0">
                            <span>{index+1}</span>
                            <h5 className="mb-0 ms-4 feature-info-title">{item.title}</h5>
                        </div>
                            <p className="mt-4 mb-0">{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  )
}
