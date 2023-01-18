import React from 'react'
import MetaTags from "react-meta-tags";
import Layout from '../layout/Layout'
import NotFoundSection from '../components/NotFoundSection'

export default function NotFoundPage() {
  return (
    <Layout>
      <MetaTags>
        <title>404 Error | SoftTech</title>
        <meta name="description" content="404 Error Page description"/>
        <meta name="title" content= "404 Error | SoftTech"/>
      </MetaTags>
      <NotFoundSection />
    </Layout>
  )
}
