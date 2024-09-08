import React from 'react'
import Navbar from '../components/Navbar'
import CertificationCard from '../components/CertificationCard'

const page = () => {

  const certificates = [
    {
      logo: '/assets/coursera.png',
      courseName: 'React - The Complete Guide',
      date:'23/12/2023',
      certificateLink: 'https://example.com/react-certificate',
    },

    {
      logo: '/assets/coursera.png',
      courseName: 'React - The Complete Guide',
      date:'23/12/2023',
      certificateLink: 'https://example.com/react-certificate',
    }
  ];

  return (
    <div>
        <Navbar/>
        <div>
            <h1 className='text-3xl font-bold text-center py-5'>Certifications</h1>
        </div>
        <div className='flex flex-col items-center gap-y-5'>
          {certificates.map((certificate, index) => (
            <CertificationCard
              key={index}
              logo={certificate.logo}
              courseName={certificate.courseName}
              date={certificate.date}
              certificateLink={certificate.certificateLink}
            />
          ))}
        </div>
    </div>
  )
}
export default page;
