"use client"
import useFeedBackapi from '@/fetchApi/useFeedBackapi';
import { Button, Textarea } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FeedBackForm = () => {
    const user = useSelector(state => state.user.userData);
    const { plateformFeedback } = useFeedBackapi()

    const [content, setContent] = useState({
        userId: user?._id || "",
        feedBack: ""
    });
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setContent(prevState => ({
            ...prevState,
            userId: user?._id || ""
        }));
    }, [user]);

    const handleFeedbackChange = (e) => {
        setContent(prevState => ({
            ...prevState,
            feedBack: e.target.value
        }));
    };

    const handleSubmit = async () => {
        if (!content.feedBack.trim()) {
            toast.error("Please enter your feedback first")
            return
        }
        setLoader(true)
        await plateformFeedback(content)
        setLoader(false)
        setContent({
            feedBack: ""
        })
    };

    return (
        <>
            <div className='w-full flex sm:flex-row flex-col items-center h-screen justify-evenly'>
                <div className='w-[19rem]'>
                    <h1 className='text-[2rem] font-bold'>Please Provide Your Valuable Feedback. This Will Help Us Make Our Service Better</h1>
                </div>
                <div className='w-[25rem] flex flex-col gap-2'>
                    <Textarea
                        label="FeedBack"
                        variant="bordered"
                        placeholder="Enter your FeedBack"
                        disableAnimation
                        disableAutosize
                        classNames={{
                            base: "max-w-[25rem]",
                            input: "resize-y min-h-[10rem]",
                        }}
                        value={content.feedBack}
                        onChange={handleFeedbackChange}
                    />
                        <Button isLoading={loader} className='w-full' onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </>
    );
};

export default FeedBackForm;
