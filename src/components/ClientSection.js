import React from 'react'
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function ClientSection() {
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
            items: 3,
        },
        600: {
            items: 4,
        },
        700: {
            items: 5,
        },
        1000: {
            items: 6,

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
  return (
    <section className="mt-n5 z-index-9 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="our-clients our-clients-style-02 bg-dark">
              <div className="client-title ps-4">
                <h5 className="text-white">Our Clients</h5>
                <div className="svg-item">
                </div>
              </div>
              <div className="brand-logo ps-4">
                    <OwlCarousel className='owl-theme testimonial-center owl-nav-bottom-center' {...options}>
                    {
                        clientsLogo.map((item,index)=>(
                        <div className="item" key={index}>
                            <img className="img-fluid center-block mx-auto" src={item} alt="" />
                        </div>
                        ))
                    }
                    </OwlCarousel>
              </div>
              <div className="client-btn">
                <Link to="/case-studies" className="btn btn-primary-round btn-round text-white">Case Studies<i className="fas fa-arrow-right ps-3"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
