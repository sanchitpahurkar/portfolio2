import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ParentComponent from '../components/ParentComponent'

const Page = () => {
  return (
    <div>
      <Navbar/>
      <div>
          <h1 className='text-4xl font-bold text-gray-800 text-center py-10'>Projects</h1>

          <ParentComponent/>
      </div>
      <Footer/>
    </div>
  )
}

export default Page
