import { Socials } from "@/app/constants"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-auto flex flex-col items-center justify-between m-auto px-[10px]">
    
        <div className="flex flex-row justify-between items-between px-20">
          <div><a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/nlogo.png"
            alt="logo"
            width={70}
            height={65}
            className="cursor-pointer hover:animate-slowspin" />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Galaxy Software <br />Hub
          </span>
        </a>
       </div>
        <div className="flex flex-row mt-4 gap-x-4 px-8">
        <div className="flex flex-row">
          <Link href='http://www.instagram.com/huzaifaabdurahman?igsh=MTNmZG05d21mM2h5Zg=='><Image
            src='/instagram.png'
            width={24}
            height={24}
            alt="instagram" /></Link>
        </div>
        <div><a href="https://www.linkedin.com/in/huzaifa-abdurahman-159303265"><Image
          src='/linkdin.png'
          width={24}
          height={24}
          alt="linkdin" /></a>
        </div>
        <div><a href="mailto:galaxysoftwarehub@gmail.com"><Image
          src='/email.png'
          width={24}
          height={24}
          alt="email" /></a>
        </div>
        <div><a href="https://wa.me/03100043155"><Image
          src='/w2.jpg'
          width={24}
          height={24}
          alt="w1" /></a>
        </div>
        <div><a href="https://www.facebook.com/huzaifa.abdurahman.5?mibextid=ZbWKwL"><Image
          src='/f.png'
          width={24}
          height={24}
          alt="f" /></a>
        </div>
        </div>
      </div>
      <div className="flex flex-row">
      <div className=" w-auto mt-3 h-[50px] flex flex-row items-center justify-between md:mr-2">
        <div className="backdrop-blur-lg bg-white/30 shadow-lg shadow-[#2A0E61]/50 z-50 flex items-center justify-between w-[400px] h-auto border border-[#7042f861] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 ">
          <a href="#home" className="cursor-pointer">
            Home
          </a>
          <a href="#skills" className="cursor-pointer hover:from-pink-500...">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
          <a href="#contact" className="cursor-pointer">
            Contact
          </a>
          <a href="#About" className="cursor-pointer">
            About
          </a>

        </div>
    </div>
    </div>
   </div>
   </div>
      
  );
};

export default Navbar;