"use client";
import useStudentApi from '@/fetchApi/useStudentApi';
import useTeacherApi from '@/fetchApi/useTeacherApi';
import usePreviewImg from '@/utils/usePreviewImage';
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Modal, ModalBody, ModalContent, ModalFooter, ScrollShadow, Spinner, useDisclosure } from '@nextui-org/react';
import { useParams } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const UpdateProfile = () => {
    const user = useSelector(state => state.user.userData)
    const fileRef = useRef(null)
    const { handleImageChange, imgUrl } = usePreviewImg()
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { id } = useParams()
    const [experienceKeys, setExperienceKeys] = useState(new Set(["Select Experience"]));
    const [otpInput, setOtpInput] = useState('');
    const [otp, setOtp] = useState('');
    const { updateTeacher } = useTeacherApi()
    const { updateStudent } = useStudentApi()
    const [expertiseValue, setExpertiseValue] = useState('');
    const [expertise, setExpertise] = useState(user?.experties);
    const [availabilityValue, setAvailabilityValue] = useState('');
    const [availability, setAvailability] = useState(user?.availability?.length > 0 ? user?.availability : []);
    const [achievementsValue, setAchievementsValue] = useState('');
    const [achievements, setAchievements] = useState(user?.experienceDetails?.achievements?.length > 0 ? user?.experienceDetails?.achievements : []);
    const [languagesValue, setLanguagessValue] = useState('');
    const [languages, setLanguages] = useState(user?.languages?.length > 0 ? user?.languages : []);
    const [standardsValue, setStandardsValue] = useState('');
    const [standards, setStandards] = useState(user?.standards?.length > 0 ? user?.standards : []);

    const [formData, setFormData] = useState({
        username: user?.username,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        newPassword: '',
        confirmPassword: '',
        experience: "",
        capacity: user?.capacity,
        about: user?.about,
        goals: user?.goals ? user?.goals : "",
        board: user?.board
    });

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            capacity: user.capacity,
            about: user.about,
            goals: user.goals || "",
            board: user.board
        }));

        setExpertise(user?.experties || []);
        setAvailability(user?.availability || []);
        setAchievements(user?.experienceDetails?.achievements || []);
        setLanguages(user?.languages || []);
        setStandards(user?.standards || []);
    }, [user]);


    const selectedExperience = useMemo(
        () => {
            const experienceValue = Array.from(experienceKeys).join(", ").replaceAll("_", " ");
            if (experienceValue !== "Select Experience") {
                setFormData(prevState => ({
                    ...prevState,
                    experience: experienceValue
                }));
            }
            return experienceValue;
        },
        [experienceKeys]
    );

    let avatar = imgUrl || user?.avatar

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const addExpertise = () => {
        if (expertiseValue.trim() !== '') {
            setExpertise(prevExpertise => [...prevExpertise, expertiseValue]);
            setExpertiseValue('');
        }
    };

    const removeExpertise = (index) => {
        setExpertise(prevExpertise => prevExpertise.filter((_, i) => i !== index));
    };
    const removeAchivements = (index) => {
        setAchievements(prevExpertise => prevExpertise.filter((_, i) => i !== index));
    };


    const addAvailability = () => {
        if (availabilityValue.trim() !== '') {
            setAvailability(prevAvailability => [...prevAvailability, availabilityValue]);
            setAvailabilityValue('');
        }
    };
    const addStandard = () => {
        if (standardsValue.trim() !== '') {
            setStandards(prevStandards => [...prevStandards, standardsValue]);
            setStandardsValue('');
        }
    };
    const addLanguage = () => {
        if (languagesValue.trim() !== '') {
            setLanguages(prevlanguages => [...prevlanguages, languagesValue]);
            setLanguagessValue('');
        }
    };
    const addAchivements = () => {
        if (achievementsValue.trim() !== '') {
            setAchievements(prevAchievements => [...prevAchievements, achievementsValue]);
            setAchievementsValue('');
        }
    };

    const removeAvailability = (index) => {
        setAvailability(prevAchievements => prevAchievements.filter((_, i) => i !== index));
    };
    const removeStandards = (index) => {
        setStandards(prevStandards => prevStandards.filter((_, i) => i !== index));
    };
    const removeLanguage = (index) => {
        setLanguages(prevLanguages => prevLanguages.filter((_, i) => i !== index));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addExpertise();
        }
    };

    const handleKeyPressForAvailability = (e) => {
        if (e.key === 'Enter') {
            addAvailability();
        }
    };
    const handleKeyPressForLanguage = (e) => {
        if (e.key === 'Enter') {
            addLanguage();
        }
    };
    const handleKeyPressForStandards = (e) => {
        if (e.key === 'Enter') {
            addStandard();
        }
    };
    const handleKeyPressForAchivements = (e) => {
        if (e.key === 'Enter') {
            addAchivements();
        }
    };

    const handleOTP = async () => {
        if (![username, firstName, lastName, email, phoneNumber,]) {
            return toast.error("Important field can not be empty")
        }
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


    const handleSubmit = () => {

        if (user?.email !== formData.email) {
            if (otp !== otpInput) {
                toast.error('Invalid OTP');
                return;
            }
        }
        if (formData.password) {
            if (formData.password !== formData.confirmPassword) {
                return toast.error("password mismatch")
            }
        }
        if (user?.isTeacher) {
            updateTeacher(formData, expertise, availability, achievements, languages, standards, avatar, id)
        } else {
            console.log()
            updateStudent(formData, id, avatar)
        }
    };

    if (!user._id) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <Spinner size='lg' />
            </div>
        );
    }

    return (
        <>
            <div className='w-full mt-[3rem]'>
                <div className='flex gap-[10rem] ml-[5rem]'>
                    <div className='flex flex-col items-center gap-3'>
                        <Avatar className='w-[7rem] h-[7rem]' src={imgUrl || user?.avatar} />
                        <Button w="full" onClick={() => fileRef.current.click()}>Change Avatar</Button>
                        <input
                            type='file'
                            className='hidden'
                            ref={fileRef}
                            onChange={handleImageChange}

                        />
                    </div>
                    <div className='flex flex-col gap-[1rem]'>
                        <div className='flex flex-col gap-[1rem]'>
                            <label>Username</label>
                            <input
                                type='text'
                                name='username'
                                value={formData.username}
                                onChange={handleInputChange}
                                className='update-input'
                            />
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex flex-col gap-[1rem]'>
                                <label>First Name</label>
                                <input
                                    type='text'
                                    name='firstName'
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className='update-input'
                                />
                            </div>
                            <div className='flex flex-col gap-[1rem]'>
                                <label>Last Name</label>
                                <input
                                    type='text'
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className='update-input'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[1rem]'>
                            <label>Email</label>
                            <input
                                type='text'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                className='update-input'
                            />
                        </div>
                        <div className='flex flex-col gap-[1rem]'>
                            <label>Phone Number</label>
                            <input
                                type='text'
                                name='phoneNumber'
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className='update-input'
                            />
                        </div>
                        <div className='flex flex-col gap-[1rem]'>
                            <label>New Password</label>
                            <input
                                type='password'
                                name='newPassword'
                                value={formData.newPassword}
                                onChange={handleInputChange}
                                className='update-input'
                            />
                        </div>
                        <div className='flex flex-col gap-[1rem]'>
                            <label>Confirm Password</label>
                            <input
                                type='password'
                                name='confirmPassword'
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className='update-input'
                            />
                        </div>
                        {user?.isTeacher
                            ?
                            <div className='flex flex-col gap-[1rem]'>

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
                                <div className='flex flex-col gap-[1rem]'>
                                    <label>Capacity</label>
                                    <input
                                        type='text'
                                        name='capacity'
                                        value={formData.capacity}
                                        onChange={handleInputChange}
                                        className='update-input'
                                    />
                                </div>
                                <div>
                                    <div className='flex flex-col gap-2'>
                                        <label>Languages</label>
                                        <div className='flex items-center gap-[1rem]'>
                                            <input
                                                type='text'
                                                value={languagesValue}
                                                onChange={(e) => setLanguagessValue(e.target.value)}
                                                onKeyDown={handleKeyPressForLanguage}
                                                placeholder='eg: English, Hindi, German'
                                                className='update-input'
                                            />
                                            <Button className='font-medium bg-gray-900 outline-none border-none' onClick={addLanguage}>
                                                Add
                                            </Button>
                                        </div>
                                    </div>
                                    <ScrollShadow className='w-[30rem] h-[6rem] bg-black rounded-[.7rem] mt-[1rem] border-1 border-white'>
                                        <div className='flex gap-2 w-full flex-wrap'>
                                            {languages?.map((item, index) => (
                                                <div key={index} className='flex gap-2 mt-2 bg-gray-900/50 rounded-[1rem] py-[.2em] px-[.5rem]'>
                                                    <div className='border-1 border-gray-900 text-white text-center py-[.2rem] px-[1rem] rounded-[1rem]'>
                                                        <p className='text-center w-full h-full'>{item}</p>
                                                    </div>
                                                    <button className='bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent' onClick={() => removeLanguage(index)}>
                                                        X
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollShadow>
                                </div>
                                <div>
                                    <div className='flex flex-col gap-2'>
                                        <label>Standards</label>
                                        <div className='flex items-center gap-[1rem]'>
                                            <input
                                                type='text'
                                                value={standardsValue}
                                                onChange={(e) => setStandardsValue(e.target.value)}
                                                onKeyDown={handleKeyPressForStandards}
                                                placeholder='eg: 12th, 10th'
                                                className='update-input'
                                            />
                                            <Button className='font-medium bg-gray-900 outline-none border-none' onClick={addStandard}>
                                                Add
                                            </Button>
                                        </div>
                                    </div>
                                    <ScrollShadow className='w-[30rem] h-[6rem] bg-black rounded-[.7rem] mt-[1rem] border-1 border-white'>
                                        <div className='flex gap-2 w-full flex-wrap'>
                                            {standards?.map((item, index) => (
                                                <div key={index} className='flex gap-2 mt-2 bg-gray-900/50 rounded-[1rem] py-[.2em] px-[.5rem]'>
                                                    <div className='border-1 border-gray-900 text-white text-center py-[.2rem] px-[1rem] rounded-[1rem]'>
                                                        <p className='text-center w-full h-full'>{item}</p>
                                                    </div>
                                                    <button className='bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent' onClick={() => removeStandards(index)}>
                                                        X
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollShadow>
                                </div>
                                <div>
                                    <div className='flex flex-col gap-2'>
                                        <label>Achievements</label>
                                        <div className='flex items-center gap-[1rem]'>
                                            <input
                                                type='text'
                                                value={achievementsValue}
                                                onChange={(e) => setAchievementsValue(e.target.value)}
                                                onKeyDown={handleKeyPressForAchivements}
                                                placeholder='eg: Studied black holes'
                                                className='update-input'
                                            />
                                            <Button className='font-medium bg-gray-900 outline-none border-none' onClick={addAchivements}>
                                                Add
                                            </Button>
                                        </div>
                                    </div>
                                    <ScrollShadow className='w-[30rem] h-[6rem] bg-black rounded-[.7rem] mt-[1rem] border-1 border-white'>
                                        <div className='flex gap-2 w-full flex-wrap'>
                                            {achievements?.map((item, index) => (
                                                <div key={index} className='flex gap-2 mt-2 bg-gray-900/50 rounded-[1rem] py-[.2em] px-[.5rem]'>
                                                    <div className='border-1 border-gray-900 text-white text-center py-[.2rem] px-[1rem] rounded-[1rem]'>
                                                        <p className='text-center w-full h-full'>{item}</p>
                                                    </div>
                                                    <button className='bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent' onClick={() => removeAchivements(index)}>
                                                        X
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollShadow>
                                </div>
                                <div>
                                    <div className='flex flex-col gap-2'>
                                        <label>Availability Days</label>
                                        <div className='flex items-center gap-[1rem]'>
                                            <input
                                                type='text'
                                                value={availabilityValue}
                                                onChange={(e) => setAvailabilityValue(e.target.value)}
                                                onKeyDown={handleKeyPressForAvailability}
                                                placeholder='eg: mon, wed, tue'
                                                className='update-input'
                                            />
                                            <Button className='font-medium bg-gray-900 outline-none border-none' onClick={addAvailability}>
                                                Add
                                            </Button>
                                        </div>
                                    </div>
                                    <ScrollShadow className='w-[30rem] h-[6rem] bg-black rounded-[.7rem] mt-[1rem] border-1 border-white'>
                                        <div className='flex gap-2 w-full flex-wrap'>
                                            {availability?.map((item, index) => (
                                                <div key={index} className='flex gap-2 mt-2 bg-gray-900/50 rounded-[1rem] py-[.2em] px-[.5rem]'>
                                                    <div className='border-1 border-gray-900 text-white text-center py-[.2rem] px-[1rem] rounded-[1rem]'>
                                                        <p className='text-center w-full h-full'>{item}</p>
                                                    </div>
                                                    <button className='bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent' onClick={() => removeAvailability(index)}>
                                                        X
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollShadow>
                                </div>
                                <div>
                                    <div className='flex flex-col gap-2'>
                                        <label>Expertise</label>
                                        <div className='flex items-center gap-[1rem]'>
                                            <input
                                                type='text'
                                                value={expertiseValue}
                                                onChange={(e) => setExpertiseValue(e.target.value)}
                                                onKeyDown={handleKeyPress}
                                                placeholder='Expertise eg: Science, Maths'
                                                className='update-input'
                                            />
                                            <Button className='font-medium bg-gray-900 outline-none border-none' onClick={addExpertise}>
                                                Add
                                            </Button>
                                        </div>
                                    </div>
                                    <ScrollShadow className='w-[30rem] h-[8rem] bg-black rounded-[.7rem] mt-[1rem] border-1 border-white'>
                                        <div className='flex gap-2 w-full flex-wrap'>
                                            {expertise?.map((item, index) => (
                                                <div key={index} className='flex gap-2 mt-2 bg-gray-900/50 rounded-[1rem] py-[.2em] px-[.5rem]'>
                                                    <div className='border-1 border-gray-900 text-white text-center py-[.2rem] px-[1rem] rounded-[1rem]'>
                                                        <p className='text-center w-full h-full'>{item}</p>
                                                    </div>
                                                    <button className='bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent' onClick={() => removeExpertise(index)}>
                                                        X
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollShadow>
                                </div>
                            </div>

                            :
                            <div className='flex flex-col gap-[1rem]'>

                                <div className='flex flex-col gap-[1rem]'>
                                    <label>Goals</label>
                                    <input
                                        name='goals'
                                        value={formData.goals}
                                        onChange={handleInputChange}
                                        className='update-input'
                                    />
                                </div>
                                <div className='flex flex-col gap-[1rem]'>
                                    <label>Board</label>
                                    <input
                                        name='board'
                                        value={formData.board}
                                        onChange={handleInputChange}
                                        className='update-input'
                                    />
                                </div>
                            </div>
                        }
                        <div className='flex flex-col gap-[1rem]'>
                            <label>About</label>
                            <textarea
                                name='about'
                                value={formData.about}
                                onChange={handleInputChange}
                                placeholder='Write about yourself...'
                                className='py-[.5rem] px-[.7rem] w-[30rem] h-[10rem] rounded-[.5rem] outline-none border-1 border-white bg-black text-white text-[.8rem]'
                            />
                        </div>

                        <Button color="primary" onClick={user?.email === formData.email ? handleSubmit : handleOTP}>
                            Update
                        </Button>
                    </div>
                </div>
                <Modal
                    backdrop='blur'
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
                                    <Button color='primary' onClick={handleSubmit} className='w-full border-1 border-green-400 bg-black'>
                                        Sign Up
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
};

export default UpdateProfile;
