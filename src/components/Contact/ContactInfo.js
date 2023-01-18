/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function ContactInfo() {
    const title = "Doing business with us is easy";
    const address = [
        {
            image:"/assets/images/about/map-lacation-img1.png",
            name:"Shanghai",
            address:"214 West Arnold St. New York, NY 10002",
        },
        {
            image:"/assets/images/about/map-lacation-img2.png",
            name:"Frankfurt",
            address:"Fairground St. North Bergen, NJ",
        },
        {
            image:"/assets/images/about/map-lacation-img3.png",
            name:"Chicago",
            address:"West Indian Summer St. Missoula",
        },
        {
            image:"/assets/images/about/map-lacation-img4.png",
            name:"New York",
            address:"214 West Arnold St. New York, NY 10002",
        }
    ];
  return (
    <section className="space-pt">
      <div className="container">
        <div className="row justify-content-lg-around">
          <div className="col-lg-4 col-md-5 mb-4">
            <div className="is-sticky">
              <div className="section-title">
                <h2>{title}</h2>
              </div>
              <a href="#" className="btn btn-light-round btn-round">Get Direction<i className="fas fa-arrow-right ps-3"></i></a>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 pe-lg-5">
            <div className="row">
                {
                    address.map((item, index)=>(
                        <div className="col-sm-6 mb-4 mb-md-5" key={index}>
                            <img className="img-fluid mb-4" src={item.image} alt="" />
                            <h4>{item.name}</h4>
                            <h6 className="text-light mb-0">{item.address}</h6>
                        </div>
                    ))
                }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
