"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import LoginStudent from '@/components/LoginStudent';
import LoginTeacher from '@/components/LoginTeacher';

const Login = () => {
  const [isTeacher, setIsTeacher] = useState(false);

  return (
    <div>
      <div className='w-full h-screen flex-col justify-evenly items-center '>
        <div className='w-full flex justify-center relative top-[3rem] gap-3'>

          <button onClick={() => setIsTeacher(prevState => !prevState)} className='bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-bold'>
            {isTeacher ? 'LOGIN AS STUDENT' : 'LOGIN AS TEACHER'}
          </button>
          <Button as={Link} href={'/auth/signup'} className='bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-bold'>
            (Don't have an acc?)
          </Button>
        </div>
        <div className='flex justify-center items-center h-full gap-[8rem]'>


        {isTeacher 
        ? 

          <LoginTeacher /> 

        : 

          <LoginStudent />
          }

        </div>

      </div>
    </div>
  );
}

export default Login;
