import React from 'react'
import { useForm } from 'react-hook-form'
import { ContactOpe } from '../Services/Operations/ContactOpe';

export const Contact = () => {

    const {handleSubmit,register,formState:{errors}} = useForm();

   async function onSubmitHandler(data){
      
       try{
            console.log(data);
            const response = await ContactOpe(data);
            console.log("response: ",response);  
        }
       catch(err){
        console.log("Error while sending message");
        console.log(err);
       }
    }

  return (
    <div name='contact' className='mt-20'>
        <div className='w-11/12 max-w-maxContent mx-auto flex flex-col items-center gap-4'>
            <div className='flex flex-col gap-3 items-center'>
                <div className='text-4xl font-semibold text-richblack-5 font-inter'>Get in Touch</div>
                <div className='font-inter font-medium text-richblack-100'>We’d love to here for you, Please fill out this form.</div>
            </div>
            <div className='w-full'>
                <form
                 onSubmit={handleSubmit(onSubmitHandler)}
                className='w-full mx-auto flex flex-col gap-4 items-center'>
                    <div className='w-[70%] mx-auto flex md:flex-nowrap flex-wrap gap-4 items-center'>
                        <div className=' w-full flex flex-col gap-1'>
                            <label htmlFor='firstName' className='font-inter text-richblack-5'>First Name<sup className=' text-pink-200'>*</sup></label>
                            <input
                             type='text'
                             name='firstName'
                             id='firstName'
                             placeholder='Enter your First name...'
                             {...register("firstName",{required:true})}
                             className=' bg-richblack-700 py-1.5 shadow-inner border-b border-b-richblack-300 text-richblack-50 rounded-md px-3'
                            />
                            {
                                errors.firstName && (
                                    <span className=' text-pink-200'>Enter your first name</span>
                                )
                            }
                        </div>

                        <div className=' w-full flex flex-col gap-1'>
                            <label htmlFor='lastName' className='font-inter text-richblack-5'>Last Name<sup className=' text-pink-200'>*</sup></label>
                            <input
                             type='text'
                             name='lastName'
                             id='lastName'
                             placeholder='Enter your Last name...'
                             {...register("lastName",{required:true})}
                             className=' bg-richblack-700 py-1.5 shadow-inner border-b border-b-richblack-300 text-richblack-50 rounded-md px-3'
                            />
                            {
                                errors.lastName && (
                                    <span  className=' text-pink-200'>Enter your Last name</span>
                                )
                            }
                        </div>
                    </div>

                    <div className='w-[70%] flex flex-col gap-1'>
                     <label htmlFor='email' className='font-inter text-richblack-5'>Email Address<sup className=' text-pink-200'>*</sup></label>
                     <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='Enter your email address...'
                      {...register("email",{required:true})}
                      className=' bg-richblack-700 py-1.5 shadow-inner border-b border-b-richblack-300 text-richblack-50 rounded-md px-3'
                     />{
                        errors.email && (
                            <span  className=' text-pink-200'>Email Address is required</span>
                        )
                     }
                    </div>

                    <div className='w-[70%] flex flex-col gap-1'>
                     <label htmlFor='contactNumber' className='font-inter text-richblack-5'>Contact Number<sup className=' text-pink-200'>*</sup></label>
                     <input
                      type='number'
                      id='contactNumber'
                      name='contactNumber'
                      placeholder='Enter your Contact Number...'
                      {...register("contactNumber",{required:true})}
                      className=' bg-richblack-700 py-1.5 shadow-inner border-b border-b-richblack-300 text-richblack-50 rounded-md px-3'
                     />{
                        errors.contactNumber && (
                            <span  className=' text-pink-200'>Contact Number is required</span>
                        )
                     }
                    </div>

                    
                    <div className='w-[70%] flex flex-col gap-1'>
                     <label htmlFor='message' className='font-inter text-richblack-5'>Message</label>
                     <textarea
                      id='message'
                      name='message'
                      placeholder='Enter your Message ...'
                      {...register("message",{required:true})}
                      className=' bg-richblack-700 min-h-[100px] py-1.5 shadow-inner border-b border-b-richblack-300 text-richblack-50 rounded-md px-3'
                     />{
                        errors.message && (
                            <span  className=' text-pink-200'>Message is required</span>
                        )
                     }
                    </div>

                    <button
                     type='submit'
                     className='w-[70%] bg-yellow-50 shadow-inner py-1.5 rounded-lg mt-5 text-richblack-900 font-semibold hover:bg-richblack-5 transition-all duration-200 '
                    >
                        Send Message
                    </button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}
