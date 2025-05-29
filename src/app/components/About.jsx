import React from 'react'

const About = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center min-h-screen p-8 lg:gap-5 gap-10">
      <div className="max-w-4xl lg:text-start  justify-center lg:w-[50%]">
        <div className=' mb-6 flex flex-col gap-y-1'>
          <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
          <div className='w-28 h-1 rounded-full bg-gray-800'></div>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed ">
          Hi, I'm Sanchit, I’m a Computer Science (AIML) student at RCOEM, Nagpur, passionate about Machine Learning, Deep
Learning, Web Development, and UI/UX design. I enjoy building responsive, user-friendly web apps that
combine creativity with clean code and help solve real-world problems. Eager to learn, grow, and contribute in a
collaborative, innovative environment.
        </p>
      </div>
      <div>
        <img src="/assets/me.png" className='h-96' alt="profile" />
      </div>
    </div>
  )
}

export default About