import React from 'react'
import {Helmet} from "react-helmet";
import History from '../components/About/History';
import ActionSection from '../components/ActionSection';
import ProjectsSection from '../components/ProjectsSection';
import ClientSectionTwo from '../components/ClientSectionTwo';
import CounterSectionTwo from '../components/CounterSectionTwo';
import PageHeaderSection from '../components/PageHeaderSection'
import TestimonialSection from '../components/TestimonialSection';
import Layout from '../layout/Layout'
import Service from '../components/About/Service';

export default function AboutPage() {
  const pageTitle = "About";
  const pageDescription = "Our Expertise. Know more about what we do";
  const pageImage = "/assets/images/header-inner/01.jpg";
  const pageName = "about"; 
  const data = {
    pageTitle,
    pageDescription,
    pageImage,
    pageName
  }
  return (
    <Layout>
      <Helmet>
        <title>About us | SoftTech</title>
        <meta name="description" content="About Page description"/>
        <meta name="title" content="About us | SoftTech"/>
      </Helmet>
      <PageHeaderSection data={data}/>
      <History />
      <Service />
      <ProjectsSection />
      <CounterSectionTwo />
      <TestimonialSection />
      <ClientSectionTwo />
      <ActionSection />
    </Layout>
  )
}
