import React from 'react'
import {Helmet} from "react-helmet";
import BottomSection from '../components/BottomSection'
import ContactForm from '../components/Contact/ContactForm'
import ContactInfo from '../components/Contact/ContactInfo'
import Layout from '../layout/Layout'

export default function ContactPage() {
  return (
    <Layout>
      <Helmet>
        <title>Contact | SoftTech</title>
        <meta name="description" content="Contact Page description"/>
        <meta name="title" content= "Contact | SoftTech"/>
      </Helmet>
      <ContactForm />
      <ContactInfo />
      <BottomSection />
    </Layout>
  )
}
