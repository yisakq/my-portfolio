import React from 'react'
import { ProfilePic } from '../assets/images'

const About = () => {
  return (
    <div id='about' className='flex justify-between items-center max-container  gap-10 py-14 max-md:flex-col'>
      <div className='p-4 pl-6'>
      <img src={ProfilePic} width={300} alt="" />

      </div>
      <div className='flex flex-col items-start gap-4'>
        <p className='covering'>🧐 About Me</p>
        <h2 className='text-white text-4xl font-extrabold leading-tight max-md:text-3xl'>
        Yisak Million Alemu
        </h2>
        <p className='text-white text-sm font-normal leading-[30px] text-opacity-50'>
          Hey there! 👋 I'm Yisak Alemu, but you can just call me Issac.
        </p>
        <p className='text-white text-sm font-normal leading-[30px] text-opacity-50'>
        🎓 I hold a degree in Computer Science from Bahir Dar University.
        </p>
        <p className='text-white text-sm font-normal leading-[30px] text-opacity-50'>
        💻 With over 3 years of experience developing applications using JavaScript, React.js, Node.js, and other technologies
        </p>
        <p className='text-white text-sm font-normal leading-[30px] text-opacity-50'>
         💡  My passion lies in developing full-stack wonders with Node and React.
        </p>
        <p className='text-white text-sm font-normal leading-[30px] text-opacity-50'>
          🚀 Always trying to be a little better than I was yesterday.
        </p>
  
        <p className='text-white text-sm font-normal leading-[30px] text-opacity-50'>
          Let's embark on this exciting journey of turning ideas into digital realities! 🌐✨
        </p>
      </div>

    </div>
  )
}

export default About
