import React from 'react'
import ServiceContactFrom from './ServiceContactFrom';

export default function ServiceContent(props) {
    const title = props.data.title;
    const description = props.data.description;
    const description2 = props.data.description2;
    const image = props.data.image;
    return (
    <>
    <section className="space-pt">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="service-details">
              <h4 className="fw-bold">{title}</h4>
              <p className="mb-4 mb-md-5">{description}</p>
              <img className="img-fluid border-radius mb-4 mb-md-5" src={image} alt="" />
              <p className="mb-4 mb-md-5">{description2}</p>      
            </div>
          </div>
        </div>
      </div>
    </section>
    <ServiceContactFrom></ServiceContactFrom>
    </>
  )
}
