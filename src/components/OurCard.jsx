import { Avatar, Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const OurCard = () => {
  return (
    <>
    <Link href={`/profile/user/${"id"}`}>
    
      <div className='w-[23rem] h-[27rem] rounded-[1.5rem] bg-black border-2 dark:border-gray-800'>
                                <div className='flex relative top-3 left-5'>
                                    <Avatar src='' alt='' className='w-[4rem] h-[4rem]' />
                                    <div className='flex flex-col gap-1 ml-1 mt-1 text-white'>
                                        <p>username</p>
                                        <p>full name</p>
                                    </div>
                                    <div className='bg-white ml-[4rem] mr-6 w-[2px] h-[5rem]'></div>
                                    <div className='text-white text-center'>
                                        <p>Classes done</p>
                                        <p>25</p>
                                    </div>
                                </div>
                                <div className='text-white relative left-6 mt-[4rem]'>
                                    <div className='flex gap-3 text-white'>
                                        <p>Experties </p>
                                        <p>Science, Austronomical physics</p>
                                    </div>
                                    <div className='flex gap-3 text-white'>
                                        <p>Board </p>
                                        <p>ICSC</p>
                                    </div>
                                    <div className='flex gap-3 text-white'>
                                        <p>Goals </p>
                                        <p>something</p>
                                    </div>
                                    <div className='mt-[2rem]'>
                                        <Button className='bg-white py-6 px-5 font-semibold '>
                                            <p className='bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent'>
                                                Book Class
                                            </p>
                                        </Button>
                                        <div className='w-[70%] m-auto'>
                                            <div className='rounded-full relative right-[-12rem] bottom-[5.5rem] w-[3.1rem] h-[3rem] bg-gradient-to-r from-blue-700 to-purple-700'></div>
                                            <div className='h-[2px] w-[23rem] relative right-[4.9rem] top-[-1.3rem] bg-white rotate-[-30deg]'></div>
                                        </div>
                                        <div className='w-[87%] flex justify-end'>
                                            <Button className='bg-white py-6 px-5 font-semibold '>
                                                <p className='bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent'>
                                                    Feed backs
                                                </p>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div> 
    </Link>
    </>
  )
}

export default OurCard
