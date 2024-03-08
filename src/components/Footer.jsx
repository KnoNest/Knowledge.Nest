import Image from 'next/image'
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='w-full h-[25rem] bg-black flex items-center justify-center rounded-t-[1rem]'>
            <div className='w-[85%] h-[15rem] flex justify-between '>
                <div className=' flex h-full items-center text-gray-300 gap-8'>
                    <div>

                    <Image src="" alt="" />
                    </div>
                    <p className='text-[2.4rem] font-bold'>KNOWLEDGE NEST</p>
                </div>
                <div className='flex flex-col text-center justify-center leading-10 text-white h-full text-[1.4rem] font-semibold'>
                    <p>About Us</p>
                    <p>Contatc Us</p>
                    <p>Terms & Condition's</p>
                </div>
                <div className=' flex flex-col h-full text-[2rem] justify-center gap-6 text-white'>
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
