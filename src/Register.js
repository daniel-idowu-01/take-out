import React, { useState } from 'react'
import LogoImage from './images/image 5.png'
import firstFood from './images/food-1.png'
import secondFood from './images/food-2.png'
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import './index.css'

function Register() {

  return (
    /* div for full page */
    <div className='block md:flex'>

      {/* div for left section */}
      <div className=' bg-mobilebgImage md:bg-bgImage bg-130% md:bg-contain bg-no-repeat w-1/2 md:h-screen'>

        <div className='flex relative left-full md:left-10 top-10 mb-10 ml-20 md:ml-0'>
          <img className='w-6 h-6 md:w-auto md:h-auto' src={LogoImage} alt='' />
          <p className=' text-sm text-red-600 md:text-white logo-text md:text-2xl italic md:mt-2 '>Take <span className='text-logo-color'>Out</span></p>
        </div>

        <div className='flex relative bottom-10 md:bottom-0'>
            <img className=' w-36 h-36 md:w-auto md:h-100' src={firstFood} alt='' />
            <img className=' w-36 h-36 md:w-auto md:h-96 relative top-6 right-6 md:right-14 md:top-14' src={secondFood} alt='' />
        </div>
        <p className='motto text-white text-sm w-20 md:w-auto md:text-4xl relative bottom-10 md:mt-3 md:top-14 md:left-20'>...order your best meal!</p>
      </div>

      {/* div for right section */}
      <div className='hidden md:block'>
        <form className=' mt-20 px-10 relative top-20 '>

          <div className='relative'>
            <h2 className='text-center text-3xl login-text mb-3 tracking-wide '>Register</h2>
            <hr className='bg-border-color h-1 w-11 mb-3 relative left-36' />
          </div>

           {/* Input Elements */}
          <div className='flex items-center mb-7 '>
            <input
             type='text' placeholder='Username' className='outline-none p-2 px-5 border-b-2  w-80 login-btn' required
              />
             <FaUserAlt className='relative right-5' />
          </div>

          <div className='flex items-center mb-7 '>
            <input
             type='email' placeholder='Email' className='outline-none p-2 px-5 border-b-2  w-80 login-btn' required
              />
             <FaUserAlt className='relative right-5' />
          </div>

          <div className='flex items-center mb-7 '>
            <input
             type='password' placeholder='Password' className='outline-none p-2 px-5 border-b-2 w-80 login-btn' required
              />
            <AiOutlineEyeInvisible className='relative right-5' />
          </div>

          <div className='flex items-center mb-7 '>
            <input
             type='password' placeholder='Confirm Password' className='outline-none p-2 px-5 border-b-2 w-80 login-btn' required
              />
            <AiOutlineEyeInvisible className='relative right-5' />
          </div>
          {/* Input Elements End */}

          <p className=' text-border-color italic text-sm hover:opacity-75 hover:cursor-pointer hover:underline mb-5'>Forgot Password?</p>
          <button type='submit' className='login-btn bg-border-color text-white p-2 px-10 rounded-md hover:opacity-75 relative left-24'>REGISTER</button>
        </form>
      </div>

      {/* Right section for Mobile */}
      <div className='block md:hidden'>
        <p className='text-black text-center login-text  mt-5 mb-3'>Welcome</p>
        <div className='relative'>
            <h2 className='text-center text-xs login-btn mb-3 tracking-wide '>Register your account</h2>
            <hr className='bg-border-color h-1 w-11 mb-3 relative left-36' />
        </div>

        <div>
          <form className=' mt-0 px-10'>

            {/* Input Elements */}
            <div className='flex items-center mb-7 '>
              <input
              type='text' placeholder='Username' className='outline-none p-2 px-5 border-b-2  w-auto login-btn' required
                />
              <FaUserAlt className='relative right-5' />
            </div>

            <div className='flex items-center mb-7 '>
              <input
              type='email' placeholder='Email' className='outline-none p-2 px-5 border-b-2  w-auto login-btn' required
                />
              <FaUserAlt className='relative right-5' />
            </div>

            <div className='flex items-center mb-7 '>
              <input
              type='password' placeholder='Password' className='outline-none p-2 px-5 border-b-2 w-auto login-btn' required
                />
              <AiOutlineEyeInvisible className='relative right-5' />
            </div>

            <div className='flex items-center mb-7 '>
              <input
              type='password' placeholder='Confirm Password' className='outline-none p-2 px-5 border-b-2 w-auto login-btn' required
                />
              <AiOutlineEyeInvisible className='relative right-5' />
            </div>
          {/* Input Elements End */}

            <p className=' text-border-color italic text-sm hover:opacity-75 hover:cursor-pointer hover:underline mb-5'>Forgot Password?</p>
            <button type='submit' className='login-btn bg-border-color text-white p-2 px-10 rounded-md hover:opacity-75'>REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
