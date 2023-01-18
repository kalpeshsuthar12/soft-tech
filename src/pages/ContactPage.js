import React from 'react'
import MetaTags from "react-meta-tags";
import BottomSection from '../components/BottomSection'
import ContactForm from '../components/Contact/ContactForm'
import ContactInfo from '../components/Contact/ContactInfo'
import Layout from '../layout/Layout'

export default function ContactPage() {
  return (
    <Layout>
      <MetaTags>
        <title>Contact | SoftTech</title>
        <meta name="description" content="Contact Page description"/>
        <meta name="title" content= "Contact | SoftTech"/>
      </MetaTags>
      <ContactForm />
      <ContactInfo />
      <BottomSection />
    </Layout>
  )
}
