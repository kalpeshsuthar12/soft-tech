import React from 'react'
import {Helmet} from "react-helmet";
import Layout from '../layout/Layout'
import NotFoundSection from '../components/NotFoundSection'

export default function NotFoundPage() {
  return (
    <Layout>
      <Helmet>
        <title>404 Error | SoftTech</title>
        <meta name="description" content="404 Error Page description"/>
        <meta name="title" content= "404 Error | SoftTech"/>
      </Helmet>
      <NotFoundSection />
    </Layout>
  )
}
