import React from 'react'
import {Link} from 'react-router-dom'

export default function ActionSection() {
    const title = "Tell us about your idea, and we’ll make it happen.";
    const subtitle = "Have a brand problem that needs to be solved? We’d love to hear about it!";
    const btn = "Let’s Get Started";
    const btnUrl = "/contact";
    return (
    <section className="space-pb dark-background">
      <div className="container">
        <div className="bg-dark text-center rounded py-5 px-3">
          <h2 className="text-white">{title}</h2>
          <h6 className="text-white">{subtitle}</h6>
          <Link to={btnUrl} className="btn btn-primary-round btn-round mx-0 mx-md-3 text-white">{btn}<i className="fas fa-arrow-right ps-3"></i></Link>
        </div>
      </div>
    </section>
  )
}
