import React from 'react'
import {Helmet} from "react-helmet";
import About from '../components/Career/About';
import ChooseUs from '../components/Career/ChooseUs';
import Faq from '../components/Career/Faq';
import ProjectsSection from '../components/ProjectsSection';
import PageHeaderSection from '../components/PageHeaderSection'
import Layout from '../layout/Layout'

export default function CareersPage() {
  const pageTitle = "Careers";
  const pageDescription = "Give yourself the power of responsibility. Remind yourself the only thing stopping you is yourself.";
  const pageImage = "/assets/images/header-inner/05.jpg";
  const pageName = "career"; 
  const data = {
    pageTitle,
    pageDescription,
    pageImage,
    pageName
  }
  return (
    <Layout>
      <Helmet>
        <title>Career | SoftTech</title>
        <meta name="description" content="Career Page description"/>
        <meta name="title" content= "Career | SoftTech"/>
      </Helmet>
      <PageHeaderSection data={data}/>
      <About />
      <ProjectsSection />      
      <ChooseUs />      
      <Faq />      
    </Layout>
  )
}
