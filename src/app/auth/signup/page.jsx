"use client"
import SignUpTeacher from '@/components/SignUpTeacher.jsx';
import SignUpStudent from '@/components/SignUpStudent.jsx';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';

const Signup = () => {
  const [isTeacher, setIsTeacher] = useState(false);

  return (
    <div >
      <div className='w-full flex-col justify-evenly h-screen items-center '>
        <div className='w-full flex justify-center relative top-[3rem]'>

          <button onClick={() => setIsTeacher(prevState => !prevState)} className='bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-bold'>
            {isTeacher ? 'SIGNUP AS STUDENT' : 'SIGNUP AS TEACHER'}
          </button>
          <Button as={Link} href={'/auth/login'} className='bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-bold'>
            (Already have an acc?)
          </Button>
        </div>
        <div className='flex justify-center items-center h-full gap-[8rem]'>


        {isTeacher 
        ? 
        <div className='flex  gap-[8rem] animate-authmotion'>
          <div className='lg:w-[25rem] md:w-[5rem] md:flex hidden animate-authmotion duration-400  delay-1000 h-[25rem] shadow-[1rem_1rem_25rem_1rem_rgb(52,200,128)] rounded-[3.5rem] bg-gradient-to-br from-green-400 to-cyan-300'></div>

          <SignUpTeacher /> 
        </div>

        : 
        <div className='flex  gap-[8rem] animate-authmotion'>
          <div className='lg:w-[25rem] md:w-[5rem] md:flex hidden animate-authmotion delay-1000 h-[25rem] duration-400 shadow-[1rem_1rem_25rem_1rem_rgb(52,200,128)] rounded-[1.5rem] bg-gradient-to-br from-cyan-400 to-green-300'></div>
          <SignUpStudent />
          </div>
          }

        </div>

        {/* Example of how to toggle between Teacher and Student sign-up */}
      </div>
    </div>
  );
}

export default Signup;
