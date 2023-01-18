/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import MetaTags from "react-meta-tags";
import Layout from '../layout/Layout'

export default function PrivacyPolicyPage() {
  const title = "Privacy Policy";
  const description = "Use a past defeat as a motivator. Remind yourself you have nowhere to go except up as you have already been at the bottom.";
  return (
    <Layout>
      <MetaTags>
        <title>Privacy Policy | SoftTech</title>
        <meta name="description" content="Privacy Policy Page description"/>
        <meta name="title" content= "Privacy Policy | SoftTech"/>
      </MetaTags>
      <section className="space-ptb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-0">
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space-pb">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <p>We know this in our gut, but what can we do about it? How can we motivate ourselves?</p>
          <p>Eum nihil expedita dolorum odio dolorem, explicabo rem illum magni perferendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem error quae illo excepturi nostrum blanditiis laboriosam magnam explicabo. Molestias, eum nihil expedita dolorum odio dolorem, explicabo rem illum magni perferendis.</p>
          <p>Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately, the right combination of both is the most powerful motivational force known to humankind.</p>
          <h4 className="mt-4 text-primary">Personal Information</h4>
          <ul className="list-unstyled">
            <li className="mb-2"> <i className="fa fa-angle-right pe-2 mb-2"></i> Now go push your own limits and succeed!  </li>
            <li className="mb-2"> <i className="fa fa-angle-right pe-2 mb-2"></i> Success is something of which we all want more.</li>
            <li className="mb-2"> <i className="fa fa-angle-right pe-2 mb-2"></i> They’re wrong – it’s not!</li>
            <li className="mb-2"> <i className="fa fa-angle-right pe-2 mb-2"></i> Most people believe that success is difficult.</li>
            <li> <i className="fa fa-angle-right pe-2 mb-2"></i> There are basically six key areas to higher achievement</li>
          </ul>
          <p className="mt-3">Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots.. </p>
          <h4 className="mt-4 text-primary">Use of User Information.</h4>
          <p>LBenjamin Franklin, inventor, statesman, writer, publisher and economist relates in his autobiography that early in his life he decided to focus on arriving at moral perfection. He made a list of 13 virtues, assigning a page to each. Under each virtue he wrote a summary that gave it fuller meaning. Then he practiced each one for a certain length of time. To make these virtues a habit, Franklin can up with a method to grade himself on his daily actions. In a journal he drew a table with a row for every virtue and a column for every day of the week. Every time he made a fault, he made a mark in the appropriate column.</p>
          <h4 className="mt-4 text-primary">Disclosure of User Information.</h4>
          <p>Introspection is the trick. Understand what you want, why you want it and what it will do for you. This is a critical factor, and as such, is probably the most difficult step. For this reason.<a href="#"> support@SoftTech.com</a> </p>
          <ul className="list-unstyled">
            <li className="mb-2"> <i className="fa fa-angle-right pe-2 mb-2"></i> You will run aground and become hopelessly stuck in the mud.</li>
            <li className="mb-2"> <i className="fa fa-angle-right pe-2 mb-2"></i> You will drift aimlessly until you arrive back at the original dock.</li>
            <li className="mb-2"> <i className="fa fa-angle-right pe-2 mb-2"></i> Trying to go through life without clarity is similar to sailing. </li>
            <li> <i className="fa fa-angle-right pe-2 mb-2"></i> The sad thing is the majority of people.</li>
          </ul>
          <p className="mt-3 mb-0">So how do we get clarity? Simply by asking ourselves lots of questions: What do I really want? What does success look like to me? Why do I want a particular thing? How will this achievement change my life? How can I use this success.<a href="#"> support@SoftTech.com</a></p>
         </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}
