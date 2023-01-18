import React from 'react'
import MetaTags from "react-meta-tags";
import PageHeader from '../containers/PageHeader'
import Layout from '../layout/Layout'
import Blogs from '../components/Blogs/Blogs';

export default function BlogPage() {
  const title = "Blog";
  const subtitle = "The sad thing is the majority of people have no clue about what they truly want. They have no clarity. When asked the question";
  const bgImage = "/assets/images/header-inner/02.jpg";
  const data = {
    title,
    subtitle,
    bgImage
  }
  return (
    <Layout>
      <MetaTags>
        <title>Blogs | SoftTech</title>
        <meta name="description" content="Blogs Page description"/>
        <meta name="title" content= "Blogs | SoftTech"/>
      </MetaTags>
      <PageHeader data={data}/>
      <Blogs />
    </Layout>
  )
}
