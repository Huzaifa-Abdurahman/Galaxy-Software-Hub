"use client"
import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"
const About = () => {
  return (
    <div className='w-full h-full mt-32 flex flex-col justify-center items-center p-20' id='About'>
      <div className='text-4xl font-bold text-white '><h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>About</h1></div>
      <div className='flex flex-row mt-4 gap-4'>
        <div className='flex flex-col'>
        
        <div className="relative mt-5 z-1 w-auto bg-gradient-to-r from-purple-500 to-cyan-500  rounded-lg shadow-lg border border-[#2A0E61]" >
    <div className='overflow-hidden'>
    <div className='flex flex-col gap-y-3 rounded-full mt-4 p-4'>
    <Image src="/huzaifa.png" width={300} height={300} alt='huzaifa' className='rounded-full border shadow-lg border-blue-900'/>
    </div>
    <div className='flex flex-col justify-center items-center text-white font-bold font-mono text-2xl p-6'>
        <h2>CEO Huzaifa Abdurahman</h2>
        <div className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500'>Software Engineer</div>
    </div>
    <div className='flex p-2'>
    
    <motion.div
       whileHover={{ scale: 1.2 }}
       whileTap={{ scale: 0.8 }}
       style={{ x: 100 }}
      className='bg-clip text-white font-bold text-2xl bg-gradient-to-r from-pink-500 to-violet-500 p-2 rounded-full '>Let's Connect</motion.div></div>
        
        </div>
        </div>
    </div>
    <div className='flex flex-col'>
    <div className="relative mt-5 z-1 w-auto bg-gradient-to-r from-purple-500 to-cyan-500  rounded-lg shadow-lg border border-[#2A0E61]" >
     <div className='flex flex-col justify-center items-center text-white font-semibold font-mono text-2xl p-6'>
        <div className='text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-300 to-blue-800 '> 
        Galaxy Software Hub</div><div className='justify-center items-center'>is a software company which <br />is providing services of <br />
        web development,web design, <br /> app development,app design, <br /> SEO,graphic design and logo <br /> design</div>
     </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default About