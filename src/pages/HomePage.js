import React from 'react'
import {Helmet} from "react-helmet";
import ActionSection from '../components/ActionSection'
import BlogSection from '../components/BlogSection'
import ProjectsSection from '../components/ProjectsSection'
import ClientSection from '../components/ClientSection'
import CounterSection from '../components/CounterSection'
import IndustriesSection from '../components/IndustriesSection'
import PricingSection from '../components/PricingSection'
import ServiceSection from '../components/ServiceSection'
import SliderSection from '../components/SliderSection'
import TestimonialSection from '../components/TestimonialSection'
import Layout from '../layout/Layout'

export default function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>Home | SoftTech</title>
        <meta name="description" content="Home Page description"/>
        <meta name="title" content= "Home | SoftTech"/>
      </Helmet>
      <SliderSection />
      <ClientSection />
      <ServiceSection />      
      <ProjectsSection />      
      <IndustriesSection />
      <PricingSection />
      <TestimonialSection />
      <CounterSection />
      <BlogSection />
      <ActionSection />
    </Layout>
  )
}
