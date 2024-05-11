"use client"

import React, { useEffect, useMemo, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import LongCard from '@/components/LongCard.jsx';
import { Card, Skeleton } from "@nextui-org/react";
import useSearchApi from '@/fetchApi/useSearchApi';
import { useSelector } from 'react-redux';
import usePriceApi from '@/fetchApi/usePriceApi';

const TutorPage = () => {
    const classPrice = useSelector(state => state.price.price)
    const { getPrice } = usePriceApi()
    const { searchTutor, getTutor } = useSearchApi();
    const [subjectKeys, setSubjectKeys] = useState(new Set(["Subject"]));
    const [gradeKeys, setGradeKeys] = useState(new Set(["Grade"]));
    const [experienceKeys, setExperienceKeys] = useState(new Set(["Experience"]));
    const [languageKeys, setLanguageKeys] = useState(new Set(["Language"]));
    const [data, setData] = useState([]);

    useEffect(() => {
          if (!classPrice._id) {
             getPrice()
            }
        }, [])
    
    const selectedSubject = useMemo(
        () => Array.from(subjectKeys).join(", ").replaceAll("_", " "),
        [subjectKeys]
    );

    const selectedGrade = useMemo(
        () => Array.from(gradeKeys).join(", ").replaceAll("_", " "),
        [gradeKeys]
    );

    const selectedExperience = useMemo(
        () => Array.from(experienceKeys).join(", ").replaceAll("_", " "),
        [experienceKeys]
    );

    const selectedLanguage = useMemo(
        () => Array.from(languageKeys).join(", ").replaceAll("_", " "),
        [languageKeys]
    );

    useEffect(() => {
        (async () => {
            const res = await getTutor();
            setData(res);
        })();
    }, []);

    const handleClear = () => {
        setSubjectKeys(new Set(["Subject"]));
        setGradeKeys(new Set(["Grade"]));
        setExperienceKeys(new Set(["Experience"]));
        setLanguageKeys(new Set(["Language"]));
        (async () => {
            const res = await getTutor();
            setData(res);
        })();
    };

    const handleApply = () => {
        (async () => {
            const res = await searchTutor({ subjects: selectedSubject, languages: selectedLanguage, standards: selectedGrade, experience: selectedExperience });
            setData(res)
        })()
    }


    return (
        <>
            <div>
                <div className='w-[80%] h-[20rem] rounded-[1.5rem] bg-gradient-to-br from-purple-300 to-violet-800 m-auto'>
                    <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
                        <div className='flex items-center'>

                            <input
                                className={`w-[40rem] p-[1.5rem] rounded-[1.5rem] border-none outline-none dark:bg-black`}
                                placeholder="Search skills"
                                type="text"
                            />
                            <div className='relative right-[3rem] text-[1.8rem]'>
                                <FiSearch />

                            </div>
                        </div>
                        <div className='flex justify-center gap-6'>

                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        className="capitalize bg-white dark:bg-black rounded-[1rem] py-[1.5rem] w-[7.9rem] font-medium"
                                    >
                                        {selectedSubject}
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Single selection example"
                                    variant="flat"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={subjectKeys}
                                    onSelectionChange={setSubjectKeys}
                                >
                                    <DropdownItem key="Science">Science</DropdownItem>
                                    <DropdownItem key="Maths">Maths</DropdownItem>
                                    <DropdownItem key="Social Science">Social Science</DropdownItem>
                                    <DropdownItem key="Reasoning">Reasoning</DropdownItem>
                                    <DropdownItem key="Computer">Computer</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        className="capitalize bg-white dark:bg-black rounded-[1rem] py-[1.5rem] w-[7.9rem] font-medium"
                                    >
                                        {selectedGrade}
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Single selection example"
                                    variant="flat"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={gradeKeys}
                                    onSelectionChange={setGradeKeys}
                                >
                                    <DropdownItem key="12">12th</DropdownItem>
                                    <DropdownItem key="11">11th</DropdownItem>
                                    <DropdownItem key="10">10th</DropdownItem>
                                    <DropdownItem key="9">9th</DropdownItem>
                                    <DropdownItem key="8">8th</DropdownItem>
                                    <DropdownItem key="7">7th</DropdownItem>
                                    <DropdownItem key="6">6th</DropdownItem>
                                    {/* Add more grades as needed */}
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        className="capitalize bg-white dark:bg-black rounded-[1rem] py-[1.5rem] w-[7.9rem] font-medium"
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
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        className="capitalize bg-white dark:bg-black rounded-[1rem] py-[1.5rem] w-[7.9rem] font-medium"
                                    >
                                        {selectedLanguage}
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Single selection example"
                                    variant="flat"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={languageKeys}
                                    onSelectionChange={setLanguageKeys}
                                >
                                    <DropdownItem key="English">English</DropdownItem>
                                    <DropdownItem key="Hindi">Hindi</DropdownItem>
                                    <DropdownItem key="German">German</DropdownItem>
                                    <DropdownItem key="Sanskrit">Sanskrit</DropdownItem>
                                    <DropdownItem key="French">French</DropdownItem>
                                    {/* Add more languages as needed */}
                                </DropdownMenu>
                            </Dropdown>
                            <Button className='py-[1.5rem] w-[7.9rem]' color='primary' onClick={handleApply}>Apply</Button>
                            <Button className='py-[1.5rem] w-[7.9rem]' color='primary' onClick={handleClear}>Clear</Button>
                        </div>
                    </div>
                </div>

                <div className='w-[85%] m-auto mt-[5rem] mb-[8rem]'>
                    {data.length > 0 ?
                        <div>
                            {data.map((data, index) => (
                                <LongCard className={"my-9"} tutor={data} key={index} />
                            ))}
                        </div>
                        :
                        <div className='w-full'>
                            {Array(3).fill().map((_, index) => (

                                <Card key={index} className="w-full h-[20rem] space-y-5 p-4 my-4" radius="lg">
                                    <div className='flex gap-[3rem] '>

                                        <div>

                                            <Skeleton className="rounded-lg w-[15rem]">
                                                <div className="h-[18rem] rounded-lg bg-default-300"></div>
                                            </Skeleton>
                                        </div>
                                        <div className="mt-[1rem] flex flex-col gap-8 ">
                                            <Skeleton className="w-[20rem] rounded-lg">
                                                <div className="h-[1.5rem]  rounded-lg bg-default-200"></div>
                                            </Skeleton>
                                            <Skeleton className="w-[15rem] rounded-lg">
                                                <div className="h-[1.5rem]  rounded-lg bg-default-200"></div>
                                            </Skeleton>
                                            <Skeleton className="w-[15rem] rounded-lg">
                                                <div className="h-[1.5rem]  rounded-lg bg-default-200"></div>
                                            </Skeleton>
                                            <div className='flex flex-col gap-2 '>

                                                <Skeleton className="w-[30rem] rounded-lg">
                                                    <div className="h-3  rounded-lg bg-default-300"></div>
                                                </Skeleton>
                                                <Skeleton className="w-[28rem] rounded-lg">
                                                    <div className="h-3  rounded-lg bg-default-300"></div>
                                                </Skeleton>
                                                <Skeleton className="w-[26rem] rounded-lg">
                                                    <div className="h-3  rounded-lg bg-default-300"></div>
                                                </Skeleton>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default TutorPage
