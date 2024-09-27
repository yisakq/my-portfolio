import React from 'react';
import { designs } from '../assets/constants';

const Designs = () => {
  return (
    <div className='max-container py-24 text-left max-xl:text-center'>
      <h2 className='text-white text-3xl font-bold'>Projects with Figma</h2>
      <p className='text-white text-opacity-50 font-light text-base mb-11'>
        Crafted intuitive and engaging user interfaces with Figma.
      </p>
      <div className='flex flex-wrap justify-center gap-8'>
        {designs.map((design) => (
          <div className='border border-secondary border-opacity-50 rounded-lg md:basis-1/3 xl:basis-1/4 basis-1/2 p-4 hover:bg-secondary hover:bg-opacity-20 cursor-pointer max-sm:basis-full'>
            <img src={design.img} className='w-full h-40 object-cover rounded-t-lg' alt="" />
            <div className='flex flex-row justify-between text-white my-2'>
              <h6 className='font-semibold text-base'>{design.issuer}</h6>
            </div>
            <p className='text-xs font-light text-white uppercase text-opacity-50 text-left'>
              {design.credId}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Designs;
