"use client"
import { BreadcrumbItem, Breadcrumbs, Button, Input} from '@nextui-org/react'
import React, { useState } from 'react'

const SignUpStudent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        board: "",
        goals: ""
    });
    const [about, setAbout] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const changeAbout = () => {
        setAbout(!about);
    }

    const handleNext = () => {
        changeAbout();
    }

    console.log(formData)

    return (
        <>
            <div className='flex flex-col gap-8 w-[25rem] items-center'>
                <h1 className='text-white font-medium text-[1.2rem]'>Sign Up</h1>
                <Breadcrumbs
                    itemClasses={{
                        item: "text-white/60 data-[current=true]:text-white",
                        separator: "text-white/40",
                    }}
                >
                    <BreadcrumbItem onClick={() => {
                        if (about) {
                            changeAbout();
                        }
                    }} className='outline-none border-none'>
                        Welcome Student
                    </BreadcrumbItem>
                    {about && <BreadcrumbItem>About</BreadcrumbItem>}
                </Breadcrumbs>
                <div className='h-[18rem]'>

                    {!about
                        ?
                        <div className='flex flex-col gap-6'>
                            <div className='flex gap-5'>
                                <Input
                                    type='text'
                                    name='firstName'
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    label='First Name'
                                    radius='lg'
                                    variant={"bordered"}
                                    className='text-white'
                                />
                                <Input
                                    type='text'
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    label='Last Name'
                                    radius='lg'
                                    variant={"bordered"}
                                    className='text-white'
                                />
                            </div>
                            <Input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                label='Email'
                                radius='lg'
                                variant={"bordered"}
                                className='text-white'
                            />
                            <Input
                                type='text'
                                name='phoneNumber'
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                label='Number with Country code'
                                radius='lg'
                                variant={"bordered"}
                                className='text-white'

                            />
                            <Button onClick={handleNext} className='w-full bg-transparent text-white font-semibold border-1 border-gray-700' >Next</Button>
                        </div>
                        :

                        <div className='flex flex-col gap-5 animate-authmotion'>
                            <div className='flex gap-2'>
                                <div className='flex items-center gap-1'>

                                    <input
                                        type='text'

                                        // onKeyDown={handleKeyPress}
                                        placeholder='Board'
                                        className='py-[.8rem] px-[1rem] w-[20rem] rounded-[1.1rem] outline-none bg-black text-white'
                                    />

                                </div>
                            </div>


                            <input
                                type='text'
                                placeholder='Goals (optional)'
                                className='py-[.8rem] px-[1rem] text-white w-full rounded-[1.1rem] outline-none bg-black'
                            />


                            <Button onClick={handleNext} className='w-full bg-transparent text-white font-semibold border-1 border-gray-700' >Departure</Button>
                        </div>

                    }
                </div>
            </div>
        </>
    )
}

export default SignUpStudent
