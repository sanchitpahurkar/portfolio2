import React from 'react'
import Navbar from '../components/Navbar'
import CertificationCard from '../components/CertificationCard'

const page = () => {

  const certificates = [
    {
      logo: '/assets/edx.svg',
      courseName: 'Web Development with HTML5, CSS3, & JS',
      date:'May 11, 2024',
      certificateLink: 'https://drive.google.com/file/d/1efq6uEltlG2T--5kaylQkoNYwuVDN4OC/view',
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
      logo: '/assets/edx.svg',
      courseName: 'Back-end Application Development with Node.js and Express',
      date:'May 11, 2024',
      certificateLink: 'https://drive.google.com/file/d/1vLstFHJZ_TF6QY3KLfKW1WSCnpVLSobk/view',
    },

    {
      logo: '/assets/edx.svg',
      courseName: 'Introduction to Cloud Native, DevOps, Agile, and NoSQL',
      date:'May 11, 2024',
      certificateLink: 'https://drive.google.com/file/d/1W-bUATbF0yWGsJQQgpyBv1-Qvs64P6Un/view',
    },
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
