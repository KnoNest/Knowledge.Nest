"use client"
import { Input, Button } from '@nextui-org/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
    const [contactDetails, setContactDetails] = useState({
        question: "",
        email: "",
        fullName: ""
    });
    const [loader, setLoader] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        if (!contactDetails.fullName || !contactDetails.email || !contactDetails.question) {
            toast.error("Please fill in all required fields");
            return;
        }

        setLoader(true)

        await fetch("/api/mail/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactDetails)
        })
        setLoader(false)
        setContactDetails({
            question: "",
            email: "",
            fullName: ""
        });
    };

    return (
        <>
            <div className='w-[30rem] m-auto flex flex-col justify-center items-center h-screen gap-5'>

                <h1 className='text-[1.5rem] font-bold'>Contact Us</h1>
                <div className='w-full flex flex-col gap-5'>

                    <div>
                        <label htmlFor="fullName">Full Name</label>
                        <Input
                            id="fullName"
                            name="fullName"
                            value={contactDetails.fullName}
                            onChange={handleChange}
                            variant="underlined"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={contactDetails.email}
                            onChange={handleChange}
                            variant="underlined"
                        />
                    </div>
                    <div>
                        <label htmlFor="question">Question</label>
                        <Input
                            id="question"
                            name="question"
                            value={contactDetails.question}
                            onChange={handleChange}
                            variant="underlined"
                        />
                    </div>
                    <Button type="submit" isLoading={loader} onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </>
    );
};

export default Contact;
