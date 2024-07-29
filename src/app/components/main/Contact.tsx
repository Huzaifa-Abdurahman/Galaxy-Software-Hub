
import React from 'react'
import Image from 'next/image'
import { RxLinkedinLogo } from 'react-icons/rx'
import Link from 'next/link'
function Contact() {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center p-20 mt-8 text-gray-200' id="contact">
      
      <h1 className='font-bold text-3xl my-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 '>Contact us</h1>
      <div className='flex flex-col md:flex-row gap-10 px-10 '>
        <div className='p-2 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] m-2 p-2 py-6 px-6 flex flex-col'>
          <div className='font-sans text-2xl'>
          <div className="flex flex-col">
          <div className=''>
          Phone  <Image src="/phone.png"
              width={24}
              height={24} alt={'phone'} /></div></div>
             
          <div className=''>+92-3100043155</div> <br />
          <div className="flex flex-col">
          <div className=''>Linkdin<RxLinkedinLogo /> huzaifa abdurahman</div></div><br />
          <div><div><Link href="https://wa.me/03100043155"><Image src="/whattsap.png" width={24} height={24} alt='whattsap' /></Link></div>+92-3100043155 Whatssap</div>
        </div></div>
        <div className='p-2 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] m-2 p-2 py-6 px-6  flex flex-col '>
          <div className='font-sans text-2xl'><div> E-Mail <Image src="/gmail.png" width={24} height={24} alt='gmail' className='bg-white'/></div> <br/>
            galaxysoftwarehub@gmail.com  <a href="mailto:abdurahhuzaifa393@gmail.com">Send email</a>
          </div> <br/>
          <div className='font-sans text-2xl'>Facebook <Image
          src='/f.png'
          width={24}
          height={24}
          alt="f" /><br /> Huzaifa Abdurahman </div>
        </div>
      </div>
    </div>
  )
}

export default Contact















