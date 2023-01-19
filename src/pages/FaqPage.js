import React from 'react'
import {Helmet} from "react-helmet";
import FaqSection from '../components/FaqSection';
import PageHeader from '../containers/PageHeader'
import Layout from '../layout/Layout'

export default function FaqPage() {
  const title = "Frequently Asked Questions";
  const subtitle = "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones.";
  const bgImage = "/assets/images/header-inner/05.jpg";
  const data = {
    title,
    subtitle,
    bgImage
  }
  const faqList = [
    {
        question : "IT & Security Manager",
        answer : "There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots."
    },
    {
        question : "Junior Outreach Representative",
        answer : "There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots."
    },
    {
        question : "Senior Salesforce Developer",
        answer : "There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots."
    },{
        question : "Senior Business Development Manager",
        answer : "There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots."
    }
  ]
  return (
    <Layout>
      <Helmet>
        <title>Faq | SoftTech</title>
        <meta name="description" content="Faq Page description"/>
        <meta name="title" content= "Faq | SoftTech"/>
      </Helmet>
      <PageHeader data={data} />
      <FaqSection faqList={faqList}/>
    </Layout>
  )
}
