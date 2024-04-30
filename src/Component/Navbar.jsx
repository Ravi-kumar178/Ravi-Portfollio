import React from 'react'
import logo from "../assets/generate-a-plan-logo-of-ravi-with-white-color-and--V3xhEh1yT3Gs_7h6KLdZAQ-IhuHYTqMR9SVQRD5P0DTYw-removebg-preview.png"
import { Link } from 'react-scroll'

export const Navbar = () => {
  return (
    <div className='   border-b border-b-richblack-300'>
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-row justify-around items-center'>
            <a href='/'>
             <img src={logo} className='h-[80px]'/>
            </a>
            <div className='flex flex-row items-center gap-x-6 text-richblack-5'>
               <a href='/' className='font-inter text-xl font-medium'>Home</a>
               <a href='#about' className='font-inter text-xl font-medium'>About</a>
               <a href='#project' className='font-inter text-xl font-medium'>Project</a>
               <a href='#skills' className='font-inter text-xl font-medium'>Skill</a>
               <a href='#contact' className='font-inter text-xl font-medium'>Contact</a>
            </div>
        </div>
    </div>
  )
}
