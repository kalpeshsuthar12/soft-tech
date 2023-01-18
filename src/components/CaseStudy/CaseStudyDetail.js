import React from 'react'

export default function CaseStudyDetail(props) {
    const image = props.data.image;
    const category  = props.data.category;
    const client  = props.data.client;
    const budgets  = props.data.budgets;
    const location  = props.data.location;
    const project_url  = props.data.project_url;
    const solutionTitle  = props.data.solutionTitle;
    const solutionDescription  = props.data.solutionDescription;
    const description  = props.data.description;
    const description2  = props.data.description2;
    return (
    <section className="space-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <h2 className="mb-3">Overview</h2>
          </div>
          <div className="col-xl-5 col-md-6">
            <h6 className="text-dark">{description}</h6>
          </div>
          <div className="col-xl-7 col-md-6">
            <p>{description2}</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12">
            <img className="img-fluid border-radius" src={image} alt="" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12">
            <ul className="clients-detail list-inline d-md-flex">
              <li>
                <strong className="text-dark d-block mb-2">Client</strong>
                <span>{client}</span>
              </li>
              <li>
                <strong className="text-dark d-block mb-2">Categories</strong>
                <span>{category}</span>
              </li>
              <li>
                <strong className="text-dark d-block mb-2">Budgets</strong>
                <span>${budgets}</span>
              </li>
              <li>
                <strong className="text-dark d-block mb-2">Location</strong>
                <span>{location}</span>
              </li>
              <li>
                <strong className="text-dark d-block mb-2">Project Url</strong>
                <a href={project_url} target="_blank" rel="noopener noreferrer">{project_url}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center mt-4 mt-md-5">
          <div className="col-lg-10">
            <h2 className="text-dark">Solution</h2>
            <h6 className="text-dark">{solutionTitle}</h6>
            <p>{solutionDescription}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
