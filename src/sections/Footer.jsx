import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      {/* Centered horizontal line */}
      <div className='flex justify-center'>
        <div className='w-2/3 h-0.5 bg-white mt-2 mb-4 opacity-5' />
      </div>

      <div className='padding-x bg-opacity-20 grid grid-cols-2 max-md:grid-cols-none max-md:grid-rows-2 max-md:gap-6 py-6'>
        <div className='flex justify-center max-md:items-center items-center'>
          <p className='text-white text-opacity-50 max-md:text-center max-md:w-full text-base font-light'>
            Copyright <BiCopyright className='inline'/> Yisak Alemu · 2024
          </p>
        </div>      
        <div className='flex justify-center text-3xl gap-4 text-white text-opacity-50'>
          <FaLinkedin  
            onClick={() => window.open("https://www.linkedin.com/in/yes7", "_blank")} 
            className='hover:text-white cursor-pointer' 
          />
          <FaGithub  
            onClick={() => window.open("https://github.com/yisakq", "_blank")} 
            className='hover:text-white cursor-pointer' 
          />
        </div>
      </div>
    </>
  )
}

export default Footer
