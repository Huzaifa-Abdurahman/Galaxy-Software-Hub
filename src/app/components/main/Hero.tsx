import React from 'react'
import Herocontent from '../sub/Herocontent'

export default function Hero() {
  return (
    <div className='relative flex flex-col h-full w-full' id="home"> 
    <video 
    autoPlay
    muted
    loop
    className='roatate-180 absolute top-[-100px] left-0 z-[1] w-full object-cover'
    >
        <source src='/blackhole.webm' type='video/webm'/>
    </video>
    <Herocontent />
    </div>
  )
}
