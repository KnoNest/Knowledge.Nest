import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input } from "@nextui-org/react";

const NavBar = () => {
    return (
        <>
        <div className='w-[88rem] m-auto sticky top-0 z-20'>

            <Navbar shouldHideOnScroll maxWidth='full' className='rounded-[1.5rem]'>
                <NavbarBrand className='text-black dark:text-white font-bold text-[1.2rem]'>
                    <p className="font-bold text-inherit"> KNOWLEDGE NEST</p>
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
                            <Button as={Link} href='/auth' color='primary' className='w-[6rem]'>Login</Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} className='bg-black text-white w-[9rem]' href="#">
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
