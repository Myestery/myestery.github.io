import Dropdown from "@/components/dropdown";
import Footer from "@/components/footer";
import Image from "next/image";
// import { Inter } from "next/font/google";
import Link from "next/link";
import Skills from "@/components/skills";
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
  const sortOptions = [
    { name: "Date Modified", value: "date" },
    { name: "Name", value: "name" },
    { name: "Size", value: "size" },
  ];
  const projects = [
    {
      name: "Frendly Lender",
      summary:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci neque corrupti suscipit, nemo voluptas perferendis obcaecati quasi unde rem quisquam praesentium fugiat placeat iste quidem perspiciatis. Nesciunt, modi eligendi! Voluptas.",
      skills: ["React", "Mongo DB"],
      project_link: "https://app.frendlylender.com",
      github_link: "https://github.com/myestery",
      image: "/img/project.png",
    },
    {
      name: "Frendly Lender",
      summary:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci neque corrupti suscipit, nemo voluptas perferendis obcaecati quasi unde rem quisquam praesentium fugiat placeat iste quidem perspiciatis. Nesciunt, modi eligendi! Voluptas.",
      skills: ["React", "Mongo DB"],
      project_link: "https://app.frendlylender.com",
      github_link: "https://github.com/myestery",
      image: "/img/project.png",
    },
    {
      name: "Frendly Lender",
      summary:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci neque corrupti suscipit, nemo voluptas perferendis obcaecati quasi unde rem quisquam praesentium fugiat placeat iste quidem perspiciatis. Nesciunt, modi eligendi! Voluptas.",
      skills: ["React", "Mongo DB"],
      project_link: "https://app.frendlylender.com",
      github_link: "https://github.com/myestery",
      image: "/img/project.png",
    },
    {
      name: "Frendly Lender",
      summary:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci neque corrupti suscipit, nemo voluptas perferendis obcaecati quasi unde rem quisquam praesentium fugiat placeat iste quidem perspiciatis. Nesciunt, modi eligendi! Voluptas.",
      skills: ["React", "Mongo DB"],
      project_link: "https://app.frendlylender.com",
      github_link: "https://github.com/myestery",
      image: "/img/project.png",
    },
  ];
  const [sortBy, setSortBy] = useState({});
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <div className='bg-blacky'>
      <div className='grid grid-cols-2 ml-[5%] mb-8'>
        <div className='col-span-2 md:col-span-1 grid grid-rows-8 md:h-[723px]'>
          <div className='row-span-1 md:row-span-2'></div>
          <div className='row-span-5'>
            <h1 className='text-[20px] md:text-[44px] font-font-spring'>I’m Chiwetelu</h1>
            <h1 className='text-[#FCE85B] font-neue-bold text-[65px] md:text-[108px] font-bold'>
              JOHNPAUL
            </h1>
            <h2 className='text-[18px] md:w-[80%] font-thin font-font-spring md:leading-[46px] md:text-[32px]'>
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
          <div className='row-span-2 md:row-span-1 flex items-center gap-3  md:gap-6'>
            <Link
              href='/projects'
              className='flex rounded-full border border-white mx -my-2 h-[60%]'>
              <Image
                src='/img/new-tab.svg'
                width={47}
                height={47}
                style={{ maxHeight: "47px" }}
                alt='Picture of the icon'
              />
              <span
                href='/projects'
                className='block self-center mx-2 md:mx-6 font-font-spring'>
                Hire <span className='font-extrabold'>ME</span>
              </span>
            </Link>

            <Link
              href='/projects'
              className='flex rounded-full border border-white mx -my-2 h-[60%]'>
              <Image
                src='/img/new-tab-circular.svg'
                width={20}
                height={20}
                // style={{ maxHeight: "47px" }}
                alt='Picture of the icon'
                className='ml-4'
              />
              <span
                href='/projects'
                className='block self-center mx-2 md:mx-4 font-font-spring'>
                <span className='font-extrabold'>SEE</span> Resume
              </span>
            </Link>
          </div>
        </div>

        <div className='border'></div>
      </div>
      <div className='h-auto'>
        <div className='bg-[#5DBD8C] h-auto grid grid-cols-5'>
          <div className='hidden md:block col-span-1'></div>
          <div className='col-span-5 md:col-span-3 flex justify-between items-center px-8 md:px-0'>
            <div className='grid grid-rows-6'>
              <div className='row-span-1'></div>
              <div className='row-span-4'>
                <div className='text-2xl md:text-5xl font-bold text-blacky font-neue-bold pl-8'>
                  5+
                </div>
                <div className='text-normal md:text-2xl font-neue-thin md:pl-5 text-blacky tracking-wide font-thin '>
                  years of
                </div>
                <div className='text-lg md:text-2xl font-neue-regular text-blacky tracking-wide'>
                  experience
                </div>
              </div>
            </div>
            <div className='grid grid-rows-6'>
              <div className='row-span-1'></div>
              <div className='row-span-4'>
                <div className='text-2xl md:text-5xl font-bold text-blacky font-neue-bold pl-8'>
                  20+
                </div>
                <div className='text-lg md:text-2xl font-neue-thin pl-5 text-blacky tracking-wide font-thin '>
                  completed
                </div>
                <div className='text-lg md:text-2xl font-neue-regular text-blacky tracking-wide pl-9'>
                  projects
                </div>
              </div>
            </div>
            <div className='grid grid-rows-6'>
              <div className='row-span-1'></div>
              <div className='row-span-4'>
                <div className='text-2xl md:text-5xl font-bold text-blacky font-neue-bold pl-6'>
                  10+
                </div>
                <div className='text-lg md:text-2xl font-neue-thin pl-5 text-blacky tracking-wide font-thin '>
                  happy
                </div>
                <div className='text-lg md:text-2xl font-neue-regular text-blacky tracking-wide'>
                  customers
                </div>
              </div>
            </div>
          </div>
          <div className='hidden md:block col-span-1'></div>
        </div>
      </div>

      <div className='py-12 mx-[5%]'>
        <div className='flex justify-end'>
          <Link href='/projects' className='flex py-2 -my-2'>
            <Image
              src='/img/arrow-down.svg'
              width={35}
              height={35}
              alt='Picture of the icon'
            />
            <span className='rounded-3xl border border-white w-full py-2 px-2 md:px-4 text-sm md:text-lg font-font-spring font-thin'>
              About Me
            </span>
          </Link>
        </div>
        <div className='flex items-center justify-center'>
          <div className='w-[80%] self-center my-6'>
            <h3 className='font-font-spring text-[24px] md:text-6xl text-center md:leading-[70px]'>
              Every great <span className='text-[#5DBE8C]'>developer</span>{" "}
              <br /> begin with an even better <br /> story
            </h3>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='w-[80%] self-center my-6'>
            <h4 className='font-font-spring text-sm md:text-2xl md:text-center  text-[#A1A1A1]'>
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
          <div className='text-[16px] md:text-2xl text-center'>My Hobbies</div>
          <div className='col-span-5'>
            <div className='flex flex-wrap md:flex-nowrap text-xs md:text-base'>
              <div className='ml-12 bg-[#5DBD8C] text-blacky rotate-12 inline-flex px-4 md:px-8 rounded-full border border-white  py-2 md:py-4 -my-2'>
                <Image
                  src='/img/reading.svg'
                  width={35}
                  height={35}
                  alt='Picture of the icon'
                />
                <span className='py-2 md:py-1'>Reading</span>
              </div>

              <div className='ml-28  inline-flex px-4 md:px-8 rounded-full border-2 border-white  py-2 md:py-4 -my-2'>
                <Image
                  src='/img/gaming.svg'
                  width={35}
                  height={35}
                  alt='Picture of the icon'
                />
                <span className='py-1'>Gaming</span>
              </div>

              <div className='rotate-[18deg] inline-flex px-4 md:px-8 rounded-full border-2 border-white  py-2 md:py-4 -my-2'>
                <Image
                  src='/img/movies.svg'
                  width={30}
                  height={30}
                  alt='Picture of the icon'
                />
                <span className='py-1 mx-2'>Movies</span>
              </div>
            </div>
            <div className='flex gap-4 md:gap-0 mt-7 flex-wrap md:flex-nowrap text-xs md:text-base'>
              <div className=' text-white inline-flex px-4 md:px-8 rounded-full border-2 border-white  py-2 md:py-4 -my-2'>
                <Image
                  src='/img/music.svg'
                  width={35}
                  height={35}
                  alt='Picture of the icon'
                />
                <span className='py-1 mx-2'>Music</span>
              </div>

              <div className='md:ml-10 rotate-[-7deg] text-white inline-flex px-4 md:px-8 rounded-full border-2 border-white  py-2 md:py-4 -my-2'>
                <Image
                  src='/img/coding.svg'
                  width={35}
                  height={35}
                  alt='Picture of the icon'
                />
                <span className='py-1 mx-2'>Coding</span>
              </div>

              <div className='ml-8 text-white inline-flex px-4 md:px-8 rounded-full border-2 border-white  py-2 md:py-4 md:-my-2'>
                <Image
                  src='/img/singing.svg'
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
              src='/img/arrow-down.svg'
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
            <div className='text-2xl md:text-6xl w-1/4 font-font-spring font-thin'>
              Education and Experience
            </div>

            <div className='hidden md:block text-xl font-font-spring w-1/4 mr-8 font-thin'>
              Building the worlds best web based applications.
            </div>
          </div>

          <div className='my-6 border-l-2 border-[#666666] ml-4'>
            {experience.map((exp) => (
              <div key={exp.title} className="mt-8">
                <div className='flex my-1 md:my-4'>
                  <div className='rounded-full bg-[#D9D9D9] p-4 inline-block relative -left-4'></div>

                  <div className='flex text-[#D9D9D9] text-sm md:text-lg ml-8'>
                    {exp.startDuration}{" "}
                    <span className='font-neue-bold -mt-1 mx-3'> - </span>{" "}
                    {exp.endDuration}
                  </div>
                </div>
                <div className='text-base md:text-xl ml-16'>{exp.title}</div>
                <div className='ml-16 text-sm md:text-lg mt-2'>{exp.workplace}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Skills />

      <div className='my-4 flex justify-center'>
        <div className='flex gap-1 mb-12'>
          <Image
            src='/img/arrow-down.svg'
            width={35}
            height={35}
            alt='Picture of the icon'
          />
          <Link
            href='/projects'
            className='flex gap-2 rounded-3xl border border-white  py-1'>
            <span className='w-full px-4'>Work Process</span>
          </Link>
          <div></div>
        </div>
      </div>

      <div className='flex justify-center my-4'>
        <h4 className='md:w-2/5 text-xl md:text-5xl text-center md:leading-[70px]'>
          Take a look at my latest projects.
        </h4>
      </div>

      <div className='flex justify-between mx-4 md:mx-[5%] my-8'>
        <div className=''>
          <span className='text-[#A1A1A1] text-xs md:text-base font-thin mx-1'>Sort By:</span>
          {/* {sortBy.name}{" "} */}
          <Dropdown
            open={isDropDownOpen}
            toggle={setIsDropDownOpen}
            options={sortOptions}
            setFunction={setSortBy}
            className='text-xs md:text-base'></Dropdown>
        </div>

        <div className='flex flex-wrap gap-0 md:gap-2 justify-end'>
          <div className='text-xs md:text-base md:ml-10 text-white inline-flex px-2 md:px-8 rounded-full border md:border-2 border-white  md:py-2 md:-my-2'>
            <Image
              src='/img/filter.svg'
              width={20}
              height={20}
              alt='Picture of the icon'
            />
            <span className='py-1 mx-2'>Filter</span>
            </div>
            <div>
            <Dropdown
              open={isDropDownOpen}
              toggle={setIsDropDownOpen}
              options={sortOptions}
              setFunction={setSortBy}
              className='text-xs md:text-base'></Dropdown>
          </div>
        </div>
      </div>

      <div className='mx-[5%] grid grid-cols-1 md:grid-cols-2 text-blacky gap-4 my-6'>
        {projects.map((project) => (
          <div
            key={project.name}
            className='rounded-3xl p-6 md:p-8 border border-[#ffffff] relative font-font-spring-light md:min-h-[617px] md:min-w-[607px]'
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover"
            }}>
            {/* blackish overlay cos I'm writing on it */}
            <div className='bg-blacky bg-opacity-50  min-h-full min-w-full h-full w-full absolute top-0 left-0 rounded-3xl'></div>
            <div className='relative flex justify-end gap-3 z-10 w-full top-0'>
              {project.skills.map((skill) => (
                <div
                  key={skill}
                  className='rounded-full bg-[#C2BFBD] text-xs py-1 px-2'>
                  {skill}
                </div>
              ))}
            </div>
            <div className='relative h-full text-white z-10 flex flex-col justify-center md:justify-end gap-5 gap-8 mb-8'>
              <h3 className='text-xl md:text-3xl font-font-spring'>{project.name}</h3>
              <p className='text-sm md:text-lg'>{project.summary}</p>
              <div className='flex gap-8 mb-3 md:mb-8'>
                <a href={project.project_link} className='text-lg inline-block'>
                  <Image
                    src='/img/arrow-up-right.svg'
                    width={35}
                    height={35}
                    alt='Picture of the icon'
                  />
                </a>
                <a href={project.github_link} className='text-lg inline-block'>
                  <Image
                    src='/img/github.svg'
                    width={35}
                    height={35}
                    alt='Picture of the icon'
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-end mx-[5%] mb-16 text-xs md:text-base'>
        <Link
          href='/projects'
          className='flex gap-1 md:gap-2 rounded-3xl border border-white  py-2 -my-2'>
          <Image
            src='/img/right-rounded.svg'
            width={20}
            height={20}
            alt='Picture of the icon'
            className="block md:hidden"
          />
          <Image
            src='/img/right-rounded.svg'
            width={35}
            height={35}
            alt='Picture of the icon'
            className="hidden md:block"
          />
          <span className='w-full mx-1 md:mx-2 md:py-1'>See More</span>
        </Link>
      </div>

      <div className='flex justify-start mx-[5%] md-8 md:mb-20'>
        <div className='flex gap-1 mb-12'>
          <Image
            src='/img/arrow-down.svg'
            width={35}
            height={35}
            alt='Picture of the icon'
          className='hidden md:block'
          />
          <Image
            src='/img/arrow-down.svg'
            width={20}
            height={20}
            alt='Picture of the icon'
className='block md:hidden'
          />
          <Link
            href='/projects'
            className='flex gap-2 rounded-3xl border border-white  py-1'>
            <span className='w-full px-4 text-xs md:text-base'>Contact Me</span>
          </Link>
          <div></div>
        </div>
      </div>

      <div className='flex flex-col mx-[5%] my-5 md:my-12'>
        <div className='flex justify-center'>
          <h1 className='text-2xl md:text-3xl font-font-spring'>Get in touch</h1>
        </div>
        <p className='my-4 text-center font-font-spring-light text-[#A1A1A1] md:mx-[15%] text-base md:text-lg'>
          Currently, i am on a lookout for some new opportunities and
          collaborations. if you have a project in mind and you like what you
          have seen so far or you just want to connect, feel free to drop a
          message.
        </p>
      </div>

      <div className='mx-[5%]'>
        <div className='flex justify-center my-6'>
          <input
            name='name'
            type='text'
            className='border-[#282828] border-2 px-4 py-6 w-full md:w-2/5 rounded-2xl bg-[#141414] focus:outline-none autofill:border-[#282828] autofill:bg-[#141414]'
            placeholder='Name'
          />
        </div>

        <div className='flex justify-center my-6'>
          <input
            name='email'
            type='email'
            className='border-[#282828] border-2 px-4 py-6 w-full md:w-2/5 rounded-2xl bg-[#141414] focus:outline-none font-neue-bold'
            placeholder='email'
          />
        </div>

        <div className='flex justify-center my-6'>
          <textarea
            name='message'
            type='text'
            className='border-[#282828] border-2 px-4 py-6 w-full md:w-2/5 rounded-2xl bg-[#141414] focus:outline-none'
            placeholder='Message'
            rows={4}
          />
        </div>

        <div className='flex justify-center my-6'>
          <button className='inline-block bg-[#5DBD8C] rounded-3xl py-3 md:py-6 px-20 text-blacky'>
            SUBMIT
          </button>
        </div>

     
      </div>

      <Footer />
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
