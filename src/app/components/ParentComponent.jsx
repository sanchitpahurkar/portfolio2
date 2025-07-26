// filepath: c:\portfolio2\src\app\components\ParentComponent.jsx
import React from 'react'
import Cards from './Cards'

const ParentComponent = () => {
  const projects = [
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
      title: 'PrimeFlix',
      description: 'A quick movie seach and save app using APIs and Clerk Auth',
      image : '/assets/primeflix.png',
      githubLink: 'https://github.com/sanchitpahurkar/PrimeFlix',
      deploymentLink: 'https://primeflix-gamma.vercel.app/'
    },

    {
      title: 'Flask Todo List',
      description: 'A Todo List web-app built using Flask and SQLite',
      image : '/assets/flasktodo.png',
      githubLink: 'https://github.com/sanchitpahurkar/flask-tutorial',
      deploymentLink: 'https://flask-todo-c750.onrender.com/'
    },

    {
      title: 'DeepSeek Clone',
      description: 'Built a DeepSeek AI Clone using NextJs, MongoDB, OpenAI API, Clerk Auth',
      image : '/assets/deepseek.png',
      githubLink: 'https://github.com/sanchitpahurkar/DeepSeek-Clone'
    },

    {
      title: 'MeloMotion',
      description: 'Hand-tracking tool to control spotify actions',
      image: 'https://sanchitpahurkar.s3.us-east-1.amazonaws.com/melomotion.png',
      githubLink: 'https://github.com/sanchitpahurkar/MeloMotion',
    },

    {
      title: 'Signature Verification App',
      description: 'A signature verification ML model classifying signatures in Forged and Genuine categories',
      image : '/assets/mangoclassifier.png',
      githubLink: 'https://github.com/sanchitpahurkar/RESNET50_CEDAR_SIGNATURE_VERIFICATION',
      deploymentLink: 'https://resnet50signatureverfication.streamlit.app/'
    },

    {
      title: 'ReactJs Component Library',
      description: 'A collection of custom ReactJs components for faster development',
      image : '/assets/componentlibrary.png',
      githubLink: 'https://github.com/sanchitpahurkar/ReactJs-Component-Library',
      deploymentLink: 'https://custom-web-components-library.netlify.app/'
    }
  ]

  return <Cards projects={projects} />
}

export default ParentComponent