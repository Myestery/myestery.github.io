import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className='mt-8 mb-6 py-2 flex justify-center font-font-spring'>
      <nav className='w-[90%] grid grid-cols-5'>
        <div className=' col-span-2'>
          <Image
            src='/logo.svg'
            width={177}
            height={35}
            alt='Picture of the author'
          />
        </div>
        <div className='flex justify-around col-span-3'>
          <Link href='/Home'>Home</Link>
          <Link href='/About'>About</Link>
          <Link href='/Portfolio'>Portfolio</Link>
          <Link href='/Blog'>Blog</Link>
          <div className='flex gap-2 rounded-3xl border border-white  py-2 -my-2'>
            <Image
              src='/right-rounded.svg'
              width={35}
              height={35}
              alt='Picture of the icon'
            />
            <Link href='/projects' className='w-full mx-2 py-1'>
              View Projects
            </Link>
          </div>
        </div>
        {/* <div>world</div> */}
      </nav>
    </div>
  );
}

export default Navbar;
