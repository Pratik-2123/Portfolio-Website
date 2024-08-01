import React from 'react'
import aboutImg from "../assets/aboutimg.jpeg"
import { ABOUT_TEXT } from "../assets/index.js"
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id='about' className='border-b border-neutral-900 pb-4 px-8'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5}}
        className='my-20 text-center text-4xl'>About
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5}}
          className='text-neutral-500'>
          Me
        </motion.span>
      </motion.h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5}}
            className='flex items-center justify-center'>
            <img className='rounded-2xl h-96' src={aboutImg} alt="" />
          </motion.div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className=' w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
