import React from 'react'
import MetaTags from "react-meta-tags";
import { useParams } from 'react-router-dom';
import BlogDetails from '../components/BlogDetails/BlogDetails';
import BlogPageHeader from '../containers/BlogPageHeader';
import Layout from '../layout/Layout'

export default function Blog() {
  const {slug} = useParams();
  const bgImage = "/assets/images/header-inner/02.jpg";  
  const blogs = [
    {
        image: "/assets/images/blog/01.jpg",
        title: "From a small startup to a leading global agency in 10 Years",
        category: "Operations",
        date: "Feb 4, 2020",
        slug: "blog-1",
        description : "Imagine that a few more steps ahead there is a place where the path splits, where is goes off to the left and off to the right. Pause here for a few moments and have a think. Here, there are two different pathways, two possibilities, two ways that you could choose to go.You carry on doing the same things, living the same way and dealing with this thing in the same way as you have been doing. If you were choose the path to the right, the right path, there are new possibilities, achievement, freedom of mind, positive and progressive implications. Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future."
    },
    {
        image: "/assets/images/blog/02.jpg",
        title: "How google’s BERT algorithm affects your website traffic",
        category: "Marketing",
        date: "Feb 15, 2020",
        slug: "blog-2",
        description : "Imagine that a few more steps ahead there is a place where the path splits, where is goes off to the left and off to the right. Pause here for a few moments and have a think. Here, there are two different pathways, two possibilities, two ways that you could choose to go.You carry on doing the same things, living the same way and dealing with this thing in the same way as you have been doing. If you were choose the path to the right, the right path, there are new possibilities, achievement, freedom of mind, positive and progressive implications. Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future."
    },
    {
        image: "/assets/images/blog/03.jpg",
        title: "Five reasons why you must create a website for your company",
        category: "Finance",
        date: "sept 10, 2020",
        slug: "blog-3",
        description : "Imagine that a few more steps ahead there is a place where the path splits, where is goes off to the left and off to the right. Pause here for a few moments and have a think. Here, there are two different pathways, two possibilities, two ways that you could choose to go.You carry on doing the same things, living the same way and dealing with this thing in the same way as you have been doing. If you were choose the path to the right, the right path, there are new possibilities, achievement, freedom of mind, positive and progressive implications. Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future."
    },
    {
        image: "/assets/images/blog/04.jpg",
        title: "Five reasons why you must create a website for your company",
        category: "Finance",
        date: "sept 10, 2020",
        slug: "blog-4",
        description : "Imagine that a few more steps ahead there is a place where the path splits, where is goes off to the left and off to the right. Pause here for a few moments and have a think. Here, there are two different pathways, two possibilities, two ways that you could choose to go.You carry on doing the same things, living the same way and dealing with this thing in the same way as you have been doing. If you were choose the path to the right, the right path, there are new possibilities, achievement, freedom of mind, positive and progressive implications. Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future."
    },
    {
        image: "/assets/images/blog/05.jpg",
        title: "Five reasons why you must create a website for your company",
        category: "Finance",
        date: "sept 10, 2020",
        slug: "blog-5",
        description : "Imagine that a few more steps ahead there is a place where the path splits, where is goes off to the left and off to the right. Pause here for a few moments and have a think. Here, there are two different pathways, two possibilities, two ways that you could choose to go.You carry on doing the same things, living the same way and dealing with this thing in the same way as you have been doing. If you were choose the path to the right, the right path, there are new possibilities, achievement, freedom of mind, positive and progressive implications. Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future."
    },
    {
        image: "/assets/images/blog/06.jpg",
        title: "Five reasons why you must create a website for your company",
        category: "Finance",
        date: "sept 10, 2020",
        slug: "blog-6",
        description : "Imagine that a few more steps ahead there is a place where the path splits, where is goes off to the left and off to the right. Pause here for a few moments and have a think. Here, there are two different pathways, two possibilities, two ways that you could choose to go.You carry on doing the same things, living the same way and dealing with this thing in the same way as you have been doing. If you were choose the path to the right, the right path, there are new possibilities, achievement, freedom of mind, positive and progressive implications. Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future."
  }];
  const blogSelected = blogs.filter((item)=>(item.slug === slug));
  const [{title}] = blogSelected;
  const data = {
    title,
    bgImage
  }
  return (
    <Layout>
      <MetaTags>
        <title>{title} | Blog | SoftTech</title>
        <meta name="description" content="About Page description"/>
        <meta name="title" content={`${title} | Blog | SoftTech`}/>
      </MetaTags>
      <BlogPageHeader data={data}/>
      <BlogDetails blogSelected={blogSelected}/>
    </Layout>
  )
}
