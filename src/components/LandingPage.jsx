"use client"
import { Button } from '@nextui-org/react'
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect.jsx'
import Link from 'next/link.js'

const LandingPage = () => {
    return (
        <>
            <div className="w-[26.6rem] sm:w-full lg:w-[73rem] xl:w-[83rem] lg:m-auto h-[48rem] rounded-[33px] flex flex-col  items-center bg-gradient-to-br from-purple-300 to-blue-200 dark:from-black dark:to-black border-b-1 dark:border-white">
                <div className='mt-[5rem]'>
                    <div className='text-center'>

                    <p className='font-bold text-[1.6rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[3rem] text-white tracking-tighter'>Unlock Your Potential. Find Your Perfect Tutor Today.</p>
                    </div>
                    <div className='lg:w-[69rem] w-[80%] md:w-[80%] m-auto flex justify-center'>

                        <TextGenerateEffect className='font-semibold leading-10 tracking-tight text-white text-[1.3rem] md:text-[1.8rem] lg:w-[60rem] text-center' words={"Personalized, one-on-one tutoring for all subjects and grade levels."} />
                    </div>
                    <div className='flex flex-wrap justify-center gap-5 text-center mt-[4rem]  font-semibold'>
                        <div className='landing-page-btn'>Science</div>
                        <div className='landing-page-btn'>Math</div>
                        <div className='landing-page-btn'>Social Science</div>
                        <div className='landing-page-btn'>Reasoning</div>
                        <div className='landing-page-btn sm:hidden'>Computer</div>
                    </div>
                    <div className='sm:flex hidden  items-center justify-center font-semibold text-center mt-3'>
                        <div className='landing-page-btn'>Computer</div>
                    </div>
                    <div className='flex flex-col justify-center mt-[4rem] items-center'>
                        <p className='sm:text-[2.2rem] text-[1.5rem] font-bold tracking-tight dark:text-purple-700 text-[#0047FF]'>Grab your first class for free</p>
                        <div className='mt-[2rem]'>
                            <Button as={Link} href='/tutor-page' className='font-semibold  text-[1.2rem] w-[12rem] mt-1 rounded-[1.1rem] h-[3rem] bg-gradient-to-r from-blue-700 to-purple-700 text-white'>Book Class</Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LandingPage
