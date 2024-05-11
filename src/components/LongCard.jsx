"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import dumbyUser from "../../public/dumyUser.png"
import PricingCard from './PricingCard';


const LongCard = ({ className, tutor }) => {

    return (
        <>
            <div className={`lg:w-[98%]" md:w-[85%] lg:${className}  h-[40rem] lg:h-[24rem] my-[2rem] rounded-[1.5rem] border-2 border-gray-200 m-auto`}>
                <div className='w-full flex flex-col lg:flex-row  relative top-4  h-[92%]'>
                        <div className='lg:w-[15rem] ml-2 lg:h-full  flex items-center justify-center overflow-hidden rounded-[1.5rem]'>
                            <Link href={`/profile/user/${tutor?._id}`}>
                                <Image src={tutor?.avatar || dumbyUser} alt='' loading='lazy' width={352} height={352} className="rounded-full lg:w-[9rem] lg:h-[9rem] sm:w-[7rem] sm:h-[7rem] w-[4rem] h-[4rem] object-cover" />
                            </Link>
                        </div>
                        <div className='ml-[2rem] w-[25rem]'>
                            <div className='text-gray-700 dark:text-white'>
                                <p className='font-semibold md:text-[2rem] text-[1.5rem]'>{tutor?.username}</p>
                                <div className='flex mt-3 items-center md:text-[1.3rem] md:gap-4 gap-2 text-center'>
                                    <p className='text-gray-800 dark:text-gray-200 font-medium flex flex-wrap'>Experties</p>
                                    {tutor?.experties.slice(0,2).map((value, index) => (
                                        <p className='text-[.9rem]' key={index}>{value}</p>
                                    ))}
                                </div>
                                <div className='flex my-1 items-center md:text-[1.3rem] md:gap-4 gap-2 text-center'>
                                    <p className='text-gray-800 dark:text-gray-200 font-medium'>Experience</p>
                                    <p className='text-[.9rem]'>{tutor?.experienceDetails?.timeOfExperience}</p>
                                </div>
                                <div className='flex my-1 items-center md:text-[1.3rem] md:gap-4 gap-2 text-center'>
                                    <p className='text-gray-800 dark:text-gray-200 font-medium'>Achivement</p>
                                    {tutor?.experienceDetails?.achievements.map((value, index) => (
                                        <p className='text-[.9rem]' key={index}>{value}</p>
                                    ))}
                                </div>
                                <div className='flex mt-5 text-[1.1rem] gap-4'>
                                    <p className='w-[35rem] font-medium leading-7 overflow-hidden'>{tutor?.about}
                                        <Link href={`/profile/user/${tutor?._id}`} className='text-blue-600'>read more</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    <div>
                        <PricingCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LongCard
