import React from 'react'
import {Helmet} from "react-helmet";
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
      <Helmet>
        <title>Blogs | SoftTech</title>
        <meta name="description" content="Blogs Page description"/>
        <meta name="title" content= "Blogs | SoftTech"/>
      </Helmet>
      <PageHeader data={data}/>
      <Blogs />
    </Layout>
  )
}
