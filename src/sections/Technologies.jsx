import React from 'react'
import { dailyTechs, usedTechs } from '../assets/constants'

const Technologies = () => {
  return (
    <div id='skills' className='max-container py-12 '>
      <p className='text-white text-2xl font-bold covering' style={{ fontSize: '1.2rem' }}>🧑‍💻 Skills.Experiences</p>
      <h2 className='text-white text-3xl font-bold my-4'>Technologies and Skills</h2>
      <div className='mt-20'>
        <p className='text-white text-opacity-40 text-xl font-light mb-6'>Techs i use on daily basis</p>
        <div className='flex justify-center gap-4 mb-10 flex-wrap'>{
          
          dailyTechs.map((Icon)=><Icon className='text-secondary text-5xl text-opacity-50 max-md:text-4xl'/>)
          }
          
        </div>
      </div>
      <div>
        <p className='text-white text-opacity-40 text-xl font-light mb-6'>Other techs with which i carried out projects</p>
        <div className='flex justify-center flex-wrap gap-4'>
          {
            usedTechs.map((Icon)=><Icon className='text-secondary text-5xl text-opacity-50 max-md:text-4xl'/>)
          }

        </div>
      </div>
      
    </div>
  )
}

export default Technologies
