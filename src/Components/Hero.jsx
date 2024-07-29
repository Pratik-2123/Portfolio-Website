import React from 'react'
import { HERO_CONTENT } from "../assets/index.js"
import profilePic from "../assets/avatar.png"
import { motion } from 'framer-motion'

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
})

const Hero = () => {
  return (
    <div id='home' className='pt-28 px-8 border-b border-neutral-900 pb-4 lg:mb-36 w-full h-auto lg:h-[100vh]'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start lg:ml-10'>
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='pb-8 text-4xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
              Pratik Patel
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent'>
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='my-2 max-w-xl py-4 lg:py-6 font-light tracking-tighter'>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className='relative bg-gradient-to-b from-purple-500 via-gray-750 to-black rounded-full w-64 h-64 lg:w-96 lg:h-96 mt-9 mx-auto'>
              <img
                className='absolute top-4 left-0 right-0 w-full h-[calc(100%-1.09rem)] object-cover rounded-full'
                src={profilePic}
                alt='Profile'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero
