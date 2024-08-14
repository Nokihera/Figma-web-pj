import React from 'react'
import Heading from '../components/heading'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Talent from '../components/Talent'
import InovationSection from '../components/InovationSection'

const Home = () => {
  return (
    <div>
        <Hero />
        <Features/>
        <Talent/>
        <InovationSection/>
    </div>
  )
}

export default Home