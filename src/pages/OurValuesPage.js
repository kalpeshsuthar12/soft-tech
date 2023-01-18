import React from 'react'
import MetaTags from "react-meta-tags";
import Layout from '../layout/Layout';
import PageHeaderSection from '../components/PageHeaderSection'
import ClientSectionTwo from '../components/ClientSectionTwo';
import AboutBottomSection from '../components/BottomSection';
import About from '../components/OurValue/About';
import Process from '../components/OurValue/Process';

export default function OurValuesPage() {
  const pageTitle = "Our Values";
  const pageDescription = "For those of you who are serious about having more, doing more, giving more and being more, success is achievable with some understanding";
  const pageImage = "/assets/images/header-inner/16.jpg";
  const pageName = "our_value"; 
  const data = {
    pageTitle,
    pageDescription,
    pageImage,
    pageName
  }
  return (
    <Layout>
      <MetaTags>
        <title>Our Values | SoftTech</title>
        <meta name="description" content="Our Values Page description"/>
        <meta name="title" content= "Our Values | SoftTech"/>
      </MetaTags>
      <PageHeaderSection data={data}/>
      <About />
      <Process />
      <ClientSectionTwo />
      <AboutBottomSection />
    </Layout>
  )
}
