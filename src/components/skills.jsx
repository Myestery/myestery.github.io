"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
export function Skills() {
  let swiper;
  useEffect(() => {
    swiper = new window.Swiper(".swiper", {
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
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
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
      icon: "/react.svg",
    },
    {
      title: "Laravel",
      subText:
        "From creating static web apps just like this website to full stack applications with Laravel and Inertia. I have worked with react very well",
      icon: "/react.svg",
    },
    {
      title: "Solidity",
      subText:
        "From creating static web apps just like this website to full stack applications with Laravel and Inertia. I have worked with react very well",
      icon: "/react.svg",
    },
    {
      title: "Vue",
      subText:
        "From creating static web apps just like this website to full stack applications with Laravel and Inertia. I have worked with react very well",
      icon: "/react.svg",
    },
    {
      title: "Nestjs",
      subText:
        "From creating static web apps just like this website to full stack applications with Laravel and Inertia. I have worked with react very well",
      icon: "/react.svg",
    },
  ];

  const nextSlide = () => {
    swiper.slideNext();
  };
  const prevSlide = () => {
    swiper.slidePrev();
  };

  return (
    <div className='bg-[#5DBD8C] my-12 rounded-[50px] py-10 pl-10 text-blacky mx-8'>
      <div className='flex gap-1 mb-12'>
        <Image
          src='/arrow-down-black.svg'
          width={35}
          height={35}
          alt='Picture of the icon'
        />
        <Link
          href='/projects'
          className='flex gap-2 rounded-3xl border-2 border-blacky  py-1'>
          <span className='w-full px-2 '>Why Choose Me</span>
        </Link>
        <div></div>
      </div>

      <div className='flex justify-between'>
        <div className=' text-6xl w-2/5 font-font-spring font-thin'>
          My Extensive List of Skills
        </div>

        <div className='text-lg font-font-spring w-1/4 mr-8 font-thin'>
          <div className='pb-6 px-4 border-b-[1.5px]'>
            Building the worlds best web based applications.
          </div>

          <div className='flex gap-2 my-4 justify-end'>
            <Image
              src='/arrow-left-rounded-black.svg'
              width={40}
              height={40}
              alt='Picture of the icon'
              onClick={prevSlide}
            />
            <Image
              src='/arrow-right-rounded-black.svg'
              width={40}
              height={40}
              alt='Picture of the icon'
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>

      <div className='my-6 swiper'>
        <div class='swiper-wrapper '>
          {skills.map((x) => (
            <div
              key={x.title}
              class='swiper-slide bg-[#141414] p-6 rounded-3xl'>
              <Image
                src={x.icon}
                width={40}
                height={40}
                alt='Picture of the icon'
                onClick={prevSlide}
              />

              <h4 className='text-2xl my-4 text-[#ffffff]'>{x.title}</h4>

              <p className='text-[#D9D9D9]'>{x.subText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Skills;
