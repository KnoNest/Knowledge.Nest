"use client"
import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Input, Avatar } from "@nextui-org/react";
import Link from 'next/link';
import getUser from '@/fetchApi/get-user';

const NavBar = () => {
    const { updateSession } = getUser()
    const [user, setUser] = useState()
    let data

    useEffect(() => {

        try {
            data = localStorage.getItem("user")
            setUser(JSON.parse(data))
        } catch (error) {
    
        }
    },[])

    useEffect(() => {
        (async () => {
            await updateSession()
            try {
                const data = localStorage.getItem("user")
                setUser(JSON.parse(data))
            } catch (error) {

            }
        })()
    }, [])


    return (
        <>
            <div className='w-[81rem] m-auto sticky top-0 z-20'>

                <Navbar shouldHideOnScroll maxWidth='full' className='rounded-[1.5rem]'>
                    <NavbarBrand className='text-black dark:text-white font-bold text-[1.2rem]'>
                        <Link href={"/"} className="font-bold text-inherit"> KNOWLEDGE NEST</Link>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-3 " justify="center">
                        <NavbarItem className='w-[45rem]'>
                            <Input
                                className={`w-[40rem]`}
                                placeholder="Search skills"
                                type="search"
                            />
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent justify="end" className='flex gap-[3rem]'  >
                        <NavbarItem className="hidden lg:flex">
                            {user
                                ?
                                <Link href={`/profile/user/${user?._id}`}>

                                    <Avatar className='w-[2.5rem] h-[2.5rem]' />
                                </Link>
                                :

                                <Button as={Link} href='/auth/login' color='primary' className='w-[6rem]'>login</Button>
                            }
                        </NavbarItem>
                        <NavbarItem>
                            <Button as={Link} className='bg-black text-white w-[9rem]' href="/tutor-page">
                                Find Tutor
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            </div>
        </>
    )
}

export default NavBar
