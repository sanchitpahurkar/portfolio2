import React from 'react'
import Image from 'next/image';


const CertificationCard = ({logo, courseName, date, certificateLink}) => {
  return (
    <div className='flex lg:w-1/2 md:w-4/5 w-[90%] bg-white text-black justify-between items-center rounded-lg shadow-lg'>
        {/* organization logo */}
        <div className='flex items-center gap-x-4'>
            <Image
                src={logo}
                alt='logo'
                width={50}
                height={50}
                objectFit="contain"
                className='py-4 pl-3'
            />
             {/* course name */}
            <div>
                <p className='font-semibold'>{courseName}</p>
                <p className='flex flex-col text-sm text-gray-600'>{date}</p>
            </div>
        </div>


        {/* certificate button */}
        <a 
        href={certificateLink} 
        target='_blank' 
        rel='noopener noreferrer'
        className='bg-black text-white font-semibold rounded py-2 px-4 mr-2'
        >
            View
        </a>
    </div>
  )
}

export default CertificationCard
