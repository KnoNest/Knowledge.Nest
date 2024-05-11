"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import FeedBack from '@/components/FeedBack'
import { Button, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Skeleton } from '@nextui-org/react'
import { PiDotsThreeBold } from "react-icons/pi";
import { useParams } from 'next/navigation'
import getUser from '@/fetchApi/get-user'
import Link from 'next/link'
import useStudentApi from '@/fetchApi/useStudentApi'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import dumbyUser from "../../../../../public/dumyUser.png"
import usePriceApi from '@/fetchApi/usePriceApi'
import PricingCard from '@/components/PricingCard'

const Profile = () => {
  const currentUser = useSelector(state => state.user.userData)
  const classPrice = useSelector(state => state.price.price)
  const router = useRouter()
  const { logout } = useStudentApi()
  const { getPrice } = usePriceApi()
  const { get_user } = getUser()
  const [user, setUser] = useState(false)
  const { id } = useParams()


  useEffect(() => {
    (async () => {
      const data = await get_user(id)
      setUser(data)
      if (!classPrice._id) {
        await getPrice()
      }

    })()
  }, [])

  const handleLogout = async () => {
    await logout()
    router.push("/")
  }


  return (
    <>
      <div className='w-[75%] mt-[8rem] ml-[5rem] mb-[8rem] flex gap-[6rem]'>
        <div>
          <div className='h-[12rem] w-[44rem] rounded-[1.1rem] bg-gradient-to-br from-violet-800 to-violet-500 '></div>
          {user ?

            <div>
              <div className='h-[9rem] w-full flex justify-between'>
                <div className='w-[15rem] overflow-hidden rounded-[1.5rem] relative left-[2rem] bottom-[4rem]'>

                  <Image src={user?.avatar || dumbyUser} alt='' width={240} height={135} className='w-full h-full object-cover' />
                </div>
                {currentUser?._id === user?._id &&
                  <div>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button className='relative w-[1rem] text-[1.5rem] rounded-full dark:bg-black top-[2rem] text-white border-1 border-white'><PiDotsThreeBold /></Button>

                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                        <DropdownItem as={Link} href={`/update-profile/${user?._id}`} key="new">Update Profile</DropdownItem>
                        <DropdownItem key="delete" className="text-danger" color="danger" onClick={handleLogout}>
                          Logout
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                  </div>
                }
              </div>

              <div className='relative left-[2rem] bottom-[2rem] flex flex-col gap-2'>
                <div className='font-semibold text-[1.7rem]'>
                  <p>{user?.username}</p>
                  <p>{user?.firstName} {user?.lastName}</p>
                </div>

                <Divider />
                {user?.isTeacher
                  ?

                  <div>
                    <div className='flex mt-3 text-[1.1rem] gap-4 items-center'>
                      <p className='text-gray-900 dark:text-gray-200 font-medium'>Experties</p>
                      <div className='flex gap-2'>

                        {user?.experties.map((value, index) => (
                          <p className='text-[.9rem] relative' key={index}>{value}</p>
                        ))}
                      </div>
                    </div>
                    <div className='flex my-1 text-[1.1rem] gap-4 items-center'>
                      <p className='text-gray-900 dark:text-gray-200 font-medium'>Experience</p>
                      <p className='text-[.9rem] relative'>{user?.experienceDetails.timeOfExperience}</p>
                    </div>
                    <div className='flex my-1 text-[1.1rem] gap-4 items-center'>
                      <p className='text-gray-900 dark:text-gray-200 font-medium'>Achivement</p>
                      <p className='text-[.9rem] relative'>{user?.experienceDetails.achievements}</p>
                    </div>
                    <div className='flex my-1 text-[1.1rem] gap-4 items-center'>
                      <p className='text-gray-900 dark:text-gray-200 font-medium'>Languages</p>
                      <div className='flex gap-2'>
                        {user?.languages.map((value, index) => (
                          <p className='text-[.9rem] relative' key={index}>{value}</p>
                        ))}
                      </div>
                    </div>
                    <div className='flex my-1 text-[1.1rem] gap-4 items-center'>
                      <p className='text-gray-900 dark:text-gray-200 font-medium'>Standards</p>
                      <div className='flex gap-2'>

                        {user?.standards.map((value, index) => (
                          <p className='text-[.9rem] relative' key={index}>{value}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  :
                  <div>
                    <div className='flex my-1 text-[1.1rem] gap-4 items-center'>
                      <p className='text-gray-900 dark:text-gray-200 font-medium'>Goals</p>
                      <p className='text-[.9rem] relative'>{user?.goals}</p>
                    </div>
                    <div className='flex my-1 text-[1.1rem] gap-4 items-center'>
                      <p className='text-gray-900 dark:text-gray-200 font-medium'>Board</p>
                      <p className='text-[.9rem] relative'>{user?.board}</p>
                    </div>
                  </div>


                }
                <div className='mt-5 text-[1.1rem]'>
                  <Divider />
                  <p className='font-semibold text-[1.5rem]'>About</p>
                  <p className='w-[35rem] font-medium leading-7 overflow-hidden'>{user?.about}
                  </p>
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
        {user?.isTeacher &&
          <div className='mt-[1rem]'>

            <PricingCard />
          </div>
        }

      </div>
    </>
  )
}

export default Profile
