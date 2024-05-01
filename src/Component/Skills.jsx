import React from 'react'

import { SiCss3, SiExpress, SiHtml5, SiJson, SiJsonwebtokens,  SiMongoose, SiNodemon } from 'react-icons/si'
import { TbBrandCpp, TbBrandJavascript, TbBrandReact, TbBrandTailwind, TbBrandMongodb, TbBrandNodejs } from 'react-icons/tb'



export const Skills = () => {
  return (
    <div name='skill' className='mt-20'>
        <div className='w-11/12 max-w-maxContent mx-auto text-white flex flex-col items-center gap-10'>
            <div className='text-4xl font-inter font-semibold bg-gradient-to-r from-[#1FA2FF] to-[#12D8FA] text-transparent bg-clip-text'>My Skills</div>
            <div className='flex items-center flex-row flex-wrap gap-5'>
                <TbBrandCpp size={50} className=' text-[#5E97D0]'/>
                <TbBrandJavascript size={50} className='text-[#f0db4f]'/>
                <TbBrandReact size={50} className='text-[#61DBFB]'/>
                <TbBrandTailwind size={50} className='text-[#06b6d4]'/>
                <TbBrandNodejs size={50} className='text-[#3c873a]'/>
                <SiExpress size={50} className='text-[#4c1d95]'/>
                <TbBrandMongodb size={50} className='text-[#4db33d]'/>
                <SiMongoose size={50} className='text-[#A8986F]'/>
                <SiJsonwebtokens size={50} className=' text-brown-50 shadow-inner'/>
                <SiJson size={50} className=' text-blue-700'/>
                <SiNodemon size={50} className='text-[#4db33d]'/>
                <SiHtml5 size={50} className='text-[#e34c26]'/>
                <SiCss3 size={50} className='text-[#2965f1]'/>
                

                
            </div>
        </div>
    </div>
  )
}
