"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import dumbyUser from "../../public/dumyUser.png"
import PricingCard from './PricingCard';


const LongCard = ({ className, tutor }) => {
    
    return (
        <>
            <div className={`w-[98%]" ${className} h-[24rem] rounded-[1.5rem] border-2 border-gray-200 m-auto`}>
                <div className='w-full flex relative top-4  h-[92%]'>
                    <div className='w-[15rem] ml-2 h-full flex items-center justify-center overflow-hidden rounded-[1.5rem]'>
                        <Link href={`/profile/user/${tutor?._id}`}>
                            <Image src={tutor?.avatar || dumbyUser} alt='' loading='lazy' width={352} height={352} className="rounded-full w-[9rem] h-[9rem] object-cover" />
                        </Link>
                    </div>
                    <div className='ml-[2rem]'>
                        <div className='text-gray-700 dark:text-white'>
                            <p className='font-semibold text-[2rem]'>{tutor?.username}</p>
                            <div className='flex mt-3 items-center text-[1.3rem] gap-4'>
                                <p className='text-gray-800 dark:text-gray-200 font-medium'>Experties</p>
                                {tutor?.experties.map((value, index) => (
                                    <p className='text-[.9rem]' key={index}>{value}</p>
                                ))}
                            </div>
                            <div className='flex my-1 items-center text-[1.3rem] gap-4 text-center'>
                                <p className='text-gray-800 dark:text-gray-200 font-medium'>Experience</p>
                                <p className='text-[.9rem]'>{tutor?.experienceDetails?.timeOfExperience}</p>
                            </div>
                            <div className='flex my-1 items-center text-[1.3rem] gap-4'>
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
                    <div className='ml-10'>
                        <PricingCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LongCard
