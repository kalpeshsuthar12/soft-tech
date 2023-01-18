import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function PageHeaderSection(props) {
    const [pageName, setPageName] = useState("");
    const pageTitle = props.data.pageTitle;
    const pageDescription = props.data.pageDescription;
    const pageImage = props.data.pageImage;
    const activePage = props.data.pageName;
    useEffect(()=>(
      setPageName(activePage)// eslint-disable-next-line
    ),[])
    return (
    <section className="header-inner header-inner-menu bg-overlay-black-50" style={{ "backgroundImage": `url(${pageImage})` }}>
      <div className="container position-relative">
        <div className="row d-flex justify-content-center position-relative">
          <div className="col-md-8">
            <div className="header-inner-title text-center">
              <h1 className="text-white fw-normal">{pageTitle}</h1>
              <p className="text-white mb-0">{pageDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-inner-nav">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <ul className="nav">
                <li className="nav-item"><Link className={`nav-link ${pageName === 'about' ? "active" : ''}`} to="/about">About us</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pageName === 'career' ? "active" : ''}`} to="/careers">Careers</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pageName === 'how_we_work' ? "active" : ''}`} to="/how-we-work">How we work</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pageName === 'our_team' ? "active" : ''}`} to="/our-team">Our team</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pageName === 'mission' ? "active" : ''}`} to="/mission-vision">Mission and vision</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pageName === 'our_value' ? "active" : ''}`} to="/our-value">Our values</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
