import React from "react";
import PropTypes from "prop-types";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Scroll from "../containers/Scroll";
import Preloader from "../containers/Preloader";

function Layout({ children }) {
  const logo = "/assets/images/logo.svg";
  const email = "letstalk@softtech.com";
  const contact = "+(704) 279-1249";
  const address = "6580 Allison Turnpike Creminfort, AL 32808";
  const company = "soft-tech";
  const socialMedia = [
    {
      icon:"fab fa-facebook-f",
      link:"https://www.facebook.com/",
    },
    {
      icon:"fab fa-twitter",
      link:"https://www.twitter.com/",
    },
    {
      icon:"fab fa-linkedin-in",
      link:"https://www.linkedin.com/",
    },
    {
      icon:"fab fa-github",
      link:"https://www.github.com/",
    },
    {
      icon:"fab fa-dribbble",
      link:"https://www.dribbble.com/",
    },
    {
      icon:"fab fa-behance",
      link:"https://www.behance.com/",
    }
  ]
  const services = [
    {
        title : "Information Security",        
        slug : "service-1"
    },
    {
        title : "Mobile Platforms",
        slug : "service-2"
    },
    {
        title : "Event Processing",
        slug : "service-3"
    },
    {
        title : "Data Synchronization",
        slug : "service-4"
    },
    {
        title : "Process Automation",
        slug : "service-5"
    },
    {
        title : "Content Management",
        slug : "service-6"
    }
  ]
  const data = {
    logo,
    email,
    contact,
    address,
    company,
    socialMedia,
    services
  }
  return (
    <>
    <Preloader />
    <Header data={data}/>
    { children }
    <Footer data={data} />
    <Scroll />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
