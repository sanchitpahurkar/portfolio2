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
  ]

  return <Cards projects={projects} />
}

export default ParentComponent