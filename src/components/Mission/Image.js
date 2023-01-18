import React from 'react'

export default function Image() {
    const image = "/assets/images/bg/07.png";
    return (
    <section>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-sm-12">
            <img className="img-fluid" src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
