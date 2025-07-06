import React from 'react'
import Image from 'next/image'

const Cards = ({ projects }) => {
  console.log('Projects:', projects) // Debugging line

  if (!projects || !Array.isArray(projects)) {
    return <p>No projects available.</p>
  }

  return (
    <div className="flex justify-center mb-10 md:px-2 animate-fade animate-once animate-ease-in-out">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {projects.map((project, index) => (
          <div key={index} className="w-96 rounded-lg bg-white shadow-sm">
            <figure>
              <Image
                src={project.image}
                alt={project.title}
                className="rounded-lg"
                width={384}
                height={250}
              />
            </figure>
            <div className="p-3 flex flex-col gap-2 text-black">
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p>{project.description}</p>
              <div className="flex gap-4 justify-start">
                {/* Render GitHub button */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 rounded-md shadow-lg bg-[#1a1a2e] text-gray-100 dark:bg-[#00d4ff] dark:text-gray-800 text-sm text-center flex items-center justify-center"
                >
                  GitHub
                </a>
                {/* Render Deployment button if available */}
                {project.deploymentLink && (
                  <a
                    href={project.deploymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 px-4 rounded-md shadow-lg bg-[#1a1a2e] text-gray-100 dark:bg-[#00d4ff] dark:text-gray-800 text-sm text-center flex items-center justify-center"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards