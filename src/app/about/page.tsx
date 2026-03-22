import React from 'react'
import About from '../components/About'

const page = () => {
  return (
    <div className='bg-[#f1f5f9] dark:bg-[#1a1a2e]'>
        <div className='animate-fade animate-once animate-ease-in-out'>
            <About/>
        </div>
    </div>
  )
}

export default page
