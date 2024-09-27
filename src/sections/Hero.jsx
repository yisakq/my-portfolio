import React from 'react'
import Navbar from '../components/Navbar'
import { hero_avatar } from '../assets/images'
import { github, linkedin } from '../assets/icons'
import { socialIcons } from '../assets/constants'
import { FaAngleDown, FaArrowDown, FaDownload, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


const Hero = () => {
  return (
    <div id='hero' className='max-container relative lg:h-[500px]'>
      <div className='mt-10 max-sm:mt-0 max-sm:pt-10 flex flex-row justify-between items-center max-lg:flex-col ' >

        <div className='flex flex-col justify-center items-start gap-6 max-lg:items-center max-sm:gap-8 '>
          <p className='text-xl max-md:text-xl bg-secondary bg-opacity-10 leading-[45px] text-secondary font-bold inline rounded-xl w-fit px-6'>
            👋 Greetings!
          </p>
          <h3 className='text-white text-4xl font-bold max-w-md text-left max-lg:text-center max-sm:text-[40px] max-sm:leading-[50px] max-sm:max-w-[300px]'>
            Yisak Million Alemu
          </h3>
          <p className='text-white text-opacity-50 max-sm:text-base max-sm:max-w-[250px]'>
          Full stack developer · UI designer </p>
          <div className='flex justify-start gap-3'>
            <div className='bg-white bg-opacity-50 p-1 rounded-full max-sm:text-xl'>
              <FaLinkedinIn onClick={()=>{
      window.open("https://www.linkedin.com/in/yes7","_blank")
    }} className=' text-2xl  text-clip  hover:text-white cursor-pointer' />

            </div>
            <div className='bg-white bg-opacity-50 p-1 rounded-full'>
              <FaGithub onClick={()=>{
      window.open("https://github.com/yisakq","_blank")
    }} className=' text-2xl  text-clip  hover:text-white cursor-pointer' />

            </div>

          </div>

        </div>
        <img
          src={hero_avatar}
          className='basis-1/3 w-[400px] transition-transform duration-1000 ease-in-out transform hover:scale-110' // Add zoom effect
          alt="Hero Avatar"
          width={400}
        />
        <div className='basis-1/3 flex justify-center items-end flex-col gap-4 max-lg:items-center max-lg:my-6 max-sm:text-sm max-lg:flex-row-reverse max-lg:gap-7'>
        <a
      href="/cv.pdf" // Replace with the actual path to your CV file
      className="text-secondary text-base hover:text-opacity-50 transition duration-500 ease-in-out cursor-pointer flex items-center gap-2 justify-center"
    >
      Download CV <FaArrowDown className="inline text-sm font-light" />
    </a>
    <a
      href='https://api.whatsapp.com/send?phone=251928069345'
      target='_blank'
      rel='noopener noreferrer'
      className='transition duration-500 ease-in-out hover:text-white cursor-pointer hover:bg-secondary hover:border-white text-xl leading-10 border border-secondary text-secondary px-5 rounded-xl flex justify-around items-center'
    >
      <FaWhatsapp className='inline mr-2' />
      <p>Let's talk</p>
    </a>
        </div>



      </div>
    </div>
  )
}

export default Hero
