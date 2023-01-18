import React from 'react'

export default function PageHeader(props) {
  const title = props.data.title;
  const subtitle = props.data.subtitle;
  const bgImage = props.data.bgImage;
  return (
    <section className="header-inner bg-overlay-black-50" style={{ "backgroundImage" : `url(${bgImage})` }}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <div className="header-inner-title text-center position-relative">
              <h1 className="text-white fw-normal">{title}</h1>
              <p className="text-white mb-0">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
