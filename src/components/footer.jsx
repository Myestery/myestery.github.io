"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
export function Footer() {
  return (
    <footer className='bg-[#141414] pt-3'>
      <div className=' border-b border-[#282828] mx-[5%] pb-4 mb-4'>
        <div className='col-span-2 my-4'>
          <Link href='/'>
            <Image
              src='/img/logo.svg'
              width={177}
              height={35}
              alt='Picture of the author'
            />
          </Link>
        </div>
        <div className='md:w-3/5 text-[#A1A1A1] mb-4'>
          Together, we will make your brand stand out and leave a lasting
          impression on your target audience. Join us in this exciting journey
          towards a greater brand recognition and success
        </div>

        <div className='flex gap-6'>
          <a target="_blank" href='https://github.com/myestery' className='inline-block'>
            <Image
              src='/img/github.svg'
              width={35}
              height={35}
              alt='Picture of the author'
            />
          </a>
          <a target="_blank" href='https://twitter.com/jpchidera' className='inline-block'>
            <Image
              src='/img/twitter.svg'
              width={35}
              height={35}
              alt='Picture of the author'
            />
          </a>
          <a
            target="_blank" href='https://www.linkedin.com/in/myestery'
            className='inline-block'>
            <Image
              src='/img/linkedin.svg'
              width={35}
              height={35}
              alt='Picture of the author'
            />
          </a>
          <a target="_blank" href='mailto:polymenjohn1@gmail.com' className='inline-block'>
            <Image
              src='/img/email.svg'
              width={40}
              height={40}
              alt='Picture of the author'
            />
          </a>
          <a
            target="_blank" href='https://www.codewars.com/users/Myestery'
            className='inline-block'>
            <Image
              src='/img/codewars.svg'
              width={40}
              height={40}
              alt='Picture of the author'
            />
          </a>
        </div>
      </div>

      <div className='flex justify-center pb-4'>
        <div className='text-[#A1A1A1]'>
          Figma Design by{" "}
          <a className='font-neue-bold' target="_blank" href='https://wa.me/2347081368174'>
            @iam_rapha3l
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
