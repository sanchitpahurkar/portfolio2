import React from 'react'
import ExperienceCard from '../components/ExperienceCard'

const page = () => {
    const experience = [
        {
            logo: '/assets/capgemini.png',
            jobrole: 'Software Developer Intern',
            date:'Jan 5, 2026 - Present'
        },
        {
            logo: '/assets/forage.png',
            jobrole: 'Solutions Architecture Job Simulation',
            date:'June 23, 2025',
            certificateLink: 'https://drive.google.com/file/d/1BwYeN0wlVIzVqiVtk3O6eCD0TUERNkUL/view',
        }
    ]


  return (
    <div className='dark:bg-[#1a1a2e] bg-[#f1f5f9] min-h-screen'>
        <div>
            <div className='flex flex-col justify-center items-center py-10 gap-y-1'>
                <h1 className='text-4xl font-bold text-gray-800 text-center dark:text-gray-200'>Experience</h1>
                <div className='w-32 h-1 rounded-full bg-gray-800 dark:bg-white'></div>
            </div>
        </div>

        <div className='flex flex-col items-center gap-y-6 pb-6 animate-fade animate-once animate-ease-in-out'>
            {experience.map((exp, index) => (
                <ExperienceCard
                    key={index}
                    logo={exp.logo}
                    jobrole={exp.jobrole}
                    date={exp.date}
                />
            ))}
        </div>
            
    </div>
  )
}

export default page