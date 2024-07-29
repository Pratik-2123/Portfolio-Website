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

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 px-8'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiNodejs className='text-7xl text-green-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-7xl'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbSql className='text-7xl text-[#1e75bc]'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJava className='text-7xl text-red-500'/>
            </div>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4 mt-8'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoJavascript className='text-7xl text-[#f0db4e]'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiKotlin className='text-7xl text-[#814ff0]'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiJetpackcompose className='text-7xl text-[#4587ed]'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-7xl text-[#0671d0]'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoGithub className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoAndroid className='text-7xl text-[#a3db3a]'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
