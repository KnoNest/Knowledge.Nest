"use client"
import useTeacherApi from '@/fetchApi/useTeacherApi'
import { Button, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const LoginTeacher = () => {

    const router = useRouter()
    const [formData, setFormData] = useState({
        credentials: '',
        password: ''
    });
    const { login } = useTeacherApi();

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogin = async () => {
        if (!formData.credentials || !formData.password) {
            toast.error('Fill up all the fields');
            return;
        }
        try {
            const res = await login(formData);
            if (res.error) {
             return 
            }
            router.push('/');
        } catch (error) {
            return
            // toast.error(error.message || 'Something went wrong while logging in');
        }
    };


    return (
        <>
            <div className='flex flex-col gap-8 w-[25rem] items-center'>
                <h1 className='text-white font-medium text-[1.2rem]'>Log In</h1>

                <div className='h-[18rem] animate-authmotion'>

                    <div className='flex flex-col gap-6 w-[20rem]'>

                        <Input
                            type='text'
                            name='credentials'
                            onChange={handleInputChange}
                            label='Email or username'
                            radius='lg'
                            variant={"bordered"}
                            className='text-white'
                        />
                        <Input
                            type={isVisible ? "text" : "password"}
                            onChange={handleInputChange}
                            label='Password'
                            radius='lg'
                            variant={"bordered"}
                            className='text-white'
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                  {isVisible ? (
                                    <p>hide</p>
                                  ) : (
                                    <p>show</p>
                                    
                                  )}
                                </button>
                              }

                        />
                        <Button onKeyDown={handleKeyPress} onClick={handleLogin} className='w-full bg-transparent text-white font-semibold border-1 border-gray-700' >Login</Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LoginTeacher
