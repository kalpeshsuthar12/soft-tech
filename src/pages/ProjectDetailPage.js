import React from 'react'
import MetaTags from "react-meta-tags";
import { useParams } from 'react-router-dom'
import ActionSection from '../components/ActionSection';
import CaseStudyDetail from '../components/CaseStudy/CaseStudyDetail';
import PageHeader from '../containers/PageHeader';
import Layout from '../layout/Layout'

export default function ProjectDetailPage() {
  let {slug} = useParams();
  const projects = [
    {
        bgImage : "/assets/images/project/03.jpg",
        image : "/assets/images/bg/01.jpg",
        title : "The Sports Space",
        category : "Sports",
        subtitle : "From its founding in 1990 in Cambridge in the UK, it has grown to become a",
        slug : "the-sports-space",
        description : "Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price. This is important because nobody.",
        description2 : "Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your way to greatness? What can you do to form the habit of becoming a success?",
        client : "Developer",
        budgets : "250.000",
        location : "New York, USA",
        project_url : "http://www.exampleproject.com",
        solutionTitle : "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible.",
        solutionDescription : "Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today. As you do so, imagine that when you choose to make that decision that deep inside your mind you are switching off the alternative path,Step out on to the path to your left. Where there is no change. Briefly imagine that you are not going to live and discover your unfulfilled dreams. Instead, you continue doing what you have in the past. What will life be like in 10 years time? Step out, every step you take you get older, days pass, weeks pass. Notice how your body is, how you feel about staying on this path."
    },
    {
        bgImage : "/assets/images/project/04.jpg",
        image : "/assets/images/bg/01.jpg",
        title : "Educatgenix",
        category : "Education",
        subtitle : "We all carry a lot of baggage, thanks to our upbringing",
        slug : "educatgenix",
        description : "Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price. This is important because nobody.",
        description2 : "Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your way to greatness? What can you do to form the habit of becoming a success?",
        client : "Developer",
        budgets : "250.000",
        location : "New York, USA",
        project_url : "http://www.exampleproject.com",
        solutionTitle : "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible.",
        solutionDescription : "Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today. As you do so, imagine that when you choose to make that decision that deep inside your mind you are switching off the alternative path,Step out on to the path to your left. Where there is no change. Briefly imagine that you are not going to live and discover your unfulfilled dreams. Instead, you continue doing what you have in the past. What will life be like in 10 years time? Step out, every step you take you get older, days pass, weeks pass. Notice how your body is, how you feel about staying on this path."
    },
    {
        bgImage : "/assets/images/project/05.jpg",
        image : "/assets/images/bg/01.jpg",
        title : "Financeoont",
        category : "Finance",
        subtitle : "It is truly amazing the damage that we, as parents, can inflict on our children",
        slug : "financeoont",
        description : "Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price. This is important because nobody.",
        description2 : "Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your way to greatness? What can you do to form the habit of becoming a success?",
        client : "Developer",
        budgets : "250.000",
        location : "New York, USA",
        project_url : "http://www.exampleproject.com",
        solutionTitle : "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible.",
        solutionDescription : "Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today. As you do so, imagine that when you choose to make that decision that deep inside your mind you are switching off the alternative path,Step out on to the path to your left. Where there is no change. Briefly imagine that you are not going to live and discover your unfulfilled dreams. Instead, you continue doing what you have in the past. What will life be like in 10 years time? Step out, every step you take you get older, days pass, weeks pass. Notice how your body is, how you feel about staying on this path."
    },
    {
        bgImage : "/assets/images/project/04.jpg",
        title : "Healthque",
        image : "/assets/images/bg/01.jpg",
        category : "Health",
        subtitle : "Get the oars in the water and start rowing. Execution is the single biggest",
        slug : "healthque",
        description : "Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price. This is important because nobody.",
        description2 : "Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your way to greatness? What can you do to form the habit of becoming a success?",
        client : "Developer",
        budgets : "250.000",
        location : "New York, USA",
        project_url : "http://www.exampleproject.com",
        solutionTitle : "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible.",
        solutionDescription : "Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today. As you do so, imagine that when you choose to make that decision that deep inside your mind you are switching off the alternative path,Step out on to the path to your left. Where there is no change. Briefly imagine that you are not going to live and discover your unfulfilled dreams. Instead, you continue doing what you have in the past. What will life be like in 10 years time? Step out, every step you take you get older, days pass, weeks pass. Notice how your body is, how you feel about staying on this path."
    },
    {
        bgImage : "/assets/images/project/08.jpg",
        image : "/assets/images/bg/01.jpg",
        title : "Travelomatic",
        category : "Traveling",
        subtitle : "Success is something of which we all want more.",
        slug : "travelomatic",
        description : "Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price. This is important because nobody.",
        description2 : "Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your way to greatness? What can you do to form the habit of becoming a success?",
        client : "Developer",
        budgets : "250.000",
        location : "New York, USA",
        project_url : "http://www.exampleproject.com",
        solutionTitle : "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible.",
        solutionDescription : "Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today. As you do so, imagine that when you choose to make that decision that deep inside your mind you are switching off the alternative path,Step out on to the path to your left. Where there is no change. Briefly imagine that you are not going to live and discover your unfulfilled dreams. Instead, you continue doing what you have in the past. What will life be like in 10 years time? Step out, every step you take you get older, days pass, weeks pass. Notice how your body is, how you feel about staying on this path."
    },
    {
        bgImage : "/assets/images/project/09.jpg",
        image : "/assets/images/bg/01.jpg",
        title : "Mobifluent",
        category : "Mobile",
        subtitle : "Most people believe that success is difficult.",
        slug : "mobifluent",
        description : "Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price. This is important because nobody.",
        description2 : "Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your way to greatness? What can you do to form the habit of becoming a success?",
        client : "Developer",
        budgets : "250.000",
        location : "New York, USA",
        project_url : "http://www.exampleproject.com",
        solutionTitle : "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible.",
        solutionDescription : "Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today. As you do so, imagine that when you choose to make that decision that deep inside your mind you are switching off the alternative path,Step out on to the path to your left. Where there is no change. Briefly imagine that you are not going to live and discover your unfulfilled dreams. Instead, you continue doing what you have in the past. What will life be like in 10 years time? Step out, every step you take you get older, days pass, weeks pass. Notice how your body is, how you feel about staying on this path."
    },
    {
        bgImage : "/assets/images/project/11.jpg",
        image : "/assets/images/bg/01.jpg",
        title : "Dentzoid",
        category : "Dental",
        subtitle : "Commitment – understanding the price and having the willingness to pay that price",
        slug : "dentzoid",
        description : "Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price. This is important because nobody.",
        description2 : "Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your way to greatness? What can you do to form the habit of becoming a success?",
        client : "Developer",
        budgets : "250.000",
        location : "New York, USA",
        project_url : "http://www.exampleproject.com",
        solutionTitle : "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible.",
        solutionDescription : "Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today. As you do so, imagine that when you choose to make that decision that deep inside your mind you are switching off the alternative path,Step out on to the path to your left. Where there is no change. Briefly imagine that you are not going to live and discover your unfulfilled dreams. Instead, you continue doing what you have in the past. What will life be like in 10 years time? Step out, every step you take you get older, days pass, weeks pass. Notice how your body is, how you feel about staying on this path."
    },
    {
        bgImage : "/assets/images/project/02.jpg",
        image : "/assets/images/bg/01.jpg",
        title : "Gozzby",
        category : "Music",
        subtitle : "If success is a process with a number of defined steps, then it is just like any other process.",
        slug : "gozzby",
        description : "Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price. This is important because nobody.",
        description2 : "Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your way to greatness? What can you do to form the habit of becoming a success?",
        client : "Developer",
        budgets : "250.000",
        location : "New York, USA",
        project_url : "http://www.exampleproject.com",
        solutionTitle : "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible.",
        solutionDescription : "Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today. As you do so, imagine that when you choose to make that decision that deep inside your mind you are switching off the alternative path,Step out on to the path to your left. Where there is no change. Briefly imagine that you are not going to live and discover your unfulfilled dreams. Instead, you continue doing what you have in the past. What will life be like in 10 years time? Step out, every step you take you get older, days pass, weeks pass. Notice how your body is, how you feel about staying on this path."
    },
    {
        bgImage : "/assets/images/project/10.jpg",
        image : "/assets/images/bg/01.jpg",
        title : "Foodocity",
        category : "Food",
        subtitle : "Without clarity, you send a very garbled message out to the Universe.",
        slug : "foodocity",
        description : "Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price. This is important because nobody.",
        description2 : "Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your way to greatness? What can you do to form the habit of becoming a success?",
        client : "Developer",
        budgets : "250.000",
        location : "New York, USA",
        project_url : "http://www.exampleproject.com",
        solutionTitle : "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible.",
        solutionDescription : "Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today. As you do so, imagine that when you choose to make that decision that deep inside your mind you are switching off the alternative path,Step out on to the path to your left. Where there is no change. Briefly imagine that you are not going to live and discover your unfulfilled dreams. Instead, you continue doing what you have in the past. What will life be like in 10 years time? Step out, every step you take you get older, days pass, weeks pass. Notice how your body is, how you feel about staying on this path."
    }
  ]
  const projectSelected = projects.filter((item)=>(item.slug === slug));
  const [{title ,subtitle, bgImage, image, category, description, description2, client, budgets, location, project_url, solutionTitle, solutionDescription  }]  = projectSelected;
  const data = {
    title,
    subtitle,
    bgImage,
    image,
    category,
    client,
    budgets,
    location,
    project_url,
    solutionTitle,
    solutionDescription,
    description,
    description2
  }
  return (
    <Layout>
      <MetaTags>
        <title>{title} | SoftTech</title>
        <meta name="description" content="Project Detail Page description"/>
        <meta name="title" content= {`${title} | SoftTech`}/>
      </MetaTags>
      <PageHeader data={data}/>
      <CaseStudyDetail data={data}/>
      <ActionSection />
    </Layout>
  )
}
