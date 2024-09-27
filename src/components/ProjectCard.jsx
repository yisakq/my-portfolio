import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className='border border-secondary border-opacity-50 rounded-lg flex flex-col items-start p-5 hover:bg-secondary hover:bg-opacity-10 cursor-pointer transition-all duration-300 ease-in-out' onClick={() => {
      window.open(project.projecLink, '_blank', 'noreferrer');
    }}>
      <h3 className='text-white text-xl font-semibold mb-4'>{project.name}</h3>
      <p className="text-white text-l font-light text-opacity-50 text-left overflow-hidden text-ellipsis mb-8 min-h-[95px] max-h-[90px]">
        {project.discription}
      </p>      <div className='flex'>
        {
          project.tags.map((tag) => (
            <p key={tag} className='text-secondary px-2 mx-1 my-3 rounded-md bg-secondary bg-opacity-20 text-l max-md:text-xs font-semibold'>{tag}</p>
          ))
        }
      </div>
      
      {/* Image with hover zoom effect */}
      <div className="relative group w-full h-48 overflow-hidden rounded-md">
        <img
          src={project.img}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          alt={project.name}
        />
      </div>
    </div>
  )
}

export default ProjectCard
