import React from 'react'
import { HERO_CONTENT } from "../assets/index.js"
import profilePic from "../assets/avatar.png"

const Hero = () => {
  return (
    <div className='pt-28 px-8 border-b border-neutral-900 pb-4 lg:mb-36 w-[100vw] h-[100vh]'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start ml-10'>
            <h2 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Pratik Patel</h2>
            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer </span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <div className='relative bg-gradient-to-b from-purple-500 via-gray-750 to-black rounded-full w-96 h-96 mt-9 mx-auto'>
              <img className='absolute top-4 left-0 right-0 w-full h-[calc(100%-1.09rem)] object-cover rounded-full' src={profilePic} alt="Profile" />
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Hero
