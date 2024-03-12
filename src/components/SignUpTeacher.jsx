"use client"
import { BreadcrumbItem, Breadcrumbs, Button, Input, ScrollShadow } from '@nextui-org/react'
import React, { useState } from 'react'

const SignUpTeacher = () => {
    const [home, setHome] = useState(false)
    const [about, setAbout] = useState(false)
    const [expertiesValue, setExpertiesValue] = useState("")
    const [experties, setExperties] = useState([])

    const changeAbout = () => {
        setHome(!home)
        setAbout(!about)
    }
    const addExperties = () => {
        if (expertiesValue.trim() !== "") {
            setExperties(prevExperties => [...prevExperties, expertiesValue]);
            setExpertiesValue("");
        }
    }

    const removeExperties = (index) => {
        setExperties(prevExperties => prevExperties.filter((_, i) => i !== index));
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addExperties();
        }
    }

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
                        Welcome Tutor
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
                                    label='First Name'
                                    radius='lg'
                                    variant={"bordered"}
                                    className='text-white'
                                />
                                <Input
                                    type='text'
                                    label='Last Name'
                                    radius='lg'
                                    variant={"bordered"}
                                    className='text-white'
                                />
                            </div>
                            <Input
                                type='email'
                                label='Email'
                                radius='lg'
                                variant={"bordered"}
                                className='text-white'
                            />
                            <Input
                                type='text'
                                label='Number with Country code'
                                radius='lg'
                                variant={"bordered"}
                                className='text-white'

                            />
                            <Button onClick={(changeAbout)} className='w-full bg-transparent text-white font-semibold border-1 border-gray-700' >Next</Button>
                        </div>
                        :

                        <div className='flex flex-col gap-2 animate-authmotion'>
                            <div className='flex gap-2'>
                                <div className='flex items-center gap-1'>

                                    <input
                                        type='text'
                                        value={expertiesValue}
                                        onChange={(e) => setExpertiesValue(e.target.value)}
                                        onKeyDown={handleKeyPress}
                                        placeholder='Expertise eg: Science, Maths'
                                        className='py-[.8rem] px-[1rem] w-[20rem] rounded-l-[1.1rem] outline-none bg-black text-white'
                                    />
                                    <Button className='font-medium bg-black shadow-[1rem_1rem_25rem_1rem_rgb(52,200,128)] py-[1.5rem] outline-none border-none rounded-l-none bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent' onClick={addExperties}>Add</Button>
                                </div>
                            </div>

                            <ScrollShadow className='w-full h-[6rem] bg-black rounded-[.7rem] mt-[1rem]'>
                                <div className='flex gap-2 w-full flex-wrap'>
                                    {experties.map((item, index) => (
                                        <div key={index} className="flex gap-2 mt-2 bg-gray-900/50 rounded-[1rem] py-[.2em] px-[.5rem] ">
                                            <div className={`border-1 border-gray-900 text-white text-center py-[.2rem] px-[1rem] rounded-[1rem]`}>
                                                <p className='text-center w-full h-full'>{item}</p>
                                            </div>
                                            <button className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" onClick={() => removeExperties(index)}>X</button>
                                        </div>
                                    ))}
                                </div>
                            </ScrollShadow>
                            <input
                                type='text'
                                // value={expertiesValue}
                                // onChange={(e) => setExpertiesValue(e.target.value)}
                                placeholder='Experience time'
                                className='py-[.8rem] px-[1rem] text-white w-full rounded-[1.1rem] outline-none bg-black '
                            />


                            <Button onClick={(changeAbout)} className='w-full bg-transparent text-white font-semibold border-1 border-gray-700' >Departure</Button>
                        </div>

                    }
                </div>
            </div>
        </>
    )
}

export default SignUpTeacher
