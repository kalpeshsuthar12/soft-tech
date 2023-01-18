/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function ProjectsSection(){
    const title = "What's next? our latest client stories.";
    const options = {
      margin: 40,
      loop: true,
      responsiveClass: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
          0: {
              items: 1,
          },
          400: {
              items: 1,
          },
          600: {
              items: 2,
          },
          700: {
              items: 2,
          },
          1000: {
              items: 3,
  
          }
      },
  };
  const CaseStudie = [
        {
            image : "/assets/images/project/03.jpg",
            title : "The Sports Space",
            category : "Sports",
            subtitle : "From its founding in 1990 in Cambridge in the UK, it has grown to become a",
            slug : "the-sports-space"
        },
        {
            image : "/assets/images/project/04.jpg",
            title : "Educatgenix",
            category : "Education",
            subtitle : "We all carry a lot of baggage, thanks to our upbringing",
            slug : "educatgenix"
        },
        {
            image : "/assets/images/project/05.jpg",
            title : "Financeoont",
            category : "Finance",
            subtitle : "It is truly amazing the damage that we, as parents, can inflict on our children",
            slug : "financeoont"
        },
        {
            image : "/assets/images/project/04.jpg",
            title : "Healthque",
            category : "Health",
            subtitle : "Get the oars in the water and start rowing. Execution is the single biggest",
            slug : "healthque"
        },
        {
            image : "/assets/images/project/08.jpg",
            title : "Travelomatic",
            category : "Traveling",
            subtitle : "Success is something of which we all want more.",
            slug : "travelomatic"
        },
        {
            image : "/assets/images/project/09.jpg",
            title : "Mobifluent",
            category : "Mobile",
            subtitle : "Most people believe that success is difficult.",
            slug : "mobifluent"
        },
        {
            image : "/assets/images/project/11.jpg",
            title : "Dentzoid",
            category : "Dental",
            subtitle : "Commitment – understanding the price and having the willingness to pay that price",
            slug : "dentzoid"
        },
        {
            image : "/assets/images/project/02.jpg",
            title : "Gozzby",
            category : "Music",
            subtitle : "If success is a process with a number of defined steps, then it is just like any other process.",
            slug : "gozzby"
        },
        {
            image : "/assets/images/project/10.jpg",
            title : "Foodocity",
            category : "Food",
            subtitle : "Without clarity, you send a very garbled message out to the Universe.",
            slug : "foodocity"
        }
    ]
  return (
    <section className="space-pb">
      <div className="container">
        <div className="row d-lg-flex align-items-center justify-content-center pb-4 pb-md-5">
          <div className="col-lg-6">
            <h2 className="mb-3 mb-lg-0">{title}</h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <Link to="/case-studies" className="btn btn-primary-round btn-round w-space">See All Case Study<i className="fas fa-arrow-right ps-3"></i></Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel className='owl-theme text-start' {...options}>
                {
                    CaseStudie.map((item,index)=>(
                    <div className="item" key={index}>
                        <div className="case-study case-study-style-02">
                            <div className="case-study-img case-study-lg bg-holder" style={{"backgroundImage":`url(${item.image})`}}>
                            </div>
                            <div className="case-study-info">
                                <Link className="case-study-title fw-bold" to={`/case-study/${item.slug}`}>{item.title}</Link>
                                <a className="case-study-services" href="#">{item.category}</a>
                                <p className="mt-2">{item.subtitle}</p>
                                <Link to={`/case-study/${item.slug}`} className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </OwlCarousel>
            </div>
        </div>
      </div>
    </section>
  )
}
