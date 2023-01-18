/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function IndustriesSection() {
    const title = "We excel in our industry so that you can get in yours.";
    const description = "We offer expertise across various industries. See some of the industries we have vast experience working in as a full-service marketing agency.";
    return (
    <section className="space-ptb bg-dark  dark-background category category-list-style-01">
      <div className="container">
        <div className="row align-items-center pb-4 pb-md-5">
          <div className="col-lg-6">
            <h2 className="text-white mb-2 mb-lg-0">{title}</h2>
          </div>
          <div className="col-lg-6">
            <p className="lead text-white mb-0">{description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <ul className="category-list">
              <li><a href="#">Automotive</a></li>
              <li><a href="#">Communication Services</a></li>
              <li><a href="#">Retail</a></li>
              <li><a href="#">Education</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 mt-4 mt-sm-0">
            <ul className="category-list">
              <li><a href="#">Financial Services</a></li>
              <li><a href="#">Publishing</a></li>
              <li><a href="#">FMCG</a></li>
              <li><a href="#">Travel</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 mt-4 mt-lg-0">
            <ul className="category-list">
              <li><a href="#">Media and Entertainment</a></li>
              <li><a href="#">Logistics and Distribution</a></li>
              <li><a href="#">Utilities</a></li>
              <li><a href="#">Health Care</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 mt-4 mt-lg-0">
            <ul className="category-list">
              <li><a href="#">Hi-Tech</a></li>
              <li><a href="#">Publishing</a></li>
              <li><a href="#">Industrial & Manufacturing</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-4 mt-md-5">
          <div className="col-12 d-md-flex justify-content-center align-items-center">
            <p className="mb-3 mb-md-0 mx-0 mx-md-3 text-white">We provide solutions for all types of big industries</p>
            <a href="#" className="btn btn-primary-round text-white btn-round mx-0 mx-md-3">Browse Industries<i className="fas fa-arrow-right ps-3"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}
