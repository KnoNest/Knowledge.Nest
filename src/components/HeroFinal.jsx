"use client"
import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Button } from '@nextui-org/react';
import Slider from 'react-slick';
import Image from 'next/image';
import heroImg1 from "../../public/hero1-img2.jpg"
import { IoCallOutline } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const HeroFinal = () => {

    let sliderRef = useRef(null);
    let sliderRef1 = useRef(null);

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const next1 = () => {
        sliderRef1.slickNext();
    };
    const previous1 = () => {
        sliderRef1.slickPrev();
    };

    const setting1 = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000
    };

    const setting2 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000
    };

    const data = [
        {
            name: "elon",
            ceo: true,
            company: "tesla"
        },
        {
            name: "elon",
            ceo: true,
            company: "tesla"
        },
        {
            name: "elon",
            ceo: true,
            company: "tesla"
        },
        {
            name: "elon",
            ceo: true,
            company: "tesla"
        },
        {
            name: "elon",
            ceo: true,
            company: "tesla"
        },
        {
            name: "elon",
            ceo: true,
            company: "tesla"
        }
    ];



    return (
        <div className='w-[88%] m-auto'>
            <div className='w-full flex justify-center mb-[4rem]'>
                <p className='text-[4rem] font-medium bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent'>Grab Your First Free class</p>
            </div>
            <div className='w-full '>
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...setting1}
                >
                    {data.map((data, index) => (
                        <div className='relative left-[1.1rem] mx-4 ' key={index}>
                            <div className='w-[25rem] h-[28rem] rounded-[1.5rem] bg-black border-2 dark:border-gray-800'>
                                <div className='flex relative top-4 left-6'>
                                    <Avatar src='' alt='' className='w-[5rem] h-[5rem]' />
                                    <div className='flex flex-col gap-2 ml-2 mt-2 text-white'>
                                        <p>{data.name}</p>
                                        <p>full name</p>
                                    </div>
                                    <div className='bg-white ml-[4rem] mr-5 w-[2px] h-[5rem]'></div>
                                    <div className='text-white text-center'>
                                        <p>Classes done</p>
                                        <p>25</p>
                                    </div>
                                </div>
                                <div className='text-white relative left-6 mt-[4rem]'>
                                    <div className='flex gap-3 text-white'>
                                        <p>Experties </p>
                                        <p>Science, Austronomical physics</p>
                                    </div>
                                    <div className='flex gap-3 text-white'>
                                        <p>Board </p>
                                        <p>ICSC</p>
                                    </div>
                                    <div className='flex gap-3 text-white'>
                                        <p>Goals </p>
                                        <p>something</p>
                                    </div>
                                    <div className='mt-[2rem]'>
                                        <Button className='bg-white py-6 px-5 font-semibold '>
                                            <p className='bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent'>
                                                Book Class
                                            </p>
                                        </Button>
                                        <div className='w-[70%] m-auto'>
                                            <div className='rounded-full relative right-[-13rem] bottom-[5.5rem] w-[3.1rem] h-[3rem] bg-gradient-to-r from-blue-700 to-purple-700'></div>
                                            <div className='h-[2px] w-[25rem] relative right-[4.8rem] top-[-1.3rem] bg-white rotate-[-30deg]'></div>
                                        </div>
                                        <div className='w-[87%] flex justify-end'>
                                            <Button className='bg-white py-6 px-5 font-semibold '>
                                                <p className='bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent'>
                                                    Feed backs
                                                </p>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="text-center mt-[3rem] flex gap-[9rem] justify-center">
                <Button className="button" onClick={previous}>
                    Prev
                </Button>
                <Button className="button" onClick={next}>
                    Next
                </Button>
            </div>

            <div className='w-[90%] m-auto'>

                <div className="text-center my-[3rem] flex gap-[9rem] justify-center">
                    <Button className="button" onClick={previous1}>
                        Prev
                    </Button>
                    <Button className="button" onClick={next1}>
                        Next
                    </Button>
                </div>

                <Slider
                    ref={slider => {
                        sliderRef1 = slider;
                    }}
                    {...setting2}
                >
                    {data.map((data, index) => (

                        <div key={index} className='w-[90%] h-[24rem] rounded-[1.5rem]  border-2 border-gray-800 m-auto'>
                            <div className='w-full flex relative top-4  h-[92%]'>
                                <div className='w-[15rem] ml-2 h-full overflow-hidden rounded-[1.5rem]'>
                                    <Image src={heroImg1} alt='' loading='lazy' className=" w-full h-full object-cover" />
                                </div>
                                <div className='ml-[2rem]'>
                                    <div className='text-gray-700 dark:text-white'>
                                        <p className='font-semibold text-[2rem]'>krevin the hunter {data.name}</p>
                                        <div className='flex mt-3 text-[1.3rem] gap-4'>
                                            <p className='text-gray-800 font-medium'>Experties</p>
                                            <p className='text-[1rem] relative top-[4px]'>Maths, Quantum physics</p>
                                        </div>
                                        <div className='flex my-1 text-[1.3rem] gap-4 text-center'>
                                            <p className='text-gray-800 font-medium'>Experience</p>
                                            <p className='text-[1rem] relative top-[4px]'>100 Decades</p>
                                        </div>
                                        <div className='flex my-1 text-[1.3rem] gap-4'>
                                            <p className='text-gray-800 font-medium'>Achivement</p>
                                            <p className='text-[1rem] relative top-[4px]'>Zindagi jhand hai</p>
                                        </div>
                                        <div className='flex mt-5 text-[1.1rem] gap-4'>
                                            <p className='w-[35rem] font-medium leading-7 overflow-hidden'>Meri Ek taang nakli hai, Mai hockey ka bohoth bada khiladi tha.
                                                Ek din Uday bhai ko meri kisi baat pe gussa aagaya aur mere he hockey se meri taang ke do tukde kar diye.
                                                Lekin dil ke bohot ache hai, Fauran mujhe hospital le gaye aur ye nakli taang lagwayi lorem...
                                                <Link href={"/"} className='text-blue-600'>read more</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='ml-10'>
                                    <div className='w-[20rem] h-[23.9rem] top-[-1rem] relative bg-gray-100 dark:text-white rounded-[1.5rem]'>
                                        {/* <Tabs tabs={tabs} /> */}
                                        <Tabs defaultValue="1M" className="w-[25.7rem]">
                                            <TabsList className="bg-gray-200 dark:bg-gray-300 w-[78%] rounded-t-[1.5rem] h-[3rem] duration-1000">
                                                <TabsTrigger value="1M" className="font-semibold h-[95%] rounded-[1rem] w-full text-[1rem]">1 Month</TabsTrigger>
                                                <TabsTrigger value="2M" className="font-semibold h-[95%] rounded-[1rem] w-full text-[1rem]">2 Month</TabsTrigger>
                                                <TabsTrigger value="3M" className="font-semibold h-[95%] rounded-[1rem] w-full text-[1rem]">3 Month</TabsTrigger>
                                            </TabsList>
                                            <div className='mt-5 ml-2'>

                                                <TabsContent value="1M">
                                                    <div className='font-medium text-[1.1rem] text-gray-800 relative left-3 leading-7 '>
                                                        <div className='flex gap-3'>
                                                            <MdLiveTv />
                                                            <p className='relative top-[-5px]'>
                                                                weekly classes lorem 2
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
                                                                299 $
                                                            </p>
                                                        </div>

                                                    </div>
                                                </TabsContent>
                                                <TabsContent value="2M">
                                                    <div className='font-medium text-[1.1rem] text-gray-800 relative left-3 leading-7 '>
                                                        <div className='flex gap-3'>
                                                            <MdLiveTv />
                                                            <p className='relative top-[-5px]'>
                                                                weekly classes lorem 2
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
                                                                599 $
                                                            </p>
                                                        </div>

                                                    </div>

                                                </TabsContent>
                                                <TabsContent value="3M">
                                                    <div className='font-medium text-[1.1rem] text-gray-800 relative left-3 leading-7 '>
                                                        <div className='flex gap-3'>
                                                            <MdLiveTv />
                                                            <p className='relative top-[-5px]'>
                                                                weekly classes lorem 2
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
                                                                799 $
                                                            </p>
                                                        </div>

                                                    </div>


                                                </TabsContent>
                                            </div>
                                        </Tabs>
                                        <div className='mt-[2rem] ml-4'>
                                            <Button className='px-[1.8rem] py-[1.5rem] bg-gradient-to-r from-indigo-700 to-purple-700 text-white font-medium'>Book Class</Button>
                                            <div className='absolute h-[2px] w-full rotate-[-35deg] top-[17rem] bg-black'></div>
                                            <div className='mt-[3rem] w-[95%] flex justify-end'>

                                                <Button className='px-[2.5rem] py-[1.5rem] bg-gradient-to-r from-indigo-700 to-purple-700 text-white font-medium'> Profile</Button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
}

export default HeroFinal;


