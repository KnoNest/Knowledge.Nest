"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IoCallOutline } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Image from 'next/image';
import heroImg1 from "../../public/hero1-img1.jpg"
import Link from 'next/link';
import { Button } from '@nextui-org/react';


const LongCard = ({ className, profile }) => {
    return (
        <>

            <div className={`w-[98%]" ${className} h-[24rem] rounded-[1.5rem] border-2 border-gray-200 m-auto`}>
                <div className='w-full flex relative top-4  h-[92%]'>
                    <div className='w-[15rem] ml-2 h-full overflow-hidden rounded-[1.5rem]'>
                        <Link href={`/profile/user/${"id"}`}>
                            <Image src={heroImg1} alt='' loading='lazy' className=" w-full h-full object-cover" />
                        </Link>
                    </div>
                    <div className='ml-[2rem]'>
                        <div className='text-gray-700 dark:text-white'>
                            <p className='font-semibold text-[2rem]'>krevin the hunter</p>
                            <div className='flex mt-3 items-center text-[1.3rem] gap-4'>
                                <p className='text-gray-800 dark:text-gray-200 font-medium'>Experties</p>
                                <p className='text-[.9rem]'>Maths, Quantum physics</p>
                            </div>
                            <div className='flex my-1 items-center text-[1.3rem] gap-4 text-center'>
                                <p className='text-gray-800 dark:text-gray-200 font-medium'>Experience</p>
                                <p className='text-[.9rem]'>100 Decades</p>
                            </div>
                            <div className='flex my-1 items-center text-[1.3rem] gap-4'>
                                <p className='text-gray-800 dark:text-gray-200 font-medium'>Achivement</p>
                                <p className='text-[.9rem]'>Zindagi jhand hai</p>
                            </div>
                            <div className='flex mt-5 text-[1.1rem] gap-4'>
                                <p className='w-[35rem] font-medium leading-7 overflow-hidden'>Meri Ek taang nakli hai, Mai hockey ka bohoth bada khiladi tha.
                                    Ek din Uday bhai ko meri kisi baat pe gussa aagaya aur mere he hockey se meri taang ke do tukde kar diye.
                                    Lekin dil ke bohot ache hai, Fauran mujhe hospital le gaye aur ye nakli taang lagwayi lorem...
                                    <Link href={"/"} className='text-blue-600'>read more</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='ml-10'>
                        <div className='w-[20rem] h-[23.9rem] top-[-1rem] relative border-l-1 border-gray-200 dark:text-white rounded-[1.5rem]'>
                            {/* <Tabs tabs={tabs} /> */}
                            <Tabs defaultValue="1M" className="w-[25.7rem]">
                                <TabsList className="bg-gray-100 dark:bg-gray-700 w-[77%] rounded-t-[1.5rem] h-[3rem] duration-1000">
                                    <TabsTrigger value="1M" className="font-semibold h-[95%] rounded-[1rem] w-full text-[1rem]">1 Month</TabsTrigger>
                                    <TabsTrigger value="2M" className="font-semibold h-[95%] rounded-[1rem] w-full text-[1rem]">2 Month</TabsTrigger>
                                    <TabsTrigger value="3M" className="font-semibold h-[95%] rounded-[1rem] w-full text-[1rem]">3 Month</TabsTrigger>
                                </TabsList>
                                <div className='mt-5 ml-2'>

                                    <TabsContent value="1M">
                                        <div className='font-medium text-[1.1rem]  relative left-3 leading-7 '>
                                            <div className='flex gap-3'>
                                                <MdLiveTv />
                                                <p className='relative top-[-5px]'>
                                                    weekly classes lorem 2
                                                </p>
                                            </div>
                                            <div className='flex gap-3'>
                                                <IoCallOutline />
                                                <p className='relative top-[-5px]'>doubt calls</p>
                                            </div>
                                            <div className='flex gap-3'>
                                                <IoChatbubbleEllipsesOutline />
                                                <p className='relative top-[-5px]'>etc</p>
                                            </div>
                                            <div className='flex gap-4 mt-4'>
                                                {/* <p className='font-bold text-[1.4rem] text-blue-600 '>USD</p> */}
                                                <p className='font-bold text-[1.4rem] relative bottom-[1px]'>
                                                    299 $
                                                </p>
                                            </div>

                                        </div>
                                    </TabsContent>
                                    <TabsContent value="2M">
                                        <div className='font-medium text-[1.1rem] relative left-3 leading-7 '>
                                            <div className='flex gap-3'>
                                                <MdLiveTv />
                                                <p className='relative top-[-5px]'>
                                                    weekly classes lorem 2
                                                </p>
                                            </div>
                                            <div className='flex gap-3'>
                                                <IoCallOutline />
                                                <p className='relative top-[-5px]'>doubt calls</p>
                                            </div>
                                            <div className='flex gap-3'>
                                                <IoChatbubbleEllipsesOutline />
                                                <p className='relative top-[-5px]'>etc</p>
                                            </div>
                                            <div className='flex gap-4 mt-4'>
                                                {/* <p className='font-bold text-[1.4rem] text-blue-600 '>USD</p> */}
                                                <p className='font-bold text-[1.4rem] relative bottom-[1px]'>
                                                    599 $
                                                </p>
                                            </div>

                                        </div>

                                    </TabsContent>
                                    <TabsContent value="3M">
                                        <div className='font-medium text-[1.1rem]  relative left-3 leading-7 '>
                                            <div className='flex gap-3'>
                                                <MdLiveTv />
                                                <p className='relative top-[-5px]'>
                                                    weekly classes lorem 2
                                                </p>
                                            </div>
                                            <div className='flex gap-3'>
                                                <IoCallOutline />
                                                <p className='relative top-[-5px]'>doubt calls</p>
                                            </div>
                                            <div className='flex gap-3'>
                                                <IoChatbubbleEllipsesOutline />
                                                <p className='relative top-[-5px]'>etc</p>
                                            </div>
                                            <div className='flex gap-4 mt-4'>
                                                {/* <p className='font-bold text-[1.4rem] text-blue-600 '>USD</p> */}
                                                <p className='font-bold text-[1.4rem] relative bottom-[1px]'>
                                                    799 $
                                                </p>
                                            </div>

                                        </div>


                                    </TabsContent>
                                </div>
                            </Tabs>
                            <div className='mt-[2rem] ml-4'>
                                <Button className='px-[1.8rem] py-[1.5rem] bg-gradient-to-r from-indigo-700 to-purple-700 text-white font-medium'>Book Class</Button>
                                <div className='absolute h-[2px] w-[97%] rotate-[-29deg] top-[18rem] right-1 bg-black dark:bg-white'></div>
                                <div className='mt-[3rem] w-[95%] flex justify-end'>

                                    <Button className='px-[2.5rem] py-[1.5rem] bg-gradient-to-r from-indigo-700 to-purple-700 text-white font-medium'> Profile</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LongCard
