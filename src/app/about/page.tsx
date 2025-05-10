import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <About/>
        </div>
        <Footer/>
    </div>
  )
}

export default page
