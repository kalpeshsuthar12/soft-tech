/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer(props) {
    const logo = props.data.logo;
    const email = props.data.email;
    const contact = props.data.contact;
    const address = props.data.address;
    const company = props.data.company;
    const socialMedia = props.data.socialMedia;
    const services = props.data.services;
    return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-3">
              <Link to="/"><img className="img-fluid" src={logo} alt="logo" /></Link>
            </div>
            <div className="col-sm-9 text-sm-end mt-4 mt-sm-0">
              <ul className="list-unstyled mb-0 social-icon">
                {
                  socialMedia.map((item, index)=>(
                    <li key={index}><a href={item.link}><i className={item.icon}></i></a></li>
                  ))
                }
              </ul>
            </div>
          </div>
          <hr className="my-4 my-sm-5 pb-0" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-primary mb-2 mb-sm-4">IT Services</h5>
            <div className="footer-link">
              <ul className="list-unstyled mb-0">
                { 
                  services.filter((item, index) => index % 2 === 0 ).map((item, index)=>(
                    <li key={index}><Link to={item.slug}>{item.title}</Link></li>
                  ))
                }
              </ul>
              <ul className="list-unstyled mb-0">
              { 
                  services.filter((item, index) => index % 2 === 0 ).map((item, index)=>(
                    <li key={index}><Link to={item.slug}>{item.title}</Link></li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
            <h5 className="text-primary mb-2 mb-sm-4">Company</h5>
            <div className="footer-link">
              <ul className="list-unstyled mb-0">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/faq">Faq</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/careers">Careers <span className="badge bg-success ms-2">We're hiring</span></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2 mb-4 mb-sm-0">
            <h5 className="text-primary mb-2 mb-sm-4">Support</h5>
            <div className="footer-link">
              <ul className="list-unstyled mb-0">
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="footer-contact-info">
              <h5 className="text-primary mb-3">Contact {company}</h5>
              <div className="contact-address">
                <div className="contact-item">
                  <label>Address:</label>
                  <p>{address}</p>
                </div>
                <div className="contact-item">
                  <label>Phone:</label>
                  <h4 className="mb-0 fw-bold"><a href={`tel:${contact}`}>{contact}</a></h4>
                </div>
                <div className="contact-item">
                  <label>Email:</label>
                  <a className="text-dark" href={`mailto:${email}`}>{email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-sm-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="mb-0">©Copyright {new Date().getFullYear()} <Link to="/">{company}</Link> All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
