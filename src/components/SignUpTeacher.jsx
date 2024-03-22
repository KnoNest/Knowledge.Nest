"use client"
import React, { useMemo, useState } from 'react';
import { BreadcrumbItem, Breadcrumbs, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ScrollShadow, useDisclosure } from '@nextui-org/react';
import toast from 'react-hot-toast';
import useTeacherApi from '@/fetchApi/useTeacherApi';
import { useRouter } from 'next/navigation';

const SignUpTeacher = () => {
    const router = useRouter()
    const {signup} = useTeacherApi()
    const [experienceKeys, setExperienceKeys] = useState(new Set(["Select Experience"]));
    const [otpInput, setOtpInput] = useState('');
    const [otp, setOtp] = useState('');
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [about, setAbout] = useState(false);
    const [isVisible, setIsVisible] = useState(false)
    const [expertiesValue, setExpertiesValue] = useState('');
    const [experties, setExperties] = useState([]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        username: '',
        phoneNumber: '',
        board: '',
        timeOfExperience: ""
    });

    const selectedExperience = useMemo(
        () => {
            const experienceValue = Array.from(experienceKeys).join(", ").replaceAll("_", " ");
            if (experienceValue !== "Select Experience") { 
                setFormData(prevState => ({
                    ...prevState,
                    timeOfExperience: experienceValue
                }));
            }
            return experienceValue;
        },
        [experienceKeys]
    );

    const toggleVisibility = () => setIsVisible(!isVisible);

    const changeAbout = () => {
        if (![formData.firstName, formData.lastName, formData.email, formData.phoneNumber, formData.password, formData.username].every(Boolean)) {
            toast.error('Please fill every field first');
            return;
        }
        setAbout(!about);
    };

    const addExperties = () => {
        if (expertiesValue.trim() !== '') {
            setExperties(prevExperties => [...prevExperties, expertiesValue]);
            setExpertiesValue('');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleOTP = async () => { 
        onOpen();
        try {
            const res = await fetch("/api/mail/otp-verification", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: formData.email })
            });
            const data = await res.json()

            if (data.error) {
                toast.error(data.error || 'Failed to send OTP');
                return;
            }
            toast.success('OTP sent successfully');
            setOtp(data.otp);
        } catch (error) {
            console.error(error.message || 'Something went wrong while sending OTP');
        }
    };

    const handleSignup = async () => {
        if (otp !== otpInput) {
            toast.error('Invalid OTP');
            return;
        }
        try {
            const res = await signup(formData, experties);
            if (res.error) {
                toast.error(res.error)
            }
            router.push('/')

        } catch (error) {
            toast.error(error.message || 'Something went wrong while signup');
        }
    };


    const removeExperties = (index) => {
        setExperties(prevExperties => prevExperties.filter((_, i) => i !== index));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addExperties();
        }
    };

    return (
        <div className='flex flex-col gap-8 w-[25rem] items-center'>
            <h1 className='text-white font-medium text-[1.2rem]'>Sign Up</h1>
            <Breadcrumbs
                itemClasses={{
                    item: 'text-white/60 data-[current=true]:text-white',
                    separator: 'text-white/40',
                }}>
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
                {!about ? (
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-5'>
                            <Input
                                type='text'
                                name='firstName'
                                label='First Name'
                                value={formData.firstName}
                                onChange={handleInputChange}
                                radius='lg'
                                variant='bordered'
                                className='text-white'
                            />
                            <Input
                                type='text'
                                name='lastName'
                                label='Last Name'
                                value={formData.lastName}
                                onChange={handleInputChange}
                                radius='lg'
                                variant='bordered'
                                className='text-white'
                            />
                        </div>
                        <div className='flex gap-5'>
                            <Input
                                type='text'
                                name='username'
                                label='Username'
                                value={formData.username}
                                onChange={handleInputChange}
                                radius='lg'
                                variant='bordered'
                                className='text-white'
                            />
                            <Input
                                name='password'
                                label='Password'
                                value={formData.password}
                                onChange={handleInputChange}
                                radius='lg'
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                        {isVisible ? "hide" : "show"}
                                    </button>
                                }
                                type={isVisible ? "text" : "password"}
                                variant='bordered'
                                className='text-white'
                            />
                        </div>
                        <Input
                            type='email'
                            name='email'
                            label='Email'
                            value={formData.email}
                            onChange={handleInputChange}
                            radius='lg'
                            variant='bordered'
                            className='text-white'
                        />
                        <Input
                            type='text'
                            name='phoneNumber'
                            label='Number with Country code'
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            radius='lg'
                            variant='bordered'
                            className='text-white'
                        />
                        <Button onClick={changeAbout} className='w-full bg-transparent text-white font-semibold border-1 border-gray-700'>
                            Next
                        </Button>
                    </div>
                ) : (
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
                                <Button className='font-medium bg-black shadow-[1rem_1rem_25rem_1rem_rgb(52,200,128)] py-[1.5rem] outline-none border-none rounded-l-none bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent' onClick={addExperties}>
                                    Add
                                </Button>
                            </div>
                        </div>
                        <ScrollShadow className='w-full h-[6rem] bg-black rounded-[.7rem] mt-[1rem]'>
                            <div className='flex gap-2 w-full flex-wrap'>
                                {experties.map((item, index) => (
                                    <div key={index} className='flex gap-2 mt-2 bg-gray-900/50 rounded-[1rem] py-[.2em] px-[.5rem]'>
                                        <div className='border-1 border-gray-900 text-white text-center py-[.2rem] px-[1rem] rounded-[1rem]'>
                                            <p className='text-center w-full h-full'>{item}</p>
                                        </div>
                                        <button className='bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent' onClick={() => removeExperties(index)}>
                                            X
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </ScrollShadow>
                        <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            className="capitalize bg-white dark:bg-black border-1 border-gray-600 rounded-[1rem]  w-[14rem] font-medium"
                                        >
                                            {selectedExperience}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="Single selection example"
                                        variant="flat"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={experienceKeys}
                                        onSelectionChange={setExperienceKeys}
                                    >
                                        <DropdownItem key="1 Year">1 Year</DropdownItem>
                                        <DropdownItem key="2 Year">2 Year</DropdownItem>
                                        <DropdownItem key="3 Year">3 Year</DropdownItem>
                                        <DropdownItem key="4 Year">4 Year</DropdownItem>
                                        <DropdownItem key="5 Year">5 Year</DropdownItem>
                                        <DropdownItem key="5+ Year">5+ Year</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                        <Button onClick={handleOTP} className='w-full bg-transparent text-white font-semibold border-1 border-gray-700'>
                            Departure
                        </Button>
                    </div>
                )}
                <Modal
                    backdrop='opaque'
                    className='w-[20rem] bg-black'
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement='top-center'>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalBody>
                                    <div className='w-full font-semibold flex justify-center'>
                                        <div className='flex flex-col'>
                                            <p className='text-[1.5rem]'>Enter OTP</p>
                                            <p>sent to email</p>
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-center items-center'>
                                        <input
                                            value={otpInput}
                                            className='text-[2rem] rounded-[1rem] bg-black p-1 outline-none border-1 border-green-400 w-[78%]'
                                            onChange={(e) => setOtpInput(e.target.value)}
                                        />
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color='primary' onClick={handleOTP} className='w-full border-1 border-green-400 bg-black'>
                                        Resend OTP
                                    </Button>
                                    <Button color='primary' onClick={handleSignup} className='w-full border-1 border-green-400 bg-black'>
                                        Sign Up
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </div>
    );
};

export default SignUpTeacher;
