"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IoCallOutline } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { useSelector } from 'react-redux';

const PricingCard = () => {
    const classPrice = useSelector(state => state.price.price)
    const price = classPrice.data
    const [amount, setAmount] = useState()
    const [gradeKeys, setGradeKeys] = useState(new Set(["Choose Grade"]));
    const [selectedTab, setSelectedTab] = useState("0");

    const selectedGrade = useMemo(
        () => Array.from(gradeKeys).join(", ").replaceAll("_", " "),
        [gradeKeys]
    );
    useEffect(() => {
        if (selectedGrade !== "Choose Grade" && price[selectedGrade]) {
            setAmount(price[selectedGrade][Number(selectedTab)]);
        }
    }, [selectedGrade, selectedTab]);

    const handleTabClick = (tabValue) => {
        setSelectedTab(tabValue); // Update the selected tab
    };

    return (
        <>
            <div className=''>
                <div className='lg:w-[20rem] lg:flex-col sm:flex lg:h-[23.9rem] sm:h-[17rem] lg:top-[-1rem] sm:top-[2rem] top-[1rem] relative sm:border-l-1 border-gray-200 dark:text-white rounded-[1.5rem]'>
                    {/* <Tabs tabs={tabs} /> */}
                    <Tabs defaultValue="0" className="w-[25.7rem]">
                        <TabsList className="bg-gray-100 dark:bg-gray-950 w-[77%] rounded-t-[1.5rem] h-[3rem] duration-1000">
                            <TabsTrigger
                                value="0"
                                onClick={() => handleTabClick("0")}
                                className="font-semibold h-[95%] rounded-[1rem] w-full text-[1rem]"
                            >
                                1 Subject
                            </TabsTrigger>
                            <TabsTrigger
                                value="1"
                                onClick={() => handleTabClick("1")}
                                className="font-semibold h-[95%] rounded-[1rem] w-full text-[1rem]"
                            >
                                2 Subject
                            </TabsTrigger>
                            <TabsTrigger
                                value="2"
                                onClick={() => handleTabClick("2")}
                                className="font-semibold h-[95%] rounded-[1rem] w-full text-[1rem]"
                            >
                                3 Subject
                            </TabsTrigger>
                        </TabsList>
                        <div className='my-[1rem] ml-[1rem]'>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        variant={"bordered"}
                                        className="capitalize bg-white dark:bg-black rounded-[1rem]  w-[7.9rem] font-medium"
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
                                    <DropdownItem key="5th">5th</DropdownItem>
                                    <DropdownItem key="6th">6th</DropdownItem>
                                    <DropdownItem key="7th">7th</DropdownItem>
                                    <DropdownItem key="8th">8th</DropdownItem>
                                    <DropdownItem key="9th">9th</DropdownItem>
                                    <DropdownItem key="10th">10th</DropdownItem>
                                    <DropdownItem key="11th">11th</DropdownItem>
                                    <DropdownItem key="12th">12th</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div className='lg:mt-5 ml-2'>

                            <TabsContent value="0">
                                <div className='font-medium text-[1.1rem]  relative left-3 leading-7 '>
                                    <div className='flex gap-3'>
                                        <MdLiveTv />
                                        <p className='relative top-[-5px]'>
                                            2 weekly classes
                                        </p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <IoCallOutline />
                                        <p className='relative top-[-5px]'>doubt calls</p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <IoChatbubbleEllipsesOutline />
                                        <p className='relative top-[-5px]'>etc</p>
                                    </div>
                                    <div className='flex gap-4 mt-4'>
                                        {/* <p className='font-bold text-[1.4rem] text-blue-600 '>USD</p> */}
                                        <p className='font-bold text-[1.4rem] relative bottom-[1px]'>
                                            Rs {amount}
                                        </p>
                                    </div>

                                </div>
                            </TabsContent>
                            <TabsContent value="1">
                                <div className='font-medium text-[1.1rem] relative left-3 leading-7 '>
                                    <div className='flex gap-3'>
                                        <MdLiveTv />
                                        <p className='relative top-[-5px]'>
                                        4 weekly classes
                                        </p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <IoCallOutline />
                                        <p className='relative top-[-5px]'>doubt calls</p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <IoChatbubbleEllipsesOutline />
                                        <p className='relative top-[-5px]'>etc</p>
                                    </div>
                                    <div className='flex gap-4 mt-4'>
                                        {/* <p className='font-bold text-[1.4rem] text-blue-600 '>USD</p> */}
                                        <p className='font-bold text-[1.4rem] relative bottom-[1px]'>
                                        Rs {amount}
                                        </p>
                                    </div>

                                </div>

                            </TabsContent>
                            <TabsContent value="2">
                                <div className='font-medium text-[1.1rem]  relative left-3 leading-7 '>
                                    <div className='flex gap-3'>
                                        <MdLiveTv />
                                        <p className='relative top-[-5px]'>
                                        6 weekly classes
                                        </p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <IoCallOutline />
                                        <p className='relative top-[-5px]'>doubt calls</p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <IoChatbubbleEllipsesOutline />
                                        <p className='relative top-[-5px]'>etc</p>
                                    </div>
                                    <div className='flex gap-4 mt-4'>
                                        {/* <p className='font-bold text-[1.4rem] text-blue-600 '>USD</p> */}
                                        <p className='font-bold text-[1.4rem] relative bottom-[1px]'>
                                        Rs {amount}
                                        </p>
                                    </div>

                                </div>


                            </TabsContent>
                        </div>
                    </Tabs>
                    <div className='mt-[2rem] ml-4'>
                        <Button className='px-[1.8rem] py-[1.5rem] bg-gradient-to-r from-indigo-700 to-purple-700 text-white font-medium'>Book Class</Button>
                        {/* <div className='absolute h-[2px] w-[97%] rotate-[-29deg] top-[18rem] right-1 bg-black dark:bg-white'></div> */}
                        {/* <div className='mt-[3rem] w-[95%] flex justify-end'>

                            <Button className='px-[2.5rem] py-[1.5rem] bg-gradient-to-r from-indigo-700 to-purple-700 text-white font-medium'> Profile</Button>
                        </div> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default PricingCard
