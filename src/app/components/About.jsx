import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center min-h-screen p-8 lg:gap-5 gap-10">
      <div className="max-w-4xl lg:text-start  justify-center lg:w-[50%]">
        <div className=' mb-6 flex flex-col gap-y-1'>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">About Me</h1>
          <div className='w-28 h-1 rounded-full bg-gray-800 dark:bg-gray-200'></div>
        </div>
        <p className="text-lg dark:text-gray-400 text-gray-800 leading-relaxed ">
          I’m a Software Developer currently working on building secure and scalable <strong>Backend Applications using Java/Spring Boot</strong>, <strong> Cloud</strong>,
  <strong> Docker/Linux</strong>. I aim to work and contribute to building effective and secure backend systems. Looking forward to project collaborations.
        </p>

        <p className='text-lg dark:text-gray-400 text-gray-800 leading-relaxed mt-8'><span className='font-bold'>📧 Email : </span>sanchit.pahurkar@gmail.com</p>
      </div>
      <div>
        <Image src="https://sanchitpahurkar.s3.us-east-1.amazonaws.com/me.png" className='md:h-96' alt="profile" width={384} height={384}/>
      </div>
    </div>
  )
}

export default About