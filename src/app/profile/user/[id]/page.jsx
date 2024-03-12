"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import heroImg1 from "../../../../../public/hero1-img2.jpg"
import FeedBack from '@/components/FeedBack'
import { Button, Divider, Skeleton } from '@nextui-org/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IoCallOutline } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Profile = () => {
  const [data, setData] = useState(false)

  setTimeout(() => {
    setData(true)
  }, 3000)
  return (
    <>
      <div className='w-[75%] mt-[8rem] ml-[5rem] mb-[8rem] flex gap-[6rem]'>
        <div>
          <div className='h-[12rem] w-[44rem] rounded-[1.1rem] bg-gradient-to-br from-violet-800 to-violet-500 '></div>
          {data ?

            <div>
              <div className='h-[9rem] w-[15rem] rounded-[1.5rem] overflow-hidden relative left-[2rem] bottom-[4rem]'>
                <Image src={heroImg1} alt='' className='w-full h-full object-cover' />
              </div>
              <div className='relative left-[2rem] bottom-[2rem] flex flex-col gap-2'>
                <div className=' font-semibold text-[1.7rem]'>
                  <p>username</p>
                  <p>full name</p>
                </div>
                  <Divider/>
                <div>
                  <div className='flex mt-3 text-[1.1rem] gap-4 items-center'>
                    <p className='text-gray-900 dark:text-gray-200 font-medium'>Experties</p>
                    <p className='text-[.9rem] relative'>Maths, Quantum physics</p>
                  </div>
                  <div className='flex my-1 text-[1.1rem] gap-4 items-center'>
                    <p className='text-gray-900 dark:text-gray-200 font-medium'>Experience</p>
                    <p className='text-[.9rem] relative'>100 Decades</p>
                  </div>
                  <div className='flex my-1 text-[1.1rem] gap-4 items-center'>
                    <p className='text-gray-900 dark:text-gray-200 font-medium'>Achivement</p>
                    <p className='text-[.9rem] relative'>Zindagi jhand hai</p>
                  </div>
                  <div className='mt-5 text-[1.1rem]'>
                  <Divider/>
                    <p className='font-semibold text-[1.5rem]'>About</p>
                    <p className='w-[35rem] font-medium leading-7 overflow-hidden'>Meri Ek taang nakli hai, Mai hockey ka bohoth bada khiladi tha.
                      Ek din Uday bhai ko meri kisi baat pe gussa aagaya aur mere he hockey se meri taang ke do tukde kar diye.
                      Lekin dil ke bohot ache hai, Fauran mujhe hospital le gaye aur ye nakli taang lagwayi lorem...
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-[5rem] relative left-[2rem]'>
                <div className='my-[4rem]'>
                  <h2 className='font-bold text-[2rem] bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent '>FeedBack</h2>
                </div>
                <FeedBack />
              </div>
            </div>

            :

            <div>
              <div className='h-[9rem] w-[15rem] rounded-[1.5rem] overflow-hidden relative left-[2rem] bottom-[4rem]'>
                <Skeleton className="rounded-lg w-[15rem]">
                  <div className="h-[18rem] rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
              <div className='relative left-[2rem] bottom-[2rem]'>
                <div className=' font-semibold text-[1.7rem] my-[3rem]'>
                  <Skeleton className="w-[20rem] rounded-lg">
                    <div className="h-[1.5rem]  rounded-lg bg-default-200"></div>
                  </Skeleton>
                </div>
                <div>
                  <div className='flex mt-3 text-[1.1rem] gap-4 items-center'>
                    <Skeleton className="w-[20rem] rounded-lg">
                      <div className="h-[1.5rem]  rounded-lg bg-default-200"></div>
                    </Skeleton>
                  </div>
                  <div className='flex my-1 text-[1.1rem] gap-4 items-center'>
                    <Skeleton className="w-[20rem] rounded-lg">
                      <div className="h-[1.5rem]  rounded-lg bg-default-200"></div>
                    </Skeleton>
                  </div>
                  <div className='flex my-1 text-[1.1rem] gap-4 items-center'>
                    <Skeleton className="w-[20rem] rounded-lg">
                      <div className="h-[1.5rem]  rounded-lg bg-default-200"></div>
                    </Skeleton>
                  </div>
                  <div className='mt-[3rem] text-[1.1rem] flex flex-col gap-4'>
                    <Skeleton className="w-[30rem] rounded-lg">
                      <div className="h-3  rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-[28rem] rounded-lg">
                      <div className="h-3  rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-[26rem] rounded-lg">
                      <div className="h-3  rounded-lg bg-default-300"></div>
                    </Skeleton>
                  </div>
                </div>
              </div>
              <div className='mt-[5rem] relative left-[2rem]'>
                <div className='my-[4rem]'>
                  <h2 className='font-bold text-[2rem] bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent '>FeedBack</h2>
                </div>
                <Skeleton className="rounded-lg w-[44rem]">
                  <div className="h-[12rem] rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </div>
          }

        </div>

        <div className='mt-[1rem]'>
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
    </>
  )
}

export default Profile
