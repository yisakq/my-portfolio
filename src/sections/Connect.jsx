import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaArrowUp,FaPhoneAlt } from 'react-icons/fa'
import { BsTelegram } from 'react-icons/bs'
import { IoMdMail } from "react-icons/io";


const Connect = () => {
  return (
    <div id='Connect' className='max-container pb-16'>
      <p className='text-white text-2xl font-bold covering' style={{ fontSize: '1.2rem' }}>📬 Contact</p>
      <h2 className='text-white font-bold text-3xl my-5 mb-16 max-sm:text-2xl'>Exchange Words</h2>

      <div className='flex max-sm:flex-col justify-center items-center gap-8 mb-10'>
        {/* Telegram Section */}
        <div className='relative flex flex-col items-center gap-2'>
          <BsTelegram className='text-secondary text-opacity-50 text-4xl max-md:text-3xl mb-2' />
          <a 
            href="https://t.me/umjust" 
            target="_blank"
            rel="noopener noreferrer"
            className='transition duration-500 ease-in-out hover:text-white cursor-pointer hover:bg-secondary hover:border-white text-xl border h-fit border-secondary text-secondary px-5 py-2 rounded-xl'
          >
            Let's Chat on Telegram
          </a>
        </div>

        {/* Email Section */}
        <div className='relative flex flex-col items-center gap-2 transition duration-500'>
          <IoMdMail className='text-secondary text-opacity-50 text-4xl max-md:text-3xl mb-2' />
          <div className='transition duration-500 ease-in-out hover:text-white cursor-pointer hover:bg-secondary hover:border-white text-xl border h-fit border-secondary text-secondary px-5 py-2 rounded-xl'>
            <p>
              myesak@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className='relative flex flex-col items-center gap-2'>
          <FaPhoneAlt className='text-secondary text-opacity-50 text-4xl max-md:text-3xl mb-2' />
          <p  className='transition duration-500 ease-in-out hover:text-white cursor-pointer hover:bg-secondary hover:border-white text-xl border h-fit border-secondary text-secondary px-5 py-2 rounded-xl'
          > +251928069345</p>
        </div>
        <br/>
      <a href='#hero' className='text-secondary text-xl hover:text-opacity-50 cursor-pointer'>
        Take me to top <FaArrowUp className='text-xl inline' />
      </a>
    </div>
  )
}

export default Connect
