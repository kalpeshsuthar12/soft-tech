import React from 'react'
import MetaTags from "react-meta-tags";
import Layout from '../layout/Layout'
import ActionSection from '../components/ActionSection'
import ServicesSection from '../components/Services/ServicesSection'
import PageHeader from '../containers/PageHeader'

export default function ServicesPage() {
  const title = "Digital Marketing Services";
  const subtitle = "Award-winning website design & creative digital agency services";
  const bgImage = "/assets/images/header-inner/18.jpg";
  const service = [
    {
        icon : "flaticon-data",
        title : "Information Security",
        description : "Do it today. Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow will come.",
        image : "/assets/images/feature-info/01.jpg",
        slug : "service-1"
    },
    {
      icon : "flaticon-author",
      title : "Data Synchronization",
      description : "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.",
      image : "/assets/images/feature-info/02.jpg",
      slug : "service-2"
    },
    {
      icon : "flaticon-icon-149196",
      title : "Data Synchronization",
      description : "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.",
      image : "/assets/images/feature-info/03.jpg",
      slug : "service-3"
    },
    {
      icon : "flaticon-chart",
      title : "Data Synchronization",
      description : "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.",
      image : "/assets/images/feature-info/04.jpg",
      slug : "service-4"
    },
    {
      icon : "flaticon-design",
      title : "Data Synchronization",
      description : "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.",
      image : "/assets/images/feature-info/05.jpg",
      slug : "service-5"
    },
    {
      icon : "flaticon-group",
      title : "Data Synchronization",
      description : "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.",
      image : "/assets/images/feature-info/06.jpg",
      slug : "service-6"
    }
  
  ]
  const data = {
    title,
    subtitle,
    bgImage
  }
  return (
    <Layout>
      <MetaTags>
        <title>Services | SoftTech</title>
        <meta name="description" content="Services Page description"/>
        <meta name="title" content= "Services | SoftTech"/>
      </MetaTags>
      <PageHeader data={data}/>
      <ServicesSection service={service} />      
      <ActionSection />
    </Layout>
  )
}
