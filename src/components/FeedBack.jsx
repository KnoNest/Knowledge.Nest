import { Avatar } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const FeedBack = ({data}) => {
  return (
    <>
    <Link href={`/profile/user/${"id"}`}>

     <div className='h-[12rem] w-[44rem] border-1 border-gray-300 rounded-[1.2rem]'>
              <div className='flex items-center h-full w-full gap-[4rem]'>
                <div className='relative left-6 flex gap-2 items-center'>

                  <Avatar src='' alt='' className='w-[4rem] h-[4rem]' />
                  <div>
                    <p className='font-medium text-[1rem]'>username</p>
                    <p className='font-medium text-[1rem]'>full name</p>

                  </div>
                </div>
                <div className='w-[65%]'>
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
