import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'

const page = () => {
  return (
    <div className='bg-[#f1f5f9] dark:bg-[#1a1a2e]'>
        <Navbar/>
        <div className='animate-fade animate-once animate-ease-in-out'>
            <About/>
        </div>
        <Footer/>
    </div>
  )
}

export default page
