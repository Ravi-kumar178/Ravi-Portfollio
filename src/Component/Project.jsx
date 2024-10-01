import React from 'react'
import img1 from "../assets/Screenshot (424).png"
import img2 from "../assets/Screenshot (423).png"
import img4 from '../assets/Screenshot (502).png'
import { FaArrowRight } from 'react-icons/fa6'

export const Project = () => {

    const prj = [
        {
            id:1,
            projectImage:img1,
            title:"StudyNotion: EdTech Platform",
            description:"An edtech platform for instructors to showcase their skills and also for students who are tech enthusiasts.",
            githubLinkFE:"https://github.com/Ravi-kumar178/clientSide-StudyNotion",
            liveLink : "https://github.com/Ravi-kumar178/server"
        },
        {
            id:2,
            projectImage:img4,
            title:"Forever – An E-Commerce Clothing",
            description:"An efficient e-commerce platform offering diverse products and an exceptional user experience for global customers.",
            githubLinkFE:"https://github.com/Ravi-kumar178/Forever-ECommerce",
            liveLink:"https://forever-ecommerce-green.vercel.app/"
        },
        {
            id:3,
            projectImage:img2,
            title:"Doctor's Convention",
            description:"An event organizing platform for doctors and healthcare workers to spread awareness in society regarding healthy lifestyles.",
            githubLinkFE:"https://github.com/Ravi-kumar178/myapp",
            liveLink:"https://6565b8a247d92e4f5285a1b9--neon-torte-314aa5.netlify.app/"
        },

    ]

    



  return (
    <div name='project' className='mt-20' >
        <div className='w-11/12 max-w-maxContent mx-auto flex flex-col items-center gap-10'>
            <div className='text-4xl bg-gradient-to-r from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-inter font-semibold '>My Projects</div>
            <div className='flex flex-wrap md:flex-nowrap items-center gap-5 '>
                {
                    prj.map((data)=>{
                        return(
                            <div  key={data.id} className='bg-richblack-800 flex flex-col gap-4 pb-4'>
                                <img src={data.projectImage} alt={data.title} className=" aspect-auto"/>
                                <div className='mx-auto font-inter flex flex-col items-center gap-3'>
                                    <p className='font-inter font-semibold bg-gradient-to-r from-[#1FA2FF] to-[#12D8FA] text-transparent bg-clip-text text-xl'>{data.title}</p>
                                    <p className='text-center font-inter text-sm text-richblack-25'>{data.description}</p>
                                </div>
                                <div className='flex items-center gap-4 mx-auto'>
                                    <a href={data.githubLinkFE}>
                                        <button className='flex items-center gap-x-2 bg-richblack-5 px-3 py-1 rounded-lg shadow-inner font-semibold text-richblack-900 hover:bg-richblack-900 hover:text-richblack-5 transition-all duration-200'>
                                            Github <FaArrowRight/>
                                        </button>
                                    </a>
                                    {
                                        data.id === 1 ?
                                        (
                                            <a href={data.liveLink}>
                                                <button  className='flex items-center gap-x-2 bg-richblack-5 px-3 py-1 rounded-lg shadow-inner font-semibold text-richblack-900 hover:bg-richblack-900 hover:text-richblack-5 transition-all duration-200'>
                                                   Github <FaArrowRight/>
                                                 </button>
                                            </a>
                                        ):
                                        (
                                            <a href={data.liveLink}>
                                                <button className='flex items-center gap-x-2 bg-richblack-5 px-3 py-1 rounded-lg shadow-inner font-semibold text-richblack-900 hover:bg-richblack-900 hover:text-richblack-5 transition-all duration-200'>
                                                   Livelink <FaArrowRight/>
                                                 </button>
                                            </a>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
