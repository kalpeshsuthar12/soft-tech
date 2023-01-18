import React from 'react'
import MetaTags from "react-meta-tags";
import { useParams  } from 'react-router-dom'
import ServiceContent from '../components/ServiceDetails/ServiceContent';
import PageHeader from '../containers/PageHeader';
import Layout from '../layout/Layout'

export default function ServiceDetailPage() {
  let { slug } = useParams();
  const service = [
    {
        icon : "flaticon-data",
        title : "Information Security",
        subtitle : "Do it today. Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow will come.",
        description : "Do it today. Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow will come.You carry on doing the same things, living the same way and dealing with this thing in the same way as you have been doing. If you were choose the path to the right, the right path, there are new possibilities, achievement, freedom of mind, positive and progressive implications. Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future.",
        description2 : "Politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your ways to greatness.",
        image : "/assets/images/feature-info/01.jpg",
        bgImage : "/assets/images/header-inner/17.jpg",
        slug : "service-1"
    },
    {
      icon : "flaticon-author",
      title : "Data Synchronization",
      subtitle : "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.",
      description : "Do it today. Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow will come.You carry on doing the same things, living the same way and dealing with this thing in the same way as you have been doing. If you were choose the path to the right, the right path, there are new possibilities, achievement, freedom of mind, positive and progressive implications. Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future.",
      description2 : "Politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your ways to greatness.",
      image : "/assets/images/feature-info/02.jpg",
      bgImage : "/assets/images/header-inner/17.jpg",
      slug : "service-2"
    },
    {
      icon : "flaticon-icon-149196",
      title : "Data Synchronization",
      subtitle : "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.",
      description : "Do it today. Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow will come.You carry on doing the same things, living the same way and dealing with this thing in the same way as you have been doing. If you were choose the path to the right, the right path, there are new possibilities, achievement, freedom of mind, positive and progressive implications. Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future.",
      description2 : "Politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your ways to greatness.",
      image : "/assets/images/feature-info/03.jpg",
      bgImage : "/assets/images/header-inner/17.jpg",
      slug : "service-3"
    },
    {
      icon : "flaticon-chart",
      title : "Data Synchronization",
      subtitle : "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.",
      description : "Do it today. Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow will come.You carry on doing the same things, living the same way and dealing with this thing in the same way as you have been doing. If you were choose the path to the right, the right path, there are new possibilities, achievement, freedom of mind, positive and progressive implications. Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future.",
      description2 : "Politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your ways to greatness.",
      image : "/assets/images/feature-info/04.jpg",
      bgImage : "/assets/images/header-inner/17.jpg",
      slug : "service-4"
    },
    {
      icon : "flaticon-design",
      title : "Data Synchronization",
      subtitle : "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.",
      description : "Do it today. Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow will come.You carry on doing the same things, living the same way and dealing with this thing in the same way as you have been doing. If you were choose the path to the right, the right path, there are new possibilities, achievement, freedom of mind, positive and progressive implications. Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future.",
      description2 : "Politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your ways to greatness.",
      image : "/assets/images/feature-info/05.jpg",
      bgImage : "/assets/images/header-inner/17.jpg",
      slug : "service-5"
    },
    {
      icon : "flaticon-group",
      title : "Data Synchronization",
      subtitle : "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.",
      description : "Do it today. Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow will come.You carry on doing the same things, living the same way and dealing with this thing in the same way as you have been doing. If you were choose the path to the right, the right path, there are new possibilities, achievement, freedom of mind, positive and progressive implications. Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future.",
      description2 : "Politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your ways to greatness.",
      image : "/assets/images/feature-info/06.jpg",
      bgImage : "/assets/images/header-inner/17.jpg",
      slug : "service-6"
    }
  
  ]
  const serviceName = service.filter((item)=>(item.slug === slug));
  const [{title ,subtitle, bgImage, description, description2, image  }]  = serviceName;
  const data = {
    title,
    subtitle,
    bgImage,
    description,
    description2,
    image
  }
  return (
    <Layout>
      <MetaTags>
        <title>{title} | SoftTech</title>
        <meta name="description" content="Service Page description"/>
        <meta name="title" content= {`${title} | SoftTech`}/>
      </MetaTags>
      <PageHeader data={data}/>    
      <ServiceContent data={data}/>    
    </Layout>
  )
}
