import React from 'react'
import logo from "../assets/generate-a-plan-logo-of-ravi-with-white-color-and--V3xhEh1yT3Gs_7h6KLdZAQ-IhuHYTqMR9SVQRD5P0DTYw-removebg-preview.png"
import { Link } from 'react-scroll'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='bg-[#090d15] sticky top-0 border-b border-b-richblack-300'>
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-row justify-center sm:justify-around items-center'>
            <Link to='hero'  smooth={true} offset={-100} duration={150}>
             <img src={logo} alt='' className='sm:block hidden h-[80px]'/>
            </Link>
            <div className='flex flex-row items-center gap-x-6 text-richblack-5'>
               <Link to='hero' activeClass='active' spy={true} smooth={true} offset={-100} duration={150} className='font-inter sm:text-xl text-lg cursor-pointer font-medium'>Home</Link>
               <Link to='about' activeClass='active' spy={true} smooth={true} offset={-150} duration={200} className='font-inter sm:text-xl text-lg cursor-pointer  font-medium'>About</Link>
               <Link to='skill' activeClass='active' spy={true} smooth={true} offset={-100} duration={250} className='font-inter sm:text-xl text-lg cursor-pointer font-medium'>Skill</Link>
               <Link to='project' activeClass='active' spy={true} smooth={true} offset={-90} duration={300} className='font-inter sm:text-xl text-lg cursor-pointer  font-medium'>Project</Link>
               <Link to='contact' activeClass='active' spy={true} smooth={true} offset={-80} duration={350} className='font-inter sm:text-xl text-lg cursor-pointer font-medium'>Contact</Link>
            </div>
        </div>
    </div>
  )
}
