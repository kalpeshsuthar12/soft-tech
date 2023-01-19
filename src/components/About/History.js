import React, { useEffect } from 'react'
import CountUp from 'react-countup';
import { jarallax, jarallaxVideo } from 'jarallax';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function History() {
    
    useEffect(()=>{
        jarallaxVideo();
        jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.2,
        type : "scale",
        videoSrc: 'https://www.youtube.com/embed/9No-FiEInLA'
        });
    })
    const options = {
        margin: 40,
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 1,
    
            }
        },
    };
    const clientsLogo = [
        "/assets/images/client-logo/light/01.svg",
        "/assets/images/client-logo/light/02.svg",
        "/assets/images/client-logo/light/03.svg",
        "/assets/images/client-logo/light/04.svg",
        "/assets/images/client-logo/light/05.svg",
        "/assets/images/client-logo/light/06.svg",
        "/assets/images/client-logo/light/07.svg",
    ]
    const completedProject = 1500 ;
    const TotalReviews = 1000 ;
    const TotalRating = 4.8 ;
    const TotalEmployees = 35 ;
    const TotalClients = 250 ;
    const establishYear = 2018 ;
    const companyName = "Soft-Tech" ;
    const qualifiedemployees = "Work with our leaders and the hard-working personalities who deliver innovative concepts to corporations like yours." ;
    return (
        <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="border border-radius p-5 p-md-4 h-100">
                <span className="display-4 text-primary mb-3 d-block"><CountUp start={0} end={completedProject} duration={3} />+</span>
                <h4 className="">Successfully completed projects</h4>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 mb-4">
            <div className="jarallax h-100 p-5 p-md-3 border-radius d-flex text-center align-items-end bg-overlay-black-10">
                <span className="text-stroke-white fw-bold font-xlll position-relative">Working at {companyName}</span>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="bg-primary border-radius p-5 p-md-4 h-100">
                <div className="d-flex align-items-center">
                  <span className="pe-4 pt-1 display-4 text-white"><CountUp start={0} end={TotalEmployees} duration={3} /></span>
                  <h5 className="mb-0 text-white">Qualified employees</h5>
                </div>
                <p className="text-white mt-3">{qualifiedemployees}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="h-100 bg-overlay-black-60 bg-holder border-radius p-4 pt-5" style={{ "backgroundImage": `url(/assets/images/gallery/07.jpg)` }}>
                <div className="position-relative text-center pt-4">
                  <ul className="list-unstyled list-inline text-white pt-4">
                    <li className="list-inline-item me-1 font-xl text-warning"><i className="fas fa-star"></i></li>
                    <li className="list-inline-item me-1 font-xl text-warning"><i className="fas fa-star"></i></li>
                    <li className="list-inline-item me-1 font-xl text-warning"><i className="fas fa-star"></i></li>
                    <li className="list-inline-item me-1 font-xl text-warning"><i className="fas fa-star"></i></li>
                    <li className="list-inline-item me-1 font-xl text-warning"><i className="fas fa-star-half"></i></li>
                  </ul>
                  <h5 className="mb-0 text-white">Rated {TotalRating} out of 5 based on over <span className="text-primary"> {TotalReviews} reviews</span></h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
              <div className="h-100 text-center pt-4 pt-lg-5 px-4">
                <h5 className="mb-1">Award-winning solution</h5>
                <img className="img-fluid" src="/assets/images/svg/award.svg" alt="" />
                <p>We've got a few awards thanks to our amazing clients.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
              <div className="h-100 bg-dark text-center p-5 p-md-4 border-radius">
                <span className="display-4 text-primary">{TotalClients}+</span>
                <h5 className="text-white">Clients around the globe</h5>
                <OwlCarousel className='owl-theme mt-4' {...options}>
                    {
                        clientsLogo.map((item,index)=>(
                        <div className="item" key={index}>
                            <img className="img-fluid center-block mx-auto px-4" src={item} alt="" />
                        </div>
                        ))
                    }
                </OwlCarousel>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="bg-light h-100 pt-md-0 pt-5 border-radius d-flex align-items-end ps-4 pb-4">
                  <h5 className="mb-0">We're <br /> epic <br /> since <span className="d-block display-2 fw-bold text-stroke-primary">{establishYear}</span></h5>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
