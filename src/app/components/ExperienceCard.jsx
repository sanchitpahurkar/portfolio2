import React from 'react'
import Image from 'next/image';


const ExperienceCard = ({logo, jobrole, date, certificateLink}) => {
  return (
    <div className='flex lg:w-1/2 md:w-4/5 w-[90%] bg-white text-black justify-between items-center rounded-lg shadow-lg '>
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
             {/* job role */}
            <div>
                <p className='font-semibold'>{jobrole}</p>
                <p className='flex flex-col text-sm text-gray-600'>{date}</p>
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard
