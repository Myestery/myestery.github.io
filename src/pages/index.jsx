import Image from "next/image";
// import { Inter } from "next/font/google";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=''>
      <div className='grid grid-cols-2 ml-[5%] mb-8'>
        <div className=' grid grid-rows-8 h-[723px]'>
          <div className=' row-span-2'></div>
          <div className='row-span-5'>
            <div className='text-[44px] font-font-spring'>I’m Chiwetelu</div>
            <div className='text-[#FCE85B] font-neue-bold text-[108px] font-bold'>
              JOHNPAUL
            </div>
            <div className=' w-[80%] font-thin font-font-spring leading-[46px] text-[32px]'>
              I like{" "}
              <span className=' text-[#5DBE8C] font-neue-bold'>
                BUILDING BIG SYSTEMS
              </span>{" "}
              that people use and I enjoy{" "}
              <span className=' text-[#5DBE8C] font-neue-bold'>
                AUTOMATING things.
              </span>{" "}
              I also{" "}
              <span className=' text-[#5DBE8C] font-neue-bold'>
                TALK AND WRITE
              </span>{" "}
              about those things.
            </div>
          </div>
          <div className='row-span-1 flex items-center gap-6'>
            <Link
              href='/projects'
              className='flex rounded-full border border-white mx -my-2 h-[60%]'>
              <Image
                src='/new-tab.svg'
                width={47}
                height={47}
                style={{ maxHeight: "47px" }}
                alt='Picture of the icon'
              />
              <span
                href='/projects'
                className='block self-center mx-6 font-font-spring'>
                Hire <span className='font-extrabold'>ME</span>
              </span>
            </Link>

            <Link
              href='/projects'
              className='flex rounded-full border border-white mx -my-2 h-[60%]'>
              <Image
                src='/new-tab-circular.svg'
                width={20}
                height={20}
                // style={{ maxHeight: "47px" }}
                alt='Picture of the icon'
                className='ml-4'
              />
              <span
                href='/projects'
                className='block self-center mx-4 font-font-spring'>
                <span className='font-extrabold'>SEE</span> Resume
              </span>
            </Link>
          </div>
        </div>

        <div className='border'></div>
      </div>

      <div className='bg-[#5DBD8C] h-[180px] grid grid-cols-5'>
        <div className='col-span-1'></div>
        <div className='col-span-3 flex justify-between items-center'>
          <div className="h-[60%]">
            <div className="">7+</div>
          </div>
          <div className="h-[60%]">3</div>
          <div className="h-[60%]">3</div>
        </div>
        <div className='col-span-1'></div>
      </div>
    </div>
  );
}
// Home.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//      {page}
//     </Layout>
//   )
// }
/* I like making FUn, interactive things with code. I also TALk & Write about those things. */
