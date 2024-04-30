import React from 'react'
import image from "../assets/openart-image_DUAq2sKA_1714451195305_raw-removebg-preview.png"
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { FaArrowDown, FaArrowRight, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-scroll';

export const Hero = () => {

    const onButtonClick = () => {
        const pdfUrl = "RAVI KUMAR.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "RAVI.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div name='hero' className='mt-14 flex items-center'>
        <div className='w-11/12  max-w-maxContent text-white mx-auto flex flex-col md:flex-row items-center gap-y-8 md:gap-x-16'>
            <div className='flex flex-col gap-y-8 sm:w-[60%] lg:w-[48%]'>
                <p className='font-inter text-3xl font-bold'>Namaste 👋, I'm  <span className='bg-gradient-to-r from-[#1FA2FF] to-[#12D8FA]  text-transparent bg-clip-text text-4xl'>Ravi Kumar</span></p>
                <p className='font-inter text-xl text-richblack-50'>An aspiring software engineer with experience building web applications using ReactJs, ExpressJs, NodeJs, MongoDb and some other cool libraries and framework</p>
                <div className='flex items-center gap-x-3'>
                    <a href='https://github.com/Ravi-kumar178'><BsGithub size={30} className=' '/></a>
                    <a href='https://www.linkedin.com/in/ravi-kumar-b55336229/' ><FaLinkedin size={30} className=' text-[#1DA1F2] '/></a>
                    <a href='https://twitter.com/TheRaviThakur2' ><BsTwitterX size={30} /></a>
                    <a href='https://leetcode.com/u/Ravithakur1-_/' ><SiLeetcode size={30} className='text-yellow-100' /></a>
                </div>

                <div className='flex items-center gap-x-6'>
                   <Link to='contact' smooth={true} offset={-80} duration={200}>
                            <button className='flex items-center gap-x-2 bg-richblack-700 hover:bg-richblack-5 hover:text-richblack-700 transition-all duration-200 py-2 px-4 rounded-md text-richblack-5 font-inter font-medium text-lg'>
                                Contact me
                                <FaArrowRight className='-mb-0.5'/>
                            </button>
                   </Link>

                    <button 
                      className='flex items-center gap-x-2  bg-yellow-50 shadow-inner text-richblack-900  transition-all duration-200 py-2 px-4 rounded-md  font-inter font-medium text-lg'
                    onClick={onButtonClick}>
                      Resume
                     <FaArrowDown className='-mb-0.5'/>
                    </button>
                    
                </div>

            </div>
            <div className='lg:w-[50%] w-[70%]'>
                <img src={image}/>
            </div>
        </div>
    </div>
  )
}
