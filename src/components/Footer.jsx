import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
     <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

      <div>
        <img src={assets.logo} className='mb-5 w-48' alt="" />
          <p className='w-full md:w-2/3 text gray-600'>
            FABLYN is your destination for bold, trend-forward fashion. We blend modern design with everyday comfort, offering clothing that empowers self-expression. From streetwear to statement pieces, FABLYN brings style to every moment. Join the movement and redefine your wardrobe with confidence, quality, and creativity—only at FABLYN.
          </p>
      </div>

<div>
    <p className='text-xl font-medium mb-5'>COMPANY</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
    </ul>
</div>
   
   <div>
    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>+94-77-123-4567</li>
        <li>contact@fabliyn.com</li>
     </ul>
   </div>
</div>

    <div>
        <hr />
         <p className='py-5 text:sm text-center'>Copyright 2025@ fablyn.com - All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer