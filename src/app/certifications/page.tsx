import React from 'react'
import Navbar from '../components/Navbar'
import CertificationCard from '../components/CertificationCard'
import Footer from '../components/Footer'


const page = () => {

  const certificates = [
    {
      logo: '/assets/eduskills.jpeg',
      courseName: 'Python Full-Stack Virtual Internship',
      date:'May 12, 2025',
      certificateLink: 'https://drive.google.com/file/d/1gXSfGnQeJgw_ibC-cbrvHo2ffv4thsSK/view',
    },
    {
      logo: '/assets/eduskills.jpeg',
      courseName: 'AI-ML Virtual Internship',
      date:'January - March 2025',
      certificateLink: 'https://drive.google.com/file/d/14ta4nmZEq-xYg81suxrLpTMWpisB_Wvn/view',
    },
    {
      logo: '/assets/edx.svg',
      courseName: 'Web Development with HTML5, CSS3, & JS',
      date:'May 11, 2024',
      certificateLink: 'https://drive.google.com/file/d/1efq6uEltlG2T--5kaylQkoNYwuVDN4OC/view',
    },

    {
      logo: '/assets/awsml.png',
      courseName: 'AWS Academy Graduate - AWS Academy Machine Learning Foundations',
      date:'Oct 25, 2023',
      certificateLink: 'https://drive.google.com/file/d/1iKe1mOedNHynwi_W6qcnoC1OkxpB7pg4/view',
    },

    {
      logo: '/assets/coursera.png',
      courseName: 'Databases and SQL for Data Science with Python',
      date:'July 19, 2023',
      certificateLink: 'https://drive.google.com/file/d/17lJ2APfFHtdQoj9jHAEQZk7xeehiIMZT/view',
    },

    {
      logo: '/assets/coursera.png',
      courseName: 'Python for Data Science, AI & Development',
      date:'July 19, 2023',
      certificateLink: 'https://drive.google.com/file/d/1lxLqk80L3-iGQn0O4SwHsN8VRQ8GO-oc/view',
    },

    {
      logo: '/assets/edx.svg',
      courseName: 'Introduction to Linux',
      date:'Dec 8, 2023',
      certificateLink: 'https://drive.google.com/file/d/1bdDdzANPXzEfrzaEhBtBSRIde6kcj7jg/view?usp=sharing',
    },

    {
      logo: '/assets/365.png',
      courseName: 'Git and GitHub - 365 Data Science',
      date:'Nov 16, 2022',
      certificateLink: 'https://drive.google.com/file/d/17lOgUgLfG5GQ2mRyngWabsUOWX-EmeQi/view',
    },
  ];

  return (
    <div>
        <Navbar/>
        <div>
            <div className='flex flex-col justify-center items-center py-10 gap-y-1'>
              <h1 className='text-4xl font-bold text-gray-800 text-center dark:text-gray-200'>Certifications</h1>
              <div className='w-32 h-1 rounded-full bg-gray-800 dark:bg-white'></div>
            </div>
        </div>
        <div className='flex flex-col items-center gap-y-6 pb-6 animate-fade animate-once animate-ease-in-out'>
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
        <Footer/>
    </div>
  )
}
export default page;
