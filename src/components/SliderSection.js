import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'react-animation/dist/keyframes.css'
import 'swiper/swiper.min.css';
export default function SliderSection() {
  const slider = [
    {
        image:"/assets/images/slider/01.jpg",
        title:"A digital marketing company you can trust",
        subtitle:"Award-Winning website design & creative digital agency.",
        btnName:"Get Started Now",
        btnUrl:"#",
    },
    {
        image:"/assets/images/slider/02.jpg",
        title:"Award winning digital agency",
        subtitle:"We're Hi-soft. We help drive change with technology.",
        btnName:"View Our Solution",
        btnUrl:"#",
    }
  ]
  return (
    <section className="banner">
      <div className="swiper-container">
      <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            className="h-700 h-sm-500">
                {
                    slider.map((item, index)=>(
                        <SwiperSlide key={index} >
                            <div className="swiper-slide align-items-center d-flex responsive-overlap-md bg-overlay-black-30" style={{"backgroundImage":`url(${item.image})`, "backgroundSize":"cover", "backgroundPosition":"center center"}}>
                                <div className="swipeinner container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-9 col-md-10 text-center position-relative">
                                        <h1 style={{animation: "fade-in-up 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards"}}>{item.title}</h1>
                                        <h6 style={{animation: "fade-in-up 2s cubic-bezier(0.19, 1, 0.22, 1) forwards"}}>{item.subtitle}</h6>
                                        <Link className="btn btn-dark btn-round text-white" style={{animation: "fade-in-up 2s cubic-bezier(0.19, 1, 0.22, 1) forwards"}} to={item.btnUrl}>{item.btnName}<i className="fas fa-arrow-right ps-3"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
        </Swiper>
      </div>
    </section>
  )
}
