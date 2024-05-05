import Image from 'next/image'
import React from 'react'
import advisory from "../../public/advisor.png"
import Link from 'next/link'


const BoardAdvisory = () => {
  return (
    <>
      <div className='w-[30rem] m-auto'>

        <div className='flex gap-2 mb-3'>

          <Image src={advisory} alt="adivsory image" width={200} height={200} className='w-[4rem] h-[4rem] rounded-full' />
          <div className='ml-[1rem] text-[1.2rem] font-medium'>
            <p>Rachna tulsyan Bhimrajka</p>
            <p>Board of advisory</p>
          </div>

        </div>
        <p className='text-gray-500'>Ms. Rachna Bhimrajka founder and Chairperson of Global Educators Fraternity and FUN2LEARN is a dynamic, enthusiastic, innovative ... <Link href="/advisory" className='text-blue-700'>Read more</Link></p>
      </div>
    </>
  )
}

export default BoardAdvisory