import { Avatar } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const FeedBack = ({data}) => {
  return (
    <>
    <Link href={`/profile/user/${"id"}`}>

     <div className='md:h-[12rem] h-[20rem] md:w-[44rem] w-[24rem] border-1 border-gray-300 rounded-[1.2rem]'>
              <div className='flex md:flex-row flex-col items-center h-full w-full gap-[4rem]'>
                <div className='relative md:left-6 top-3 md:top-0 flex gap-2 items-center'>

                  <Avatar src='' alt='' className='w-[4rem] h-[4rem]' />
                  <div>
                    <p className='font-medium text-[1rem]'>username</p>
                    <p className='font-medium text-[1rem]'>full name</p>

                  </div>
                </div>
                <div className='md:w-[30rem] w-[20rem]'>
                  <p>Meri Ek taang nakli hai, Mai hockey ka bohoth bada khiladi tha.
                    Ek din Uday bhai ko meri kisi baat pe gussa aagaya aur mere he hockey se meri taang ke do tukde kar diye.
                    Lekin dil ke bohot ache hai, Fauran mujhe hospital le gaye aur ye nakli taang lagwayi lorem...</p>
                </div>

              </div>
            </div> 
    </Link>
    </>
  )
}

export default FeedBack
