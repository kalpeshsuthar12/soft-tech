import React from 'react'
import {Link} from 'react-router-dom'

export default function ServiceSection() {
    const sectionTitle = "This is what we do and we do it perfectly."
    const sectionDescription = "Please take a look at the range of IT solution services we offer to your brand as a full-service leading marketing agency."
    const services = [
        {
            icon : "flaticon-data",
            title : "Information Security",
            description : "Do it today. Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow will come.",
            slug : "service-1"
        },
        {
            icon : "flaticon-icon-149196",
            title : "Mobile Platforms",
            description : "We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving success.",
            slug : "service-2"
        },
        {
            icon : "flaticon-design",
            title : "Event Processing",
            description : "There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing to do with luck",
            slug : "service-3"
        },
        {
            icon : "flaticon-author",
            title : "Data Synchronization",
            description : "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.",
            slug : "service-4"
        },
        {
            icon : "flaticon-chart",
            title : "Process Automation",
            description : "It must come from within as the natural product of your desire to achieve something and your belief that you are capable to succeed at your goal.",
            slug : "service-5"
        },
        {
            icon : "flaticon-group",
            title : "Content Management",
            description : "There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight.",
            slug : "service-6"
        }
    ]
  return (
    <section className="space-pt position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title is-sticky">
              <h2>{sectionTitle}</h2>
              <p className="mb-4">{sectionDescription}</p>
              <Link to="/services" className="btn btn-primary-round btn-round">See All Services<i className="fas fa-arrow-right ps-3"></i></Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-sm-6">
                {
                    services.filter((item, index)=> index % 2 === 0 )
                    .map((item, index)=>(
                        <div key={index} className="feature-info feature-info-style-01">
                            <div className="feature-info-icon">
                                <i className={item.icon}></i>
                            </div>
                            <div className="feature-info-content">
                                <h5 className="mb-3 feature-info-title">{item.title}</h5>
                                <p className="mb-0">{item.description}</p>
                                <Link to={`/service/${item.slug}`} className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    ))
                }
              </div>
              <div className="col-sm-6">
                {
                    services.filter((item, index)=> index % 2 !== 0 )
                    .map((item, index)=>(
                        <div key={index} className="feature-info feature-info-style-01 mt-4 mt-lg-5">
                            <div className="feature-info-icon">
                                <i className={item.icon}></i>
                            </div>
                            <div className="feature-info-content">
                                <h5 className="mb-3 feature-info-title">{item.title}</h5>
                                <p className="mb-0">{item.description}</p>
                                <Link to={`/service/${item.slug}`} className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
