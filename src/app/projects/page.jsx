import React from 'react'
import ParentComponent from '../components/ParentComponent'

const Page = () => {
  return (
    <div className='bg-[#f1f5f9] dark:bg-[#1a1a2e]'>
      <div className=''>
          <div className='flex flex-col justify-center items-center py-10 gap-y-1'>
            <h1 className='text-4xl font-bold text-gray-800 text-center dark:text-gray-200'>Projects</h1>
            <div className='w-28 h-1 rounded-full bg-gray-800 dark:bg-gray-200'></div>
          </div>

          <ParentComponent/>
      </div>
    </div>
  )
}

export default Page
