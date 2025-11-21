// filepath: c:\portfolio2\src\app\components\ParentComponent.jsx
import React from 'react'
import Cards from './Cards'

const ParentComponent = () => {
  const projects = [
    {
      title: 'QuickBlog',
      description: 'Full-stack blogging application powered by AI and AWS Cloud',
      image: '/assets/quickblog.png',
      githubLink: 'https://github.com/sanchitpahurkar/QuickBlog',
      deploymentLink: 'https://quick-blog-eight-weld.vercel.app/'
    },

    {
      title: 'HomeScope',
      description: 'Full-stack application designed to predict house prices',
      image: 'https://sanchitpahurkar.s3.us-east-1.amazonaws.com/homescope.jpeg',
      githubLink: 'https://github.com/sanchitpahurkar/HomeScope',
    },
    {
      title: 'EventEase',
      description: 'Contributed to EventEase, a campus event management platform for hosting and managing the events',
      image : 'https://sanchitpahurkar.s3.us-east-1.amazonaws.com/eventease.png',
      githubLink: 'https://github.com/sanchitpahurkar/EventEase-Mini_Project/',
      deploymentLink: 'https://event-ease-xi-nine.vercel.app/'
    },

    {
      title: 'Job Tracker',
      description: 'One-place to track all your Job Applications',
      image : '/assets/jobtracker.png',
      githubLink: 'https://github.com/sanchitpahurkar/job-tracker',
    },

    {
      title: 'PrimeFlix',
      description: 'A quick movie seach and save app using APIs and Clerk Auth',
      image : '/assets/primeflix.png',
      githubLink: 'https://github.com/sanchitpahurkar/PrimeFlix',
      deploymentLink: 'https://primeflix-gamma.vercel.app/'
    },

    {
      title: 'ReactJs Component Library',
      description: 'A collection of custom ReactJs components for faster development',
      image : '/assets/componentlibrary.png',
      githubLink: 'https://github.com/sanchitpahurkar/Minture---ReactJs-Component-Library',
      deploymentLink: 'https://minture-react-js-component-library.vercel.app/'
    },

    {
      title: 'Flask Todo List',
      description: 'A Todo List web-app built using Flask and SQLite',
      image : '/assets/flasktodo.png',
      githubLink: 'https://github.com/sanchitpahurkar/flask-tutorial',
      deploymentLink: 'https://flask-todo-c750.onrender.com/'
    },

    {
      title: 'Signature Verification App',
      description: 'A signature verification ML model classifying signatures in Forged and Genuine categories',
      image : '/assets/mangoclassifier.png',
      githubLink: 'https://github.com/sanchitpahurkar/RESNET50_CEDAR_SIGNATURE_VERIFICATION',
      deploymentLink: 'https://resnet50signatureverfication.streamlit.app/'
    },
  ]

  return <Cards projects={projects} />
}

export default ParentComponent