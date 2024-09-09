import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Page = () => {
  return (
    <div>
      <Navbar/>
      <div>
          <h1 className='text-3xl font-bold text-center py-5'>Projects</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Page
