"use client"

import React, { useMemo, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import LongCard from '@/components/LongCard.jsx';
import { Card, Skeleton } from "@nextui-org/react";

const TutorPage = () => {
    const [selectedKeys, setSelectedKeys] = useState(new Set(["Choose Subject"]));
    const [data, setData] = useState(false)

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    setTimeout(() => {
        setData(true)
    }, 3000);


    return (
        <>
            <div>
                <div className='w-[80%] h-[20rem] rounded-[1.5rem] bg-gradient-to-br from-purple-300 to-violet-800 m-auto'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button
                                    className="capitalize bg-white dark:bg-black rounded-l-[1.5rem] rounded-r-none py-[35.8px] w-[7.9rem] mr-[2px] font-medium"
                                >
                                    {selectedValue}
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Single selection example"
                                variant="flat"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selectedKeys}
                                onSelectionChange={setSelectedKeys}
                            >
                                <DropdownItem key="Science">Science</DropdownItem>
                                <DropdownItem key="Maths">Maths</DropdownItem>
                                <DropdownItem key="Social Science">Social Science</DropdownItem>
                                <DropdownItem key="Reasoning">Reasoning</DropdownItem>
                                <DropdownItem key="Computer">Computer</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <div className='flex items-center'>

                            <input
                                className={`w-[40rem] p-[1.5rem] rounded-r-[1.5rem] border-none outline-none dark:bg-black`}
                                placeholder="Search skills"
                                type="text"
                            />
                            <div className='relative right-[3rem] text-[1.8rem]'>
                                <FiSearch />

                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[85%] m-auto mt-[5rem] mb-[8rem]'>
                    {data ?
                        <div>
                            <LongCard className={"my-5"} />
                            <LongCard className={"my-5"} />
                            <LongCard className={"my-5"} />

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
