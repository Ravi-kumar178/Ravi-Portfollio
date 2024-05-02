import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-scroll';

export const About = () => {

    const onButtonClick = () => {
        const pdfUrl = "0001.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div name='about' className='mt-14 flex items-center'>
        <div  className='w-11/12  max-w-maxContent  mx-auto flex flex-col md:flex-row items-center gap-y-8 md:gap-x-16'>
            <div className='lg:w-[50%]  sm:w-[60%] w-full'>
                <div className='text-3xl  text-richblack-5 font-inter font-semibold'>Front End Engineer at <span className='bg-gradient-to-r from-[#FF512F] to-[#F09819]  text-transparent bg-clip-text text-4xl'>Heal Health Connect Pvt Ltd</span></div>
                <div className='h-12 w-[1px]  bg-richblack-700 ml-[1px]'></div>
                <div className='text-3xl text-richblack-5 font-inter font-semibold'>Apprenticeship web application development from <span className='bg-gradient-to-r from-[#FF512F] to-[#F09819]  text-transparent bg-clip-text text-4xl'>CodeHelp</span></div>

                {/*Button */}
                <div className='flex items-center gap-x-6 mt-8'>
                <Link to='contact'  smooth={true} offset={-80} duration={200}>
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

            <div className='flex  gap-3 sm:w-[50%] w-full '>
                <div className='font-inter text-blue-50 '>
                    <p className='font-inter text-blue-50 '>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                </div>
                <TypeAnimation
                 sequence={[
                    `<!DOCTYPE html>\n<html>\n<head><title>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n/head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>`
                    ,2000,""
                 ]}
                 repeat={Infinity}
                 cursor={true}
                  style={{
                    whiteSpace:"pre-line",
                    display:"block",
                    color:"yellow"
                  }}
                  omitDeletionAnimation={true}
                />
            </div>
        </div>
    </div>
  )
}
