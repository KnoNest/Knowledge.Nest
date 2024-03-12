"use client";

import { cn } from "@/utils/cn.js";
import { Avatar } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  rotate
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-8 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <div key={item.name} className={`w-[25rem] h-[18rem] border-2 border-slate-300 rounded-[1.2rem]`}
          >

            <div className=" relative top-6 left-4 w-[90%] flex flex-col" >
              <div className='flex'>
                <Avatar src='' className='w-[3rem] h-[3rem]' />
                <div className='ml-[.5rem] text-[1.1rem] '>
                  <p>username</p>
                  <p>full name</p>
                </div>
              </div>
              <div >
                {item.quote}

              </div>
              <div className='flex absolute top-[12rem] w-full'>
                <div className='mr-[.5rem] relative bottom-1 flex gap-[10rem] justify-center items-center text-[1.1rem] '>
                  <p className="font-semibold">TUTOR</p>
                  <div>
                    <p>username</p>
                    <p>full name</p>
                  </div>
                </div>
                <Avatar src='' className='w-[3rem] h-[3rem]' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
