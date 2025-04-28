import React from 'react'
import Navbar from '../../Components/Header/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../Components/Footer/Footer'

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-[1240px] mx-auto'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Root
