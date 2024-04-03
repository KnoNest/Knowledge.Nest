"use client"
import React from 'react'
import WB from "../../public/WB.png"
import Image from 'next/image'
import { IoMdContacts } from "react-icons/io";
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Support = () => {
    const user = useSelector(state => state.user.userData);

    return (
        <>
            <div className="relative right-5 flex flex-col  justify-center items-center rounded-[3rem] duration-1000 gap-3">
                <Popover placement="right" backdrop={'blur'}>
                    <PopoverTrigger>
                        <Button className='rounded-full border-1 dark:border-white dark:bg-black bg-white shadow-lg  h-[4rem] w-[5rem] flex justify-center items-center '>Ask Us</Button>
                    </PopoverTrigger>
                    <PopoverContent className=''>
                        <div className="px-1 py-4 flex items-center gap-3 ">
                            <div className="text-small font-bold"><a href={`https://wa.me/${918319976740}`} target="_blank">
                                <Image src={WB} alt='' width={100} height={100} className="w-[2rem] h-[2rem] duration-100" />

                            </a></div>

                            <div className="text-tiny">
                                <Link href={"/contact"}>

                                    <IoMdContacts className='w-[2rem] h-[2rem]' />
                                </Link>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                {user?._id && (
                    <Button as={Link} className='bg-white shadow-lg dark:bg-gray-900 ' href='/feedback'>Give FeedBack</Button>
                )}

            </div>
        </>
    )
}

export default Support
