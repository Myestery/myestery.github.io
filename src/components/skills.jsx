"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
export function Skills() {

  useEffect(() => {
    let swiper = new window.Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      autoplay: {
        delay: 5000,
      },
      speed: 400,
      loop: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }, []);

  let skills = [
    {
      title: "React",
      subText:
        "From creating static web apps just like this website to full stack applications with Laravel and Inertia. I have worked with react very well",
      icon: "/img/react.svg",
    },
    {
      title: "Laravel",
      subText:
        "From creating static web apps just like this website to full stack applications with Laravel and Inertia. I have worked with react very well",
      icon: "/img/react.svg",
    },
    {
      title: "Solidity",
      subText:
        "From creating static web apps just like this website to full stack applications with Laravel and Inertia. I have worked with react very well",
      icon: "/img/react.svg",
    },
    {
      title: "Vue",
      subText:
        "From creating static web apps just like this website to full stack applications with Laravel and Inertia. I have worked with react very well",
      icon: "/img/react.svg",
    },
    {
      title: "Nestjs",
      subText:
        "From creating static web apps just like this website to full stack applications with Laravel and Inertia. I have worked with react very well",
      icon: "/img/react.svg",
    },
  ];

  const nextSlide = () => {
    const swiper = document.querySelector(".swiper").swiper;
    swiper.slideNext();
  };
  const prevSlide = () => {
    const swiper = document.querySelector(".swiper").swiper;
    swiper.slidePrev();
  };

  return (
    <div className='bg-[#5DBD8C] my-12 rounded-[50px] py-10 pl-10 text-blacky mx-1 md:mx-8'>
      <div className='flex gap-1 mb-12'>
        <Image
          src='/img/arrow-down-black.svg'
          width={35}
          height={35}
          alt='Picture of the icon'
        />
        <Link
          href='/projects'
          className='flex gap-2 rounded-3xl border-2 border-blacky  py-1'>
          <span className='w-full px-2 text-xs md:text-base'>Why Choose Me</span>
        </Link>
        <div></div>
      </div>

      <div className='md:flex justify-between'>
        <div className='text-2xl text-center md:text-left md:text-6xl md:w-2/5 font-font-spring font-thin'>
          My Extensive List of Skills
        </div>

        <div className='text-lg font-font-spring md:w-1/4 mr-8 font-thin'>
          <div className='hidden md:block pb-6 px-4 border-b-[1.5px]'>
            Building the worlds best web based applications.
          </div>

          <div className='flex gap-2 my-4 justify-end'>
            <Image
              src='/img/arrow-left-rounded-black.svg'
              width={40}
              height={40}
              alt='Picture of the icon'
              onClick={prevSlide}
            />
            <Image
              src='/img/arrow-right-rounded-black.svg'
              width={40}
              height={40}
              alt='Picture of the icon'
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>

      <div className='my-6 swiper pr-2'>
        <div className='swiper-wrapper '>
          {skills.map((x) => (
            <div
              key={x.title}
              className='swiper-slide bg-[#141414] p-6 rounded-3xl'>
              <Image
                src={x.icon}
                width={40}
                height={40}
                alt='Picture of the icon'
                onClick={prevSlide}
              />

              <h4 className='text-lg md:text-2xl my-4 text-[#ffffff]'>{x.title}</h4>

              <p className='text-[#D9D9D9] text-xs md:text-base'>{x.subText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Skills;

