import React from 'react'
import Heading from './Heading'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <>
    <Heading/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout