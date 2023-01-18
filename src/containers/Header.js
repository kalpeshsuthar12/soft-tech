/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link, useLocation} from 'react-router-dom'

export default function Header(props) {
    const location = useLocation();
    const logo = props.data.logo;
    const email = props.data.email;
    const contact = props.data.contact;
    const address = props.data.address;
    const currentPage = location.pathname.replace('/','');
    const Menu = [
      {
        name:"Home",
        slug:"home"
      },
      {
        name:"About",
        slug:"about"
      },
      {
        name:"Service",
        slug:"services"
      },
      {
        name:"Case Studies",
        slug:"case-studies"
      },
      {
        name:"Faq",
        slug:"faq"
      },
      {
        name:"Blogs",
        slug:"blogs"
      },
      {
        name:"Contact",
        slug:"contact"
      }
    ]
    return (
    <header className="header default">
      <div className="topbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="d-block d-md-flex align-items-center text-center">
                <div className="me-4 d-inline-block py-1">
                  <a href={`mailto:${email}`}><i className="far fa-envelope me-2 fa-flip-horizontal text-primary"></i>{email}</a>
                </div>
                <div className="me-auto d-inline-block py-1">
                  <a href="#"><i className="fas fa-map-marker-alt text-primary me-2"></i>{address}</a>
                </div>
                <div className="d-inline-block py-1">
                  <ul className="list-unstyled">
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/blogs">News & Media</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar bg-white navbar-static-top navbar-expand-lg">
        <div className="container-fluid">
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"><i className="fas fa-align-left"></i></button>
          <Link className="navbar-brand" to="/">
            <img className="img-fluid" src={logo} alt="logo" />
          </Link>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              {
                Menu.map((item, index)=>(
                  <li className={`nav-item ${ (currentPage === item.slug) ? "active" : ''}`} key={index}>
                    <Link className="nav-link" to={`/${item.slug}`}>{item.name}</Link>                
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="d-none d-sm-flex ms-auto me-5 me-lg-0 pe-4 pe-lg-0">
            <ul className="nav ms-1 ms-lg-2 align-self-center">
              <li className="contact-number nav-item pe-4 ">
                <a className="fw-bold" href={`tel:${contact}`}><i className="fab fa-whatsapp pe-2"></i>{contact}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
