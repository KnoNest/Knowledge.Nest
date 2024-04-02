"use client"
import React, { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from '@nextui-org/react';
import Slider from 'react-slick';
import LongCard from './LongCard';
import OurCard from './OurCard';
import useSearchApi from '@/fetchApi/useSearchApi';

const HeroFinal = () => {
    const { getTutor } = useSearchApi();
    const [data, setData] = useState([]);
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

    useEffect(() => {
        (async () => {
            const res = await getTutor();
            setData(res);
        })();
    }, []);

    



    return (
        <div className='w-[86%] m-auto'>
            <div className='w-full flex justify-center mb-[4rem]'>
                <p className='text-[4rem] font-medium bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent'>Grab Your First Free class</p>
            </div>
            <div className='w-full'>
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...setting1}
                >
                    {data?.map((data, index) => (
                        <div className='relative' key={index}>
                           <OurCard tutor={data} />
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

            <div className='w-full m-auto'>

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
                        <div key={index}>
                            <LongCard tutor={data} />

                        </div>

                    ))}
                </Slider>
            </div>

        </div>
    );
}

export default HeroFinal;


