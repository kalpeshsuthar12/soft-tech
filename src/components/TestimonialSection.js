import React from 'react'
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function TestimonialSection() {
    const title = "Over 500 clients and 5,000 projects across the globe."
    const testimonial = [
        {
            image : "/assets/images/avatar/01.jpg",
            comment : "We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.",
            name : "Alice Williams",
            position : "Vetrov Systems Development",
        },
        {
            image : "/assets/images/avatar/02.jpg",
            comment : "The Soft-Tech database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead.",
            name : "Michael Bean",
            position : "Web Developer",
        }
    ]
  return (
    <section className="space-ptb">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-7 text-center">
            <OwlCarousel className='owl-theme testimonial' loop margin={0} items={1}  dots={false} autoplayTimeout={4000} autoplay >
                {
                    testimonial.map((item,index)=>(
                        <div className="item" key={index}>
                        <div className="testimonial-item">
                          <div className="testimonial-avatar shadow">
                            <img className="img-fluid rounded-circle" src={item.image} alt="" />
                          </div>
                          <div className="testimonial-content">
                            <p>{item.comment}</p>
                          </div>
                          <div className="testimonial-author">
                            <div className="testimonial-name">
                              <h6 className="mb-1">{item.name}</h6>
                              <span>{item.position}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                }
            </OwlCarousel>
        </div>
        <div className="col-lg-5 align-self-center ps-0 ps-lg-5 mt-5 mt-lg-0">
            <div className="ps-3 ps-lg-4">
              <h2 className="mb-4 mb-lg-5">{title}</h2>
              <Link to="/case-studies" className="btn btn-primary-round btn-round mb-3">Client Success Stories<i className="fas fa-arrow-right ps-3"></i></Link>
            </div>
          </div>
      </div>
    </div>
  </section>
  )
}
