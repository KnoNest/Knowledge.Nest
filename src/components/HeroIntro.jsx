import { Button } from '@nextui-org/react'
import hero1img from '../../public/hero1-img.jpg'
import hero1img1 from '../../public/hero1-img1.jpg'
import hero1img2 from '../../public/hero1-img2.jpg'
import Image from 'next/image'
import Link from 'next/link'
const HeroIntro = () => {
    return (
        <>
            <div className='mt-[3rem]'>
                <div className='text-center'>
                    <p className='sm:text-[4rem] text-[3rem] font-medium bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent'>TIME TO SHINE</p>
                </div>
                <div className='mt-[3rem] flex lg:gap-[8rem]'>
                    <div className='lg:w-[37rem] md:w-[45rem] sm:w-[40rem] w-[23rem]'>
                        <div className=' w-full h-[25rem] rounded-[1.5rem] bg-gradient-to-br from-purple-300 to-violet-800 transition hover:duration-2000 hover:from-violet-800 hover:to-purple-300 dark:from-black dark:to-black'>
                            <div className='relative top-6 sm:left-10 left-5 w-[90%]'>
                                <p className='text-white font-semibold sm:text-[2.5rem] text-[1.9rem] '>Empower Your Future. Learn Anything, Anytime.</p>
                                <p className='text-white font-medium sm:text-[1.2rem] text-[1rem] mt-4'>Unleash your potential and explore a world of knowledge at your fingertips</p>
                            </div>
                            <div className='lg:w-[32rem] sm:w-[37rem] w-[20rem] flex justify-end items-center h-[15rem]'>
                                <Button as={Link} href='/tutor-page' className='w-[10rem] h-[3rem] bg-white text-[1.3rem] font-medium'><p className='bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent'>Explore</p></Button>
                            </div>
                        </div>
                        <div className='flex w-full justify-center gap-4 mt-[2rem]'>
                            <div className='w-[18rem] overflow-hidden rounded-[1.5rem] sm:h-[15rem] h-[10rem]'>
                                <Image src={hero1img} alt="" loading='lazy' className="w-full sm:h-full h-[10rem] duration-250 hover:scale-[1.2]" />
                            </div>

                            <div className='w-[18rem] rounded-[1.5rem] sm:h-[15rem] h-[10rem] overflow-hidden'>
                                <Image src={hero1img1} alt='' loading='lazy' className="w-full sm:h-full h-[10rem] duration-250 hover:scale-[1.2]" />
                            </div>
                        </div>
                        <div className='md:w-[45rem] sm:w-[40rem] sm:h-[18rem] h-[20rem] mt-[2rem] rounded-[1.5rem] lg:hidden bg-gradient-to-b from-zinc-400 to-zinc-300 dark:from-black dark:to-black'>
                            <div className='relative top-6 left-6  sm:leading-[3rem] leading-[2.5rem] w-[90%]'>
                                <p className='text-white font-semibold sm:text-[2.3rem] text-[1.9rem]'>Access personalized learning with top tutors, tailored to your schedule and goals, empowering you to excel in your educational journey. </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[20rem] h-[42rem] rounded-[1.5rem] lg:flex hidden bg-gradient-to-b from-zinc-400 to-zinc-300 dark:from-black dark:to-black'>
                        <div className='relative top-6 left-6  leading-[3rem] w-[90%]'>
                            <p className='text-white font-semibold text-[2.3rem]'>Access personalized learning with top tutors, tailored to your schedule and goals, empowering you to excel in your educational journey. </p>
                        </div>
                    </div>
                </div>
                {/* <div className='lg:w-full md:w-[45rem] h-[23rem] mt-[9rem] rounded-[1.5rem] flex justify-center border-2 border-gray-200'>
                    <div className='mt-3'>
                        <div className='text-center flex flex-col items-center'>
                            <p className='text-[3.1rem] font-medium tracking-normal'>Boards we cover</p>
                            <div className='border-2 border-gray-200 flex justify-center rounded-[1.3rem] gap-8 font-semibold w-[32rem] py-3 duration-300 hover:shadow-lg '>
                                <p>CBSC</p>
                                <p>ICSC</p>
                                <p>IB</p>
                                <p>IGCSC</p>
                                <p>HSC</p>
                                <p>SSC</p>
                            </div>
                            <p className='text-[2.4rem] mt-[3rem] font-medium tracking-normal'>Language's</p>
                            <div className='border-2 border-gray-200 flex justify-center rounded-[1.3rem] gap-8 font-semibold w-[32rem] py-3 duration-300 hover:shadow-lg '>
                                <p>Hindi</p>
                                <p>Sanskrit</p>
                                <p>French</p>
                                <p>German</p>
                                <p>English</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className='lg:w-full md:w-[45rem] lg:h-[23rem] md:h-[20rem] mt-[9rem] rounded-[1.5rem] flex gap-2  bg-gradient-to-b from-zinc-400 to-zinc-200 dark:from-black dark:to-black '>
                    <div className='h-full lg:w-[33rem] md:w-[28rem]  overflow-hidden rounded-[1.5rem]'>
                        <Image src={hero1img2} alt="" className='w-full h-full' />
                    </div>
                    <div className="w-[30rem]  mt-6">
                        <p className='text-white font-semibold lg:text-[2.1rem] md:text-[1.8rem]'>Struggling in any subject? Get Unstuck with Expert Tutors.</p>
                        <div className='flex gap-[10rem]'>
                            <div className='mt-8'>
                                <Button as={Link} href='/tutor-page' className='py-6 px-8 text-[1rem] text-center  bg-gradient-to-r from-indigo-700 to-purple-700 text-white font-medium '>
                                    Find Tutor
                                </Button>
                            </div>

                            <div className='mt-[2rem] bg-gradient-to-r from-indigo-700 to-purple-700 w-[8rem] h-[8rem] rotate-45  hover:from-purple-700 hover:to-indigo-700 '>
                            </div>

                        </div>
                    </div>

                </div> */}
            </div>
        </>
    )
}

export default HeroIntro
