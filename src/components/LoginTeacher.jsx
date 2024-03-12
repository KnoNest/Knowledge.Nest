"use client"
import {Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'

const LoginTeacher = () => {


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // addExperties();
        }
    }

    return (
        <>
            <div className='flex flex-col gap-8 w-[25rem] items-center'>
                <h1 className='text-white font-medium text-[1.2rem]'>Log In</h1>
                
                <div className='h-[18rem] animate-authmotion'>

                        <div className='flex flex-col gap-6 w-[20rem]'>
                            
                            <Input
                                type='text'
                                label='Email or username'
                                radius='lg'
                                variant={"bordered"}
                                className='text-white'
                            />
                            <Input
                                type='text'
                                label='Password'
                                radius='lg'
                                variant={"bordered"}
                                className='text-white'

                            />
                            <Button onKeyDown={handleKeyPress} onClick={""}  className='w-full bg-transparent text-white font-semibold border-1 border-gray-700' >Login</Button>
                        </div>
                        
                </div>
            </div>
        </>
    )
}

export default LoginTeacher
