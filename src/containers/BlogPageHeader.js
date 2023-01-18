import React from 'react'

export default function BlogPageHeader(props) {
  const title = props.data.title;
  const bgImage = props.data.bgImage;
  return (
    <section className="header-inner bg-overlay-black-50" style={{ "backgroundImage":`url(${bgImage})` }}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="header-inner-title text-center position-relative">
              <h1 className="text-white fw-normal mb-0">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
