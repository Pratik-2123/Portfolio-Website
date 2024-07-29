import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { DiNodejs } from 'react-icons/di'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { TbSql } from 'react-icons/tb'
import { DiJava } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiKotlin } from 'react-icons/si'
import { SiJetpackcompose } from 'react-icons/si'
import { FaPython } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import { IoLogoAndroid } from 'react-icons/io'
import { animate, motion } from 'framer-motion'


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div id='technologies' className='border-b border-neutral-800 pb-24 px-8'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className='my-20 text-center text-4xl'>
                Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiNodejs className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className='text-7xl' />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbSql className='text-7xl text-[#1e75bc]' />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiJava className='text-7xl text-red-500' />
                </motion.div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className='flex flex-wrap items-center justify-center gap-4 mt-8'>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoJavascript className='text-7xl text-[#f0db4e]' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiKotlin className='text-7xl text-[#814ff0]' />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiJetpackcompose className='text-7xl text-[#4587ed]' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaPython className='text-7xl text-[#0671d0]' />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoGithub className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoAndroid className='text-7xl text-[#a3db3a]' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
