import React from 'react'
import {Helmet} from "react-helmet";
import Layout from '../layout/Layout'
import PageHeaderSection from '../components/PageHeaderSection'
import CounterSectionTwo from '../components/CounterSectionTwo';
import AboutBottomSection from '../components/BottomSection';
import About from '../components/Mission/About';
import Image from '../components/Mission/Image';
import ChooseUs from '../components/Mission/ChooseUs';

export default function MissionPage() {
  const pageTitle = "Our Mission & Vision";
  const pageDescription = "Success isn’t really that difficult. There is a significant portion of the population here in North America, that actually want and need success";
  const pageImage = "/assets/images/header-inner/14.jpg";
  const pageName = "mission"; 
  const data = {
    pageTitle,
    pageDescription,
    pageImage,
    pageName
  }
  return (
    <Layout>
      <Helmet>
        <title>Mission & Vission | SoftTech</title>
        <meta name="description" content="Mission & Vission Page description"/>
        <meta name="title" content= "Mission & Vission | SoftTech"/>
      </Helmet>
      <PageHeaderSection data={data}/>
      <About />
      <Image />
      <ChooseUs />
      <CounterSectionTwo />
      <AboutBottomSection />
    </Layout>
  )
}
