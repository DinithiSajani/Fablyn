import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
       <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Fablyn, we believe fashion is more than just clothing — it’s a reflection of your identity, confidence, and creativity. Born from a passion for style and self-expression, Fablyn offers a curated collection of modern, high-quality apparel for individuals who dare to stand out. Whether you're dressing for comfort, confidence, or bold statement-making moments, our pieces are designed to elevate your wardrobe and empower your everyday journey.</p>
          <p>Fablyn is more than just a brand — it's a community. We’re committed to providing a seamless online shopping experience, combining trend-forward designs with exceptional customer service. From timeless basics to seasonal must-haves, each product is crafted with care, quality, and individuality in mind. Join us as we redefine everyday fashion, one outfit at a time.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Fablyn, our mission is to inspire confidence and individuality through fashion that speaks. We are dedicated to delivering stylish, high-quality clothing that empowers our customers to express themselves boldly and authentically. With a focus on innovation, inclusivity, and customer satisfaction, we strive to create a shopping experience that is as effortless and enjoyable as the style we deliver.</p>
        </div>

      </div>
      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Fablyn, we never compromise on quality. Each piece in our collection is thoughtfully crafted using premium materials and undergoes thorough quality checks to ensure durability, comfort, and style. We take pride in delivering products that not only look great but also stand the test of time.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We value your time and aim to make your shopping experience as seamless as possible. With a user-friendly interface, secure payment options, and fast, reliable delivery, Fablyn brings fashion to your fingertips—anytime, anywhere. Enjoy hassle-free browsing, easy returns, and prompt support, all designed with your convenience in mind.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our customers are at the heart of everything we do. From personalized assistance to responsive support, we’re committed to exceeding your expectations. At Fablyn, we listen, we care, and we’re here to help—ensuring every interaction is positive, supportive, and leaves you feeling valued.</p>

        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
