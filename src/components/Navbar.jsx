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
  Switch,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import Link from "next/link";
import getUser from "@/fetchApi/get-user";
import { useSelector } from "react-redux";


const NavBar = () => {
  const { updateSession } = getUser();
  const currentUser = useSelector((state) => state.user.userData);
  const [themeMode, setThemeMode] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <>

      <div className="sticky top-0 z-20">
        <Navbar
          shouldHideOnScroll
          maxWidth="full"
          className="rounded-[1.5rem]"
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
          </NavbarContent>
          <NavbarBrand className="text-black dark:text-white font-bold sm:text-[1rem] text-[.8rem] md:text-[1.2rem]">
            <Link href="/" className="font-bold text-inherit">
              KNOWLEDGE NEST
            </Link>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-1 " justify="center">
            <NavbarItem className="">
              <Input
                className="lg:w-[40rem] sm:w-[20rem]"
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
                  className="w-[2rem] sm:w-[4] md-[6rem]"
                >
                  login
                </Button>
              )}
            </NavbarItem>
            <NavbarItem className="hidden lg:visible">
              <Button as={Link} className='bg-black text-white w-[2rem] md:w-[9rem] text-[.7rem] h-[2rem] md:text-[.9rem] md:h-[2.5rem]' href="/tutor-page">
                Find Tutor
              </Button>
            </NavbarItem>
            <NavbarItem >
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="capitalize bg-black text-white rounded-[1rem] py-[1.5rem] w-[7.9rem] font-medium"
                  >
                    Menu
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                >
                  <DropdownItem key="Auth">
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
                        className="w-[2rem] sm:w-[4] md-[6rem]"
                      >
                        login
                      </Button>
                    )}
                  </DropdownItem>
                  <DropdownItem key="Maths">

                  </DropdownItem>
                  <DropdownItem key="Find Tutor" as={Link} href="/tutor-page">

                    <Button className="text-white bg-black">Find Tutor</Button>
                  </DropdownItem>
                  <DropdownItem key="Theme">

                    <div className="flex gap-1">

                      <Switch
                        size="sm"
                        isSelected={themeMode}
                        onValueChange={handleThemeChange}
                      />
                      <span>Theme</span>
                    </div>

                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            <NavbarMenuItem>
              <div className="w-full flex flex-col gap-5">
                <div className="flex gap-1">

                  <Switch
                    size="sm"
                    isSelected={themeMode}
                    onValueChange={handleThemeChange}
                  />
                  <span>Theme</span>

                </div>
                <div>
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
                      className="w-[2rem] sm:w-[4] md-[6rem]"
                    >
                      login
                    </Button>
                  )}
                </div>
              </div>
              {/* <Link
                  className="w-full"
                  color={
                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item}
                </Link> */}
            </NavbarMenuItem>
          </NavbarMenu>
        </Navbar>
      </div >

    </>
  );
};

export default NavBar;
