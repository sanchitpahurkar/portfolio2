import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <h1 className='text-3xl font-bold text-center py-5'>About Me</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default page
