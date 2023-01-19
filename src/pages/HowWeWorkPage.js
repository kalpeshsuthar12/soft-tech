import React from 'react'
import {Helmet} from "react-helmet";
import Layout from '../layout/Layout'
import PageHeaderSection from '../components/PageHeaderSection'
import PricingSection from '../components/PricingSection';
import ClientSectionTwo from '../components/ClientSectionTwo';
import AboutBottomSection from '../components/BottomSection';
import About from '../components/HowWeWork/About';
import Performance from '../components/HowWeWork/Performance';

export default function HowWeWorkPage() {
  const pageTitle = "How we work";
  const pageDescription = "Make a list of your achievements toward your long-term goal and remind yourself that intentions don’t count, only action’s.";
  const pageImage = "/assets/images/header-inner/09.jpg";
  const pageName = "how_we_work"; 
  const data = {
    pageTitle,
    pageDescription,
    pageImage,
    pageName
  }
  return (
    <Layout>
      <Helmet>
        <title>How We Work | SoftTech</title>
        <meta name="description" content="How We Work Page description"/>
        <meta name="title" content= "How We Work | SoftTech"/>
      </Helmet>
      <PageHeaderSection data={data}/>
      <About />
      <Performance />
      <PricingSection />
      <ClientSectionTwo />
      <AboutBottomSection />
    </Layout>
  )
}
