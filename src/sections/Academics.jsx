import React from 'react'
import { academics, career } from '../assets/constants'
import { TbH4 } from 'react-icons/tb'

const Academics = () => {
  return (
    <div id='academics' className='max-container   py-20'>
      <div className='mb-20'>
        <p className='text-white text-2xl font-bold covering' style={{ fontSize: '1.2rem' }}>💼 Career.Academics</p>
        <h2 className='text-white text-3xl font-bold my-3'>Educational and Career Trajectory</h2>
      </div>
      <div className='my-8 flex justify-between max-sm:flex-col'>
        <div className='basis-1/2 lg:padding-x max-lg:mr-4'>
          <h3 className='text-white text-2xl font-semibold mb-6'>Academic</h3>
          <p className='text-white text-opacity-50 text-xl font-light mb-10'>2024 - Current</p>
          <div className='grid grid-rows-3 gap-8'>
            {
              academics.map((carrier) => (
                <div className='border border-secondary border-opacity-50 flex flex-col hover:bg-secondary hover:bg-opacity-20  gap-4 p-6  justify-between items-start rounded-xl'>
                  <h4 className='text-white text-2xl font-bold'>{carrier.heading}</h4>
                  <p className='text-xm text-white text-opacity-50 font-extralight text-left'>{carrier.description}</p>
                  <div className='flex flex-row w-full justify-between text-secondary'>
                    <p className='text-xm font-normal'>{carrier.duration}</p>
                    <p className='text-xm font-light'>{carrier.date}</p>
                  </div>
                </div>
              ))
            }
          
          </div>
        </div>
        <div className='basis-1/2 lg:padding-x max-lg:ml-4'>
          <div className=''>
            <h3 className='text-white text-2xl font-semibold mb-6'>career</h3>
            <p className='text-white text-opacity-50 text-xl font-light mb-10'>2023 - Current</p>
            <div className='grid grid-rows-3 gap-8'>
            {
              career.map((carrier) => (
                <div className='border border-secondary border-opacity-50 flex flex-col hover:bg-secondary hover:bg-opacity-20  gap-4 p-6  justify-between items-start rounded-xl'>
                  <h4 className='text-white text-xl font-bold'>{carrier.heading}</h4>
                  <h5 className='text-white text-base italic font-serif'>{carrier.headingtwo}</h5>
                  <p className='text-xm text-white text-opacity-50 font-extralight text-left'>{carrier.description}</p>
                  <div className='flex flex-row w-full justify-between text-secondary'>
                    <p className='text-xm font-normal'>{carrier.duration}</p>
                    <p className='text-xm font-light'>{carrier.date}</p>
                  </div>
                </div>
              ))
            }
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Academics
