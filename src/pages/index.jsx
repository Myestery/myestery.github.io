import Skills from "@/components/skills";
import Image from "next/image";
// import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const experience = [
    {
      startDuration: "2022",
      endDuration: "Present",
      title: "Software Engineer",
      workplace: "Oystr Finance",
    },
    {
      startDuration: "2018",
      endDuration: "2023",
      title: "Bachelor Degree of Computer Science",
      workplace: "University of Nigeria, Nsukka.",
    },
  ];
  // const [experience, setExperience] = useState()
  return (
    <div className='bg-blacky'>
      <div className='grid grid-cols-2 ml-[5%] mb-8'>
        <div className=' grid grid-rows-8 h-[723px]'>
          <div className=' row-span-2'></div>
          <div className='row-span-5'>
            <h1 className='text-[44px] font-font-spring'>I’m Chiwetelu</h1>
            <h1 className='text-[#FCE85B] font-neue-bold text-[108px] font-bold'>
              JOHNPAUL
            </h1>
            <h2 className=' w-[80%] font-thin font-font-spring leading-[46px] text-[32px]'>
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
            </h2>
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
      <div className='h-auto'>
        <div className='bg-[#5DBD8C] h-auto grid grid-cols-5'>
          <div className='col-span-1'></div>
          <div className='col-span-3 flex justify-between items-center'>
            <div className='grid grid-rows-6'>
              <div className='row-span-1'></div>
              <div className='row-span-4'>
                <div className='text-5xl font-bold text-blacky font-neue-bold pl-8'>
                  5+
                </div>
                <div className='text-2xl font-neue-thin pl-5 text-blacky tracking-wide font-thin '>
                  years of
                </div>
                <div className='text-2xl font-neue-regular text-blacky tracking-wide'>
                  experience
                </div>
              </div>
            </div>
            <div className='grid grid-rows-6'>
              <div className='row-span-1'></div>
              <div className='row-span-4'>
                <div className='text-5xl font-bold text-blacky font-neue-bold pl-8'>
                  20+
                </div>
                <div className='text-2xl font-neue-thin pl-5 text-blacky tracking-wide font-thin '>
                  completed
                </div>
                <div className='text-2xl font-neue-regular text-blacky tracking-wide pl-9'>
                  projects
                </div>
              </div>
            </div>
            <div className='grid grid-rows-6'>
              <div className='row-span-1'></div>
              <div className='row-span-4'>
                <div className='text-5xl font-bold text-blacky font-neue-bold pl-6'>
                  10+
                </div>
                <div className='text-2xl font-neue-thin pl-5 text-blacky tracking-wide font-thin '>
                  happy
                </div>
                <div className='text-2xl font-neue-regular text-blacky tracking-wide'>
                  customers
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-1'></div>
        </div>
      </div>

      <div className='py-12 mx-[5%]'>
        <div className='flex justify-end'>
          <Link href='/projects' className='flex py-2 -my-2'>
            <Image
              src='/arrow-down.svg'
              width={50}
              height={50}
              alt='Picture of the icon'
            />
            <span className='rounded-3xl border border-white w-full py-2 px-4 text-lg font-font-spring font-thin'>
              About Me
            </span>
          </Link>
        </div>
        <div className='flex items-center justify-center'>
          <div className='w-[80%] self-center my-6'>
            <h3 className='font-font-spring text-6xl text-center leading-[70px]'>
              Every great <span className='text-[#5DBE8C]'>developer</span>{" "}
              <br /> begin with an even better <br /> story
            </h3>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='w-[80%] self-center my-6'>
            <h4 className='font-font-spring text-2xl text-center  text-[#A1A1A1]'>
              Lorem ipsum dolor sit amet consectetur. Sit sapien venenatis
              gravida tristique tortor iaculis. Ut arcu laoreet auctor at risus
              at magnis et consectetur. Porta consectetur nisl sed egestas
              tristique egestas lorem urna. Pretium mauris commodo at eget enim
              tortor. Id sed cras sit dignissim vestibulum leo nam. Nulla nisl
              id nisi laoreet nisi lobortis. Aliquam aliquam auctor sagittis in
              quam. Integer lobortis ultrices egestas lacus ornare mauris cras
              tempor posuere. Proin iaculis phasellus pellentesque dapibus vitae
              id aliquet tortor.
            </h4>
          </div>
        </div>
        <div className='grid grid-cols-6 my-12'>
          <div className='text-2xl text-center'>My Hobbies</div>
          <div className='col-span-5'>
            <div className='flex'>
              <div className='ml-12 bg-[#5DBD8C] text-blacky rotate-12 inline-flex px-8 rounded-full border border-white  py-4 -my-2'>
                <Image
                  src='/reading.svg'
                  width={35}
                  height={35}
                  alt='Picture of the icon'
                />
                <span className='py-1'>Reading</span>
              </div>

              <div className='ml-28  inline-flex px-8 rounded-full border-2 border-white  py-4 -my-2'>
                <Image
                  src='/gaming.svg'
                  width={35}
                  height={35}
                  alt='Picture of the icon'
                />
                <span className='py-1'>Gaming</span>
              </div>

              <div className='rotate-[18deg] inline-flex px-8 rounded-full border-2 border-white  py-4 -my-2'>
                <Image
                  src='/movies.svg'
                  width={30}
                  height={30}
                  alt='Picture of the icon'
                />
                <span className='py-1 mx-2'>Movies</span>
              </div>
            </div>
            <div className='flex mt-7'>
              <div className=' text-white inline-flex px-8 rounded-full border-2 border-white  py-4 -my-2'>
                <Image
                  src='/music.svg'
                  width={35}
                  height={35}
                  alt='Picture of the icon'
                />
                <span className='py-1 mx-2'>Music</span>
              </div>

              <div className='ml-10 rotate-[-7deg] text-white inline-flex px-8 rounded-full border-2 border-white  py-4 -my-2'>
                <Image
                  src='/coding.svg'
                  width={35}
                  height={35}
                  alt='Picture of the icon'
                />
                <span className='py-1 mx-2'>Coding</span>
              </div>

              <div className='ml-8 text-white inline-flex px-8 rounded-full border-2 border-white  py-4 -my-2'>
                <Image
                  src='/singing.svg'
                  width={30}
                  height={30}
                  alt='Picture of the icon'
                />
                <span className='py-1 mx-2'>Singing</span>
              </div>
            </div>
          </div>

          <div></div>
        </div>
        <div>
          <div className='flex gap-1 mb-12'>
            <Image
              src='/arrow-down.svg'
              width={35}
              height={35}
              alt='Picture of the icon'
            />
            <Link
              href='/projects'
              className='flex gap-2 rounded-3xl border border-white  py-1'>
              <span className='w-full px-2'>Education</span>
            </Link>
            <div></div>
          </div>

          <div className='flex justify-between'>
            <div className=' text-6xl w-1/4 font-font-spring font-thin'>
              Education and Experience
            </div>

            <div className='text-xl font-font-spring w-1/4 mr-8 font-thin'>
              Building the worlds best web based applications.
            </div>
          </div>

          <div className='my-4 border-l-2 border-[#666666] ml-4'>
            {experience.map((exp) => (
              <div key={exp.title}>
                <div className='flex my-8'>
                  <div className='rounded-full bg-[#D9D9D9] p-4 inline-block relative -left-4'></div>

                  <div className='flex text-[#D9D9D9] text-lg ml-8'>
                    {exp.startDuration}{" "}
                    <span className='font-neue-bold -mt-1 mx-3'> - </span>{" "}
                    {exp.endDuration}
                  </div>
                </div>
                <div className='text-xl ml-16'>{exp.title}</div>

                <div className='ml-16 text-lg'>{exp.workplace}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Skills/>
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
