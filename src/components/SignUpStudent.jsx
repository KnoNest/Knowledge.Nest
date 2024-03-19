import React, { useState } from 'react';
import { 
    BreadcrumbItem, 
    Breadcrumbs, 
    Button, 
    Input, 
    Modal, 
    ModalContent, 
    ModalBody, 
    ModalFooter, 
    useDisclosure 
} from '@nextui-org/react';
import useStudentApi from '@/fetchApi/useStudentApi';
import { redirect } from 'next/navigation'
import toast from 'react-hot-toast';

const SignUpStudent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        username: '',
        phoneNumber: '',
        board: ''
    });
    const [about, setAbout] = useState(false);
    const [isVisible, setIsVisible] = useState(false)
    const [otpInput, setOtpInput] = useState('');
    const [otp, setOtp] = useState('');
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { signup } = useStudentApi();

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleNext = () => {
        if (![formData.firstName, formData.lastName, formData.email, formData.phoneNumber].every(Boolean)) {
            toast.error('Please fill every field first');
            return;
        }
        setAbout(!about);
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
            const res = await signup(formData);
            redirect('/')

        } catch (error) {
            toast.error(error.message || 'Something went wrong while signup');
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
                <BreadcrumbItem onClick={() => about && handleNext()} className='outline-none border-none'>
                    Welcome Student
                </BreadcrumbItem>
                {about && <BreadcrumbItem>About</BreadcrumbItem>}
            </Breadcrumbs>
            <div className='h-[18rem]'>
                {!about ? (
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-5'>
                            <Input
                                type='text'
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleInputChange}
                                label='First Name'
                                radius='lg'
                                variant='bordered'
                                className='text-white'
                            />
                            <Input
                                type='text'
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleInputChange}
                                label='Last Name'
                                radius='lg'
                                variant='bordered'
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
                            variant='bordered'
                            className='text-white'
                        />
                        <Input
                            type='text'
                            name='phoneNumber'
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            label='Number with Country code'
                            radius='lg'
                            variant='bordered'
                            className='text-white'
                        />
                        <Button onClick={handleNext} className='w-full bg-transparent text-white font-semibold border-1 border-gray-700'>
                            Next
                        </Button>
                    </div>
                ) : (
                    <div className='flex flex-col gap-4 animate-authmotion items-center'>
                        <input
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder='Username'
                            className='py-[.8rem] px-[1rem] text-white w-full rounded-[1.1rem] outline-none bg-black'
                        />
                        <input
                            type='text'
                            name='board'
                            value={formData.board}
                            placeholder='Board'
                            onChange={handleInputChange}
                            className='py-[.8rem] px-[1rem] w-[20rem] rounded-[1.1rem] outline-none bg-black text-white'
                        />
                        <div className='flex justify-center items-center w-full'>

                        <input
                            type={isVisible ? "text" : "password"}
                            name='password'
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder='Password'
                            className='py-[.8rem] px-[1rem] text-white w-full rounded-[1.1rem] outline-none bg-black'
                        />
                        <p onClick={toggleVisibility} className='relative right-[2rem] cursor-pointer'>{isVisible ? "hide" : "show"}</p>
                        </div>
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

export default SignUpStudent;
