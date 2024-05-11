import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='w-full h-[25rem] bg-black flex items-center justify-center rounded-t-[1rem]'>
        <div className='flex-col w-[85%] h-[15rem] flex sm:flex-row justify-between '>
          <div className=' flex h-full items-center justify-center text-gray-300 gap-8'>
            <p className='sm:text-[2.4rem] text-[1.8rem] font-bold'>KNOWLEDGE NEST</p>
          </div>
          <div className='flex sm:flex-col text-center justify-center sm:gap-1 gap-4 leading-10 text-white h-full sm:text-[1.4rem] font-semibold'>
            <p>About Us</p>
            <p>Contatc Us</p>
            <p>Terms & Condition's</p>
          </div>
          <div className=' flex sm:flex-col h-full text-[2rem] justify-center gap-6 text-white'>
            <p><BsTwitterX /></p>
            <p><FaInstagram /></p>
            <p><FaWhatsapp /></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer