import React from 'react'
import {Helmet} from "react-helmet";
import Layout from '../layout/Layout'
import PageHeaderSection from '../components/PageHeaderSection'
import TestimonialSection from '../components/TestimonialSection';
import ClientSectionTwo from '../components/ClientSectionTwo';
import AboutBottomSection from '../components/BottomSection';
import About from '../components/OurTeam/About';
import Members from '../components/OurTeam/Members';

export default function TeamPage() {
  const pageTitle = "Meet Our Team";
  const pageDescription = "Let success motivate you. Find a picture of what epitomizes success to you and then pull it out when you are in need of motivation.";
  const pageImage = "/assets/images/header-inner/15.jpg";
  const pageName = "our_team"; 
  const data = {
    pageTitle,
    pageDescription,
    pageImage,
    pageName
  }
  return (
    <Layout>
      <Helmet>
        <title>Our Team | SoftTech</title>
        <meta name="description" content="Our Team Page description"/>
        <meta name="title" content= "Our Team | SoftTech"/>
      </Helmet>
      <PageHeaderSection data={data}/>
      <About />      
      <Members />      
      <TestimonialSection />
      <ClientSectionTwo />
      <AboutBottomSection />
    </Layout>
  )
}
