import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

export const Footer = () => {
  return (
    <div className='mt-20  py-10 bg-richblack-700'>
        <div className='w-11/12 mx-auto md:flex-nowrap flex-wrap max-w-maxContent flex justify-between items-center'>
            <div className='flex flex-row md:flex-nowrap flex-wrap items-center gap-4 font-inter'>
                <div className='flex items-center gap-1  border-r pr-4 text-richblack-5 border-richblack-500'><FaPhoneAlt className=' text-yellow-50'/> +91-7061250417</div>
                <div  className='flex items-center gap-1  border-r pr-4 text-richblack-5 border-richblack-500'><MdMail size={20} className='text-yellow-50'/> bhardwajravi2025@gmail.com</div>
                <div  className='flex items-center gap-1   text-richblack-5 '>New Delhi,India</div>
            </div>

            <div  className=' font-inter text-richblack-5 '>
                Made with <span className=' text-pink-200 text-xl'> ♥ </span> by Ravi Kumar
            </div>
        </div>
    </div>
  )
}
