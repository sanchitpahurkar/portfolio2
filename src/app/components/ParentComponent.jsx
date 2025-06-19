// filepath: c:\portfolio2\src\app\components\ParentComponent.jsx
import React from 'react'
import Cards from './Cards'

const ParentComponent = () => {
  const projects = [
    {
      title: 'MeloMotion',
      description: 'Hand-tracking tool to control spotify actions',
      image: '/assets/melomotion.png',
      githubLink: 'https://github.com/sanchitpahurkar/MeloMotion',
    },
    {
      title: 'HomeScope',
      description: 'Full-stack application designed to predict house prices',
      image: '/assets/homescope.jpeg',
      githubLink: 'https://github.com/sanchitpahurkar/HomeScope',
    },
    {
      title: 'EventEase',
      description: 'A campus event management platform for hosting and managing the events',
      image : '/assets/eventease.png',
      githubLink: 'https://github.com/sanchitpahurkar/EventEase-Mini_Project/',
      deploymentLink: 'https://event-ease-xi-nine.vercel.app/'
    },
    {
      title: 'PrimeFlix',
      description: 'A quick movie seach and save app using APIs and Clerk Auth',
      image : '/assets/primeflix.png',
      githubLink: 'https://github.com/sanchitpahurkar/PrimeFlix',
      deploymentLink: 'https://primeflix-gamma.vercel.app/'
    }
  ]

  return <Cards projects={projects} />
}

export default ParentComponent