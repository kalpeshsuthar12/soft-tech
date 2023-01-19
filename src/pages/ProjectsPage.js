import React from 'react'
import {Helmet} from "react-helmet";
import ActionSection from '../components/ActionSection';
import ProjectsSection from '../components/ProjectsSection';
import PageHeader from '../containers/PageHeader'
import Layout from '../layout/Layout'
import AboutSection from '../components/CaseStudies/AboutSection';

export default function ProjectsPage() {
  const title = "Case Studies";
  const subtitle = "Having clarity of purpose and a clear picture of what you desire, is probably the single most important factor in achievement.";
  const bgImage = "/assets/images/header-inner/06.jpg";
  const data = {
    title,
    subtitle,
    bgImage
  }
  return (
    <Layout>
      <Helmet>
        <title>Case Studies | SoftTech</title>
        <meta name="description" content="Case Studies Page description"/>
        <meta name="title" content= "Case Studies | SoftTech"/>
      </Helmet>
      <PageHeader data={data}/>
      <AboutSection />
      <ProjectsSection />
      <ActionSection />
    </Layout>
  )
}
