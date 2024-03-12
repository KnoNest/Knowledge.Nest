"use client"
import { Avatar, Button } from '@nextui-org/react'
import { CardStack } from './ui/Card-stack.jsx'
import { cn } from '@/utils/cn.js'

const HeroQuest = () => {
    return (
        <>
            <div className='mt-[3rem]'>
                <div className='text-center'>
                    <p className='text-[4rem] font-medium bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent'>Question</p>
                </div>
                <div className='grid grid-cols-2 mt-[4rem] gap-6'>
                    <div className='w-[33rem] h-[22rem] border-2 border-gray-300 rounded-[1.5rem]'>
                        <div className='relative top-6 opacity-75 w-[90%] m-auto'>
                            <p className='font-mdium text-[1.3rem]'>"I've struggled with understanding complex concepts in [Subject] for a while now. While I've tried various study methods like reading textbooks and taking notes, I still feel lost and haven't made significant progress.</p>
                            <div className='mt-[3rem] flex'>
                                <Avatar src='' className='w-[4rem] h-[4rem]' />
                                <div className='ml-[1rem] text-[1.2rem] font-medium'>
                                    <p>username</p>
                                    <p>full name</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='ml-[4rem] mt-[3rem]'>
                        <CardStack items={CARDS} />
                    </div>
                    <div className='ml-[4rem] mt-[3rem]'>
                        <CardStack items={CARDS} />
                    </div>
                    <div className='w-[33rem] h-[22rem] border-2 border-gray-300 rounded-[1.5rem]'>
                        <div className='relative top-6 opacity-75 w-[90%] m-auto'>
                            <p className='font-mdium text-[1.3rem]'>"I've struggled with understanding complex concepts in [Subject] for a while now. While I've tried various study methods like reading textbooks and taking notes, I still feel lost and haven't made significant progress.</p>
                            <div className='mt-[3rem] flex'>
                                <Avatar src='' className='w-[4rem] h-[4rem]' />
                                <div className='ml-[1rem] text-[1.2rem] font-medium'>
                                    <p>username</p>
                                    <p>full name</p>
                                </div>
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
        id: 0,
        name: "Manu Arora",
        designation: "Senior Software Engineer",
        content: (
            <p>
                These cards are amazing, <Highlight>I want to use them</Highlight> in my
                project. Framer motion is a godsend ngl tbh fam 🙏
            </p>
        ),
    },
    {
        id: 1,
        name: "Elon Musk",
        designation: "Senior Shitposter",
        content: (
            <p>
                I dont like this Twitter thing,{" "}
                <Highlight>deleting it right away</Highlight> because yolo. Instead, I
                would like to call it <Highlight>X.com</Highlight> so that it can easily
                be confused with adult sites.
            </p>
        ),
    },
    {
        id: 2,
        name: "Tyler Durden",
        designation: "Manager Project Mayhem",
        content: (
            <p>
                The first rule of
                <Highlight>Fight Club</Highlight> is that you do not talk about fight
                club. The second rule of
                <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
                club.
            </p>
        ),
    },
];

