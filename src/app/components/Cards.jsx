import React from 'react'

const Cards = ({ projects }) => {
  console.log('Projects:', projects) // Debugging line

  if (!projects || !Array.isArray(projects)) {
    return <p>No projects available.</p>
  }

  return (
    <div className="flex justify-center mb-10 md:px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {projects.map((project, index) => (
          <div key={index} className="w-96 rounded-lg bg-white shadow-sm">
            <figure>
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg"
              />
            </figure>
            <div className="p-3 flex flex-col gap-2">
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p>{project.description}</p>
              <div className="flex gap-4 justify-start">
                {/* Render GitHub button */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 rounded-md bg-black text-white text-sm text-center flex items-center justify-center"
                >
                  GitHub
                </a>
                {/* Render Deployment button if available */}
                {project.deploymentLink && (
                  <a
                    href={project.deploymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 px-4 rounded-md bg-black text-white text-sm text-center flex items-center justify-center"
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