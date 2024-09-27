import React, { useEffect, useState } from 'react'
import { FaAccusoft, FaHtml5,FaCode,FaPaintBrush,FaMobile } from 'react-icons/fa'
import { MdOutlineWeb } from "react-icons/md";
import { projects } from '../assets/constants';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projectFilter,setProjectFilter]=useState("")

  
  return (
    <div id='projects' className='max-container  '>

      <div className='flex justify-between items-end max-md:flex-col max-md:items-start'>
        <div className='flex flex-col items-start gap-6'>
          <p className='covering '>🔗 Portfolio</p>
          <h2 className='text-white text-3xl  font-bold max-md:mb-6'> Works and projects</h2>
        </div>
        <div className='flex justify-between h-fit items-end gap-3 '>
  <div className={`button1 ${projectFilter=='st' && "bg-secondary bg-opacity-50 text-white"}`}>
    <FaCode /> Web
  </div>
  <div className={`button1 ${projectFilter=='st' && "bg-secondary bg-opacity-50 text-white"}`}>
    <FaPaintBrush className='inline' /> Design
  </div>
  <div className={`button1 ${projectFilter=='dyn' && "bg-secondary bg-opacity-50 text-white"}`}>
    <FaMobile className='inline' /> App
  </div>
</div>

      </div>
      <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 pt-16'>
        {
          projects.map((project)=>{

            if (project.static.includes(projectFilter)) {
              return <ProjectCard project={project}/>

            }


          }


        )
            
        }
      </div>
      
    </div>
  )
}

export default Projects
