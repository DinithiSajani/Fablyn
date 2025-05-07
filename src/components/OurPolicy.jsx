import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center gap-y-10 sm:gap-x-12 py-20'>


      <div className='text-center'>
        <img src={assets.exchange_icon} className='w-12 mx-auto mb-5' alt='Exchange Icon' />
        <p className='font-semibold text-gray-700 text-xs sm:text-sm md:text-base'>Easy Exchange Policy</p>
        <p className='text-gray-400 text-xs sm:text-sm md:text-base'>We offer hassle free exchange policy</p>
      </div>
      <div className='text-center'>
        <img src={assets.quality_icon} className='w-12 mx-auto mb-5' alt='Exchange Icon' />
        <p className='font-semibold text-gray-700 text-xs sm:text-sm md:text-base'>7 Days Return Policy </p>
        <p className='text-gray-400 text-xs sm:text-sm md:text-base'>We provide 7 days free return policy</p>
      </div>
      <div className='text-center'>
        <img src={assets.support_img} className='w-12 mx-auto mb-5' alt='Exchange Icon' />
        <p className='font-semibold text-gray-700 text-xs sm:text-sm md:text-base'>Best Customer Support</p>
        <p className='text-gray-400 text-xs sm:text-sm md:text-base'>We provide 24/7 Customer Support</p>
      </div>

    </div>
  )
}

export default OurPolicy
