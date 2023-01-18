import React from 'react'
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
        "/assets/images/award-logo/01.svg",
        "/assets/images/award-logo/02.svg",
        "/assets/images/award-logo/03.svg",
        "/assets/images/award-logo/04.svg",
        "/assets/images/award-logo/05.svg",
        "/assets/images/award-logo/06.svg"
    ]
  return (
    <section className="space-ptb our-clients">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
          <OwlCarousel className='owl-carousel' {...options}>
              {
                  clientsLogo.map((item,index)=>(
                  <div className="item" key={index}>
                      <img className="img-fluid w-75 grayscale" src={item} alt="" />
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
