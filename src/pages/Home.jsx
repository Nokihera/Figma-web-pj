import React from 'react'
import Heading from '../components/Heading'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Talent from '../components/Talent'
import InovationSection from '../components/InovationSection'
import BlogPost from '../components/BlogPost'

const Home = () => {
  return (
    <div>
        <Hero />
        <Features/>
        <Talent/>
        <InovationSection/>
        <BlogPost/>
    </div>
  )
}

export default Home