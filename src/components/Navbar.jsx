"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Input,
  Avatar,
  Switch
} from "@nextui-org/react";
import Link from "next/link";
import getUser from "@/fetchApi/get-user";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { updateSession } = getUser();
  const currentUser = useSelector((state) => state.user.userData);
  const [themeMode, setThemeMode] = useState(null);

  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem("theme"));
    setThemeMode(storedTheme);
  }, []);

  useEffect(() => {
    if (themeMode !== null) {
      const className = themeMode ? "dark" : "light";
      document.documentElement.classList.add(className);
      document.documentElement.classList.remove(themeMode ? "light" : "dark");
    }
  }, [themeMode]);

  const handleThemeChange = () => {
    const newTheme = !themeMode;
    localStorage.setItem("theme", JSON.stringify(newTheme));
    setThemeMode(newTheme);
  };

  useEffect(() => {
    (async () => {
      await updateSession(); // Update the session when the component mounts
    })();
  }, []);
  return (
    <div className="w-[81rem] m-auto sticky top-0 z-20">
      <Navbar shouldHideOnScroll maxWidth="full" className="rounded-[1.5rem]">
        <NavbarBrand className="text-black dark:text-white font-bold text-[1.2rem]">
          <Link href="/" className="font-bold text-inherit">
            KNOWLEDGE NEST
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-1 " justify="center">
          <NavbarItem className="w-[42rem]">
            <Input
              className="w-[40rem]"
              placeholder="Search skills"
              type="search"
            />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="flex gap-[1rem]">

          <NavbarItem className="hidden lg:flex">
            <Switch
            size="sm"
             isSelected={themeMode} 
             onValueChange={handleThemeChange}
             >
              
            </Switch>
            
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            {currentUser?._id ? (
              <Link href={`/profile/user/${currentUser?._id}`}>
                <Avatar
                  className="w-[2.5rem] h-[2.5rem]"
                  src={currentUser?.avatar || ""}
                />
              </Link>
            ) : (
              <Button

                as={Link}
                href="/auth/login"
                color="primary"
                className="w-[6rem]"
              >
                login
              </Button>
            )}
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} className='bg-black text-white w-[9rem]' href="/tutor-page">
              Find Tutor
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavBar;
