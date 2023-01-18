import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Animated} from "react-animated-css";
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
                                        <Animated animationIn="fadeInUp" animationInDelay ={1000} isVisible={true} ><h1>{item.title}</h1></Animated>
                                        <Animated animationIn="fadeInUp" animationInDelay ={1200} isVisible={true} ><h6>{item.subtitle}</h6></Animated>
                                        <Link className="btn btn-dark btn-round text-white" to={item.btnUrl}>{item.btnName}<i className="fas fa-arrow-right ps-3"></i></Link>
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
