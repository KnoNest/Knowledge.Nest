"use client"
import { Avatar, Button } from '@nextui-org/react'
import { CardStack } from './ui/Card-stack.jsx'
import { cn } from '@/utils/cn.js'

const HeroQuest = () => {
    return (
        <>
            <div className='mt-[3rem]'>
                <div className='text-center'>
                    <p className='text-[4rem] font-medium bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent'>Testimonials</p>
                </div>
                <div className='grid grid-cols-2 mt-[4rem] gap-6'>
                    <div className='w-[33rem] h-[22rem] border-1 border-gray-300 rounded-[1.5rem]'>
                        <div className='relative top-6 opacity-75 w-[90%] m-auto'>
                            <p className='font-mdium text-[1.3rem]'>The platform allowed me to find a teacher who specializes in my board. The flexibility to choose based on subject and teaching style made it super easy. My chemistry grades have improved, and I'm more confident.</p>
                            <div className='mt-[3rem] flex items-center gap-2'>
                                <Avatar src='' className='w-[3rem] h-[3rem]' />
                                {/* <div className='ml-[1rem] text-[1.2rem] font-medium'> */}
                                    {/* <p>manu_</p> */}
                                    <p>Manu Arora</p>
                                {/* </div> */}
                            </div>

                        </div>
                    </div>
                    <div className='ml-[4rem] mt-[3rem]'>
                        <CardStack items={CARDS} />
                    </div>
                    <div className='ml-[4rem] mt-[3rem]'>
                        <CardStack items={CARD1} />
                    </div>
                    <div className='w-[33rem] h-[22rem] border-1 border-gray-300 rounded-[1.5rem]'>
                        <div className='relative top-6 opacity-75 w-[90%] m-auto'>
                            <p className='font-mdium text-[1.3rem]'>I struggled to find a qualified tutor for my child, but this platform connected us with a fantastic English teacher who really understands the curriculum. My child's reading and writing skills have improved dramatically.</p>
                            <div className='mt-[3rem] flex items-center gap-2'>
                                <Avatar src='' className='w-[3rem] h-[3rem]' />
                                {/* <div className='ml-[1rem] text-[1.2rem] font-medium'> */}
                                    {/* <p>username</p> */}
                                    <p>Hardik</p>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className=' relative left-[47rem] bottom-[27rem]'>
                            <Button className=' bg-gradient-to-r from-indigo-700 to-purple-700 w-[10rem] h-[3rem] bg-white text-[1.3rem] font-medium text-white'>Explore</Button>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default HeroQuest


export const Highlight = ({
    children,
    className,
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};

const CARDS = [
    {
        id: 1,
        name: "Aarav Mehta",
        designation: "High School Student",
        content: (
            <p>
                The platform allowed me to <Highlight>find a teacher who specializes in my board.</Highlight> The flexibility to choose based on subject and teaching style made it super easy. My chemistry grades have improved, and I'm more confident.
            </p>
        ),
    },
    {
        id: 2,
        name: "Priya Sharma",
        designation: "Parent",
        content: (
            <p>
                I struggled to find a qualified tutor for my child, but this platform <Highlight>connected us with a fantastic English teacher</Highlight> who really understands the curriculum. My child's reading and writing skills have improved dramatically.
            </p>
        ),
    },
    {
        id: 3,
        name: "Karan Gupta",
        designation: "College Student",
        content: (
            <p>
                Being able to <Highlight>choose teachers based on subject and board</Highlight> is a game-changer. I found a tutor who makes math fun, and I've seen a significant improvement in my understanding and grades.
            </p>
        ),
    },
];

const CARD1 = [
    {
        id: 0,
        name: "Riya Patel",
        designation: "High School Student",
        content: (
            <p>
                The diversity of teachers on this platform is amazing. I was able to find someone who could teach physics in a way that made sense to me. Now I actually look forward to our sessions!
            </p>
        ),
    },
    {
        id: 1,
        name: "Saanvi Kumar",
        designation: "International Student",
        content: (
            <p>
                As an international student, I needed a tutor who understood my educational background. This platform provided exactly that. I found a fantastic history teacher who <Highlight>tailored lessons to my needs.</Highlight>
            </p>
        ),
    },
    {
        id: 2,
        name: "Rajesh Singh",
        designation: "Parent",
        content: (
            <p>
                The platform's <Highlight>search functionality is excellent.</Highlight> I was able to filter teachers by subject and board, ensuring I found someone who could help me with my specific syllabus. It's been a great experience.
            </p>
        ),
    },
    {
        id: 3,
        name: "Neha Verma",
        designation: "Parent",
        content: (
            <p>
                My daughter needed help with her GCSEs, and we found the perfect tutor through this platform. The teacher is patient, knowledgeable, and has a great way of explaining complex topics.
            </p>
        ),
    },
];
